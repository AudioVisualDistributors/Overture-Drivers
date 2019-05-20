function createMsg(bytes) {
  // Expects first 4 bytes of the message
  // Adds 4 bytes into a single byte checksum and returns the new array
  let sum = bytes.reduce((acc, val) => acc + val)  // Add all array elements
  sum = sum & 0xFF  // Return lowest byte of result
  bytes.push(sum, 0x6F)  // Add checksum and stop code
  return bytes
}

module.exports = {
  // SET/COMMAND CODES AND FUNCTIONS
  PowerOn : [0xF6, 0x01, 0x01, 0x01, 0xF9, 0x6F],
  PowerOff : [0xF6, 0x01, 0x01, 0x00, 0xF8, 0x6F],
  VolumeUp : [0xF6, 0x0C, 0x00, 0x01, 0x03, 0x6F],
  VolumeDown : [0xF6, 0x0C, 0x00, 0x00, 0x02, 0x6F],
  MuteOn : [0xF6, 0x02, 0x00, 0x01, 0xF9, 0x6F],
  MuteOff : [0xF6, 0x02, 0x00, 0x00, 0xF8, 0x6F],
  AV : [0xF6, 0x30, 0x01, 0x01, 0x28, 0x6F],
  YPbPr : [0xF6, 0x30, 0x01, 0x06, 0x2D, 0x6F],
  VGA : [0xF6, 0x30, 0x01, 0x08, 0x2F, 0x6F],
  HDMI1 : [0xF6, 0x30, 0x01, 0x09, 0x30, 0x6F],
  HDMI2 : [0xF6, 0x30, 0x01, 0x0A, 0x31, 0x6F],
  HDMI3 : [0xF6, 0x30, 0x01, 0x13, 0x3A, 0x6F],
  HDMI4 : [0xF6, 0x30, 0x01, 0x14, 0x3B, 0x6F],
  OPS : [0xF6, 0x30, 0x01, 0x12, 0x39, 0x6F],
  MultiMedia : [0xF6, 0x30, 0x01, 0x0B, 0x32, 0x6F],
  OPSPowerOn : [0xF6, 0x31, 0x01, 0x01, 0x29, 0x6F],
  OPSPowerOff : [0xF6, 0x31, 0x01, 0x02, 0x2A, 0x6F],
  FreezeModeOn : [0xF6, 0x32, 0x01, 0x01, 0x2A, 0x6F],
  FreezeModeOff : [0xF6, 0x32, 0x01, 0x02, 0x2B, 0x6F],
  BlankModeOn : [0xF6, 0x35, 0x01, 0x00, 0x2C, 0x6F],
  BlankModeOff : [0xF6, 0x32, 0x01, 0x01, 0x2D, 0x6F],
  TouchLockOn : [0xF6, 0x36, 0x01, 0x00, 0x2D, 0x6F],
  TouchLockOff : [0xF6, 0x36, 0x01, 0x01, 0x2E, 0x6F],
  RemoteControlLockOn : [0xF6, 0x37, 0x01, 0x00, 0x2E, 0x6F],
  RemoteControlLockOff : [0xF6, 0x37, 0x01, 0x01, 0x2F, 0x6F],
  PictureReset : [0xF6, 0x34, 0x0D, 0x00, 0x37, 0x6F],

  SetAudioLevel: function(level) {
    // F6 0C 01 **  **  6F
    if (level < 0 || level > 100) throw new RangeError('level must be between 0 and 100')
    return createMsg([0xF6, 0x0C, 0x01, level])
  },

  SetContrast: function(level) {
    // F6 34 04  **  **  6F
    if (level < 0 || level > 100) throw new RangeError('level must be between 0 and 100')
    return createMsg([0xF6, 0x34, 0x04, level])
  },

  SetBrightness: function(level) {
    // F6 34 06  **  **  6F
    if (level < 0 || level > 100) throw new RangeError('level must be between 0 and 100')
    return createMsg([0xF6, 0x34, 0x06, level])
  },

  SetSharpness: function(level) {
    // F6 34 08  **  **  6F
    if (level < 0 || level > 100) throw new RangeError('level must be between 0 and 100')
    return createMsg([0xF6, 0x34, 0x08, level])
  },

  SetBlackLevel: function(level) {
    // F6 34 0C **  **  6F
    if (level < 0 || level > 100) throw new RangeError('level must be between 0 and 100')
    return createMsg([0xF6, 0x34, 0x0C, level])
  },


  // GET COMMANDS
  GetPower : [0xF6, 0x01, 0x02, 0x00, 0xF9, 0x6F],
  GetAudioLevel : [0xF6, 0x0C, 0x02, 0x00, 0x04, 0x6F],
  GetAudioMute : [0xF6, 0x02, 0x02, 0x00, 0xFA, 0x6F],
  GetSource : [0xF6, 0x30, 0x02, 0x00, 0x28, 0x6F],
  GetContrast : [0xF6, 0x34, 0x03, 0x00, 0x2D, 0x6F],
  GetBrightness : [0xF6, 0x34, 0x05, 0x00, 0x2F, 0x6F],
  GetSharpness : [0xF6, 0x34, 0x07, 0x00, 0x31, 0x6F]
}