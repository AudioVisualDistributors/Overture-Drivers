'use strict';  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

const TICK_PERIOD = 5000;           // In-built tick interval, used for pinging

let host;
exports.init = _host => {
  host = _host;
};

exports.createDevice = base => {
  const logger = base.logger || host.logger;
  let config;
  let request = host.request;


  // ------------------------------ SETUP FUNCTIONS ------------------------------

  function setup(_config) {
    config = _config;
    base.setTickPeriod(TICK_PERIOD);
  }

  function start() {
    base.startPolling()
  }

  function stop() {
    base.getVar('Status').string = 'Disconnected';
    base.stopPolling()
  }

  function tick() {
    request(`http://${config.host}/#`)
      .then( (response, body) => {
        if (response.statusCode == 200) {
          base.getVar('Status').string = 'Connected';
        }
        else if (response.includes('GRANDVIEW')) {
          base.getVar('Status').string = 'Connected';
        }
        else {
          logger.silly('unknown response')
          logger.silly(response)
        }
      })
      .catch( (err) => {
        base.getVar('Status').string = 'Disconnected';
        logger.error(err);
      });
  }


  // ------------------------------ SEND/RECEIVE HANDLERS ------------------------------

  function sendRequest(url) {
    request(url)
      .then( (response, body) => {
        if (response.statusCode == 200) {
          logger.silly('sendRequest response:');
          logger.silly(body);
        }
        logger.silly('sendRequest response:');
        logger.silly(response);
      })
      .catch( (err) => {
        logger.error('sendRequest error:');
        logger.error(err);
      });
  }


  // ------------------------------ SET FUNCTIONS ------------------------------

  function sendCommand(params) {
    // Commands taken from: https://www.kookaburra.com.au/documents/help/ZATGRIP150V_5.pdf
    if (params.Name == 'Stop') {
      sendRequest(`http://${config.host}/Stop.js?a=100`);
    }
    else if (params.Name == 'Up') {
      sendRequest(`http://${config.host}/Close.js?a=100`);
    }
    else if (params.Name == 'Down') {
      sendRequest(`http://${config.host}/Open.js?a=100`);
    }
  }


  // ------------------------------ EXPORTED FUNCTIONS ------------------------------
  return {
    setup, start, stop, tick,
    sendCommand
  };
};