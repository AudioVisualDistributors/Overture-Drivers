'use strict'

const CMD_DEFER_TIME = 3000        // Timeout when using commandDefer
const TICK_PERIOD = 5000           // In-built tick interval
const POLL_PERIOD = 10000           // Continuous polling function interval
const TCP_TIMEOUT = 30000          // Will timeout after this length of inactivity
const TCP_RECONNECT_DELAY = 3000   // How long to wait before attempting to reconnect

const VW_LOOKUP = {
  'None': '0.0.1919.1079.0',
  '2x2 - TL': '0.0.959.539.0',
  '2x2 - TR': '960.0.1919.539.0',
  '2x2 - BL': '0.540.959.1079.0',
  '2x2 - BR': '960.540.1919.1079.0',
  '3x3 - TL': '0.0.639.359.0',
  '3x3 - TC': '640.0.1279.359.0',
  '3x3 - TR': '1280.0.1919.359.0',
  '3x3 - ML': '0.360.639.719.0',
  '3x3 - MC': '640.360.1279.719.0',
  '3x3 - MR': '1280.360.1919.719.0',
  '3x3 - BL': '0.720.639.1079.0',
  '3x3 - BC': '640.720.1279.1079.0',
  '3x3 - BR': '1280.720.1919.1079.0'
}

let host
exports.init = _host => {
  host = _host
}

exports.createDevice = base => {
  const logger = base.logger || host.logger
  let config
  let tcpClient

  let frameParser = host.createFrameParser()
  frameParser.setSeparator('\r\n')
  frameParser.on('data', data => onFrame(data))


  // ------------------------------ SETUP FUNCTIONS ------------------------------

  function isConnected() { return base.getVar('Status').string === 'Connected' }

  function setup(_config) {
    config = _config
    base.setTickPeriod(TICK_PERIOD)

    // Register polling functions
    base.setPoll({ action: 'getMultiviewMode', period: POLL_PERIOD, enablePollFn: isConnected, startImmediately: true })
    base.setPoll({ action: 'getSources', period: POLL_PERIOD, enablePollFn: isConnected, startImmediately: true })
    base.setPoll({ action: 'getQuadviewSources', period: POLL_PERIOD, enablePollFn: isConnected, startImmediately: true })

    // Create source variable for each output
    for (let i = 1; i <= 9; i++) {
      base.createVariable({
        name: `Sources_Output${i}`,
        type: 'enum',
        enums: [
          'Input1',
          'Input2',
          'Input3',
          'Input4',
          'Input5',
          'Input6',
          'Input7',
          'Input8',
          'Input9',
          'Multiview'
        ],
        perform: {
          action: 'selectSource',
          params: {
            Channel: i,
            Name: '$value'
          }
        }
      })
      
      base.createVariable({
        name: `VideowallMode_Output${i}`,
        type: 'enum',
        enums: [
          'None',
          '2x2 - TL',
          '2x2 - TR',
          '2x2 - BL',
          '2x2 - BR',
          '3x3 - TL',
          '3x3 - TC',
          '3x3 - TR',
          '3x3 - ML',
          '3x3 - MC',
          '3x3 - MR',
          '3x3 - BL',
          '3x3 - BC',
          '3x3 - BR'
        ],
        perform: {
          action: 'setVideowallMode',
          params: {
            Channel: i,
            Status: '$string'
          }
        }
      })
    }

    // Create source variable for each 2x2 multiview quadrant
    for (let i = 1; i <= 4; i++) {
      base.createVariable({
        name: `Sources_Quadview${i}`,
        type: 'enum',
        enums: [
          'Input1',
          'Input2',
          'Input3',
          'Input4',
          'Input5',
          'Input6',
          'Input7',
          'Input8',
          'Input9'
        ],
        perform: {
          action: 'selectQuadviewSource',
          params: {
            Channel: i,
            Name: '$value'
          }
        }
      })
    }

  }

  function start() {
    initTcpClient()
  }

  function stop() {
    base.getVar('Status').string = 'Disconnected'
    tcpClient && tcpClient.end()
    tcpClient = null
    base.clearPendingCommands()
  }

  function tick() {
    if (!tcpClient) initTcpClient()
  }

  function initTcpClient() {
    if (tcpClient) return  // Return if tcpClient already exists

    tcpClient = host.createTCPClient()
    tcpClient.setOptions({
      receiveTimeout: TCP_TIMEOUT,
      autoReconnectionAttemptDelay: TCP_RECONNECT_DELAY
    })
    tcpClient.connect(config.port, config.host)

    tcpClient.on('connect', () => {
      logger.silly('TCPClient connected')
      base.getVar('Status').string = 'Connected'
      base.startPolling()
    })

    tcpClient.on('data', data => {
      frameParser.push(data.toString())
    })

    tcpClient.on('close', () => {
      logger.silly('TCPClient closed')
      base.getVar('Status').string = 'Disconnected'  // Triggered on timeout, this allows auto reconnect
    })

    tcpClient.on('error', err => {
      logger.error(`TCPClient: ${err}`)
      stop()  // Throw out the tcpClient and get a fresh connection
    })
  }


  // ------------------------------ SEND/RECEIVE HANDLERS ------------------------------

  function send(data) {
    logger.silly(`TCPClient send: ${data}`)
    return tcpClient && tcpClient.write(data)
  }

  function sendDefer(data) {
    base.commandDefer(CMD_DEFER_TIME)
    if (!send(data)) base.commandError('Data not sent')
  }

  function onFrame(data) {
    let match
    let pendingCommand = base.getPendingCommand()
    logger.silly(`onFrame (pending = ${pendingCommand && pendingCommand.action}): ${data}`)

    // Output Source
    match = data.match(/OUT(\d+) VS IN(\d+)/i)
    if (match) {
    //   base.getVar(`Sources_Output${match[1]}`).value = parseInt(match[2]) - 1
      let v = base.getVar(`Sources_Output${match[1]}`)
      let n = parseInt(match[2]) - 1
      v.value = n
      pendingCommand && base.commandDone()
      return
    }

    // Multiview Mode
    match = data.match(/MVW MODE(\d+)/i)
    if (match) {
      base.getVar('MultiviewModes').value = parseInt(match[1])  // 0 = 3x3, 1 = 2x2
      pendingCommand && base.commandDone()
      return
    }

    // Quadview Source
    match = data.match(/QVW VS (\d+)\.(\d+)\.(\d+)\.(\d+)/i)
    if (match) {
      for (let i = 1; i <= 4; i++) {
        base.getVar(`Sources_Quadview${i}`).value = parseInt(match[i]) - 1
      }
      pendingCommand && base.commandDone()
      return
    }

    // Videowall Mode
    match = data.match(/OUT(\d+) VW XYZ ([\d.]+)/i)
    if (match) {
      for (let key in VW_LOOKUP) {
        if (VW_LOOKUP[key] === match[2]) {
          base.getVar(`VideowallMode_Output${match[1]}`).string = key
          pendingCommand && base.commandDone()
          return
        }
      }
      // If we got here, no match was found, so just set to None
      logger.warning('Unrecognized Videowall coordinates received, setting videowall mode to \'None\'')
      base.getVar(`VideowallMode_Output${match[1]}`).value = 0
      return
    }
  }


  // ------------------------------ GET FUNCTIONS ------------------------------

  function getMultiviewMode() {
    sendDefer('GET MVW MODE\r\n')
  }

  function getSources() {
    sendDefer('GET OUT0 VS\r\n')  // 0 = all
  }

  function getVideowallMode() {
    sendDefer('GET OUT0 VW XYZ\r\n')  // 0 = all
  }

  function getQuadviewSources() {
    sendDefer('GET QVW VS\r\n')
  }


  // ------------------------------ SET FUNCTIONS ------------------------------

  function setMultiviewMode(params) {
    sendDefer(`SET MVW MODE${params.Status}\r\n`)
  }

  function selectSource(params) {
    sendDefer(`SET OUT${params.Channel} VS IN${params.Name + 1}\r\n`)
  }

  function setVideowallMode(params) {
    let coords = VW_LOOKUP[params.Status]
    if (coords !== undefined) {
      sendDefer(`SET OUT${params.Channel} VW XYZ ${coords}\r\n`)
    }
    else {
      logger.error(`setVideowallMode(Channel = ${params.Channel}): Invalid enum selected (${params.Status})`)
    }
  }

  function selectQuadviewSource(params) {
    let sources = [0, 0, 0, 0]  // If left as 0, source is unchanged
    sources[params.Channel - 1] = params.Name + 1  // Channel = 1-4, chooses quadview to change. Name = 0-8 , add 1 to convert to input number
    sendDefer(`SET QVW VS ${sources.join('.')}\r\n`)
  }


  // ------------------------------ EXPORTED FUNCTIONS ------------------------------
  return {
    setup, start, stop, tick,
    getMultiviewMode, getVideowallMode, getSources, getQuadviewSources,
    setMultiviewMode, setVideowallMode, selectSource, selectQuadviewSource
  }
}
