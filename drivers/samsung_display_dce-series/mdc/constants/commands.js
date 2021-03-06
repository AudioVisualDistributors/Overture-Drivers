// control
const STATUS_COMMAND = 0x00
const TIME_COMMAND = 0x01
const ON_TIME_COMMAND = 0x02
const OFF_TIME_COMMAND = 0x03
const VIDEO_COMMAND = 0x04
const AUDIO_COMMAND = 0x05
const RGB_COMMAND = 0x06
const PIP_STATUS_COMMAND = 0x07
const MAINTENANCE_COMMAND = 0x08
const SOUND_COMMAND = 0x09
const SERIALNUM_COMMAND = 0x0B
const DISPLAY_STATUS_COMMAND = 0x0D
const SW_VERSION_COMMAND = 0x0E
const AUTO_MOTION_PLUS_COMMAND = 0x0F
const MODEL_COMMAND = 0x10
const POWER_COMMAND = 0x11
const AUDIO_VOLUME_COMMAND = 0x12
const AUDIO_MUTE_COMMAND = 0x13
const INPUT_COMMAND = 0x14
const IMAGE_SIZE_COMMAND = 0x15
const DIRECT_CHANNEL_COMMAND = 0x17
const SCREEN_MODE_COMMAND = 0x19
const MDC_CONNECTION_TYPE_COMMAND = 0x1D
const CONTRAST_COMMAND = 0x24
const BRIGHTNESS_COMMAND = 0x25
const SHARPNESS_COMMAND = 0x26
const COLOR_COMMAND = 0x27
const TINT_COMMAND = 0x28
const RED_GAIN_COMMAND = 0x29
const GREEN_GAIN_COMMAND = 0x2A
const BLUE_GAIN_COMMAND = 0x2B
const TREBLE_COMMAND = 0x2C
const BASS_COMMAND = 0x2D
const BALANCE_COMMAND = 0x2E
const COARSE_COMMAND = 0x2F
const FINE_COMMAND = 0x30
const HPOSITION_COMMAND = 0x31
const VPOSITION_COMMAND = 0x32
const AUTO_POWER = 0x33
const CLEAR_MENU_COMMAND = 0x34
const REMOTE_COMMAND = 0x36
const RGB_CONTRAST_COMMAND = 0x37
const RGB_BRIGHTNESS_COMMAND = 0x38
const PIP_ONOF_COMMAND = 0x3C
const AUTO_ADJUSTMENT_COMMAND = 0x3D
const COLOR_TONE_COMMAND = 0x3E
const COLOR_TEMPERATURE_COMMAND = 0x3F
const PIP_SOURCE_COMMAND = 0x40
const MAINPIP_SWAP_COMMAND = 0x41
const PIP_SIZE_COMMAND = 0x42
const PIP_LOCATE_COMMAND = 0x43
const FAN_SPEED_SETTING_COMMAND = 0x44
const USER_AUTO_COLOR_COMMAND = 0x45
const VIRTUAL_DOLBY_COMMAND = 0x46
const SOUND_SELECT_COMMAND = 0x47
const AUTO_VOLUME_COMMAND = 0x48
const STANDBY_COMMAND = 0x4A
const VIDEO_PICTURE_POSITION_AND_SIZE_COMMAND = 0x4B
const PIXEL_SHIFT_COMMAND = 0x4C
const VIDEOWALL_COMMAND = 0x4F
const EQ_100HZ_COMMAND = 0x51
const EQ_300HZ_COMMAND = 0x52
const EQ_1KHZ_COMMAND = 0x53
const EQ_3KHZ_COMMAND = 0x54
const EQ_10KHZ_COMMAND = 0x55
const BBE_COMMAND = 0x56
const AUTO_LAMP_COMMAND = 0x57
const MANUAL_LAMP_COMMAND = 0x58
const SCROLL_COMMAND = 0x59
const INVERSE_COMMAND = 0x5A
const SAFETY_SCREEN_MFM_COMMAND = 0x5B
const VIDEOWALL_MODE_COMMAND = 0x5C
const SAFETY_LOCK_COMMAND = 0x5D
const PANEL_LOCK_COMMAND = 0x5F
const CHANNEL_UPDOWN_COMMAND = 0x61
const VOLUME_UPDOWN_COMMAND = 0x62
const TICKER_COMMAND = 0x63
const SOUNDSELECT_COMMAND = 0x65
const PC_MODULE_DETECT_COMMAND = 0x66
const DEVICE_NAME_COMMAND = 0x67
const SPEAKER_SELECT_COMMAND = 0x68
const OSD_ONOF_COMMAND = 0x70
const PICTURE_MODE_SET_COMMAND = 0x71
const SOUND_MODE_SET_COMMAND = 0x72
const NR_MODE_SET_COMMAND = 0x73
const PC_COLOR_TONE_COMMAND = 0x75
const AUTO_AUTOADJUSTMENT_COMMAND = 0x76
const ALL_KEYS_LOCK_COMMAND = 0x77
const SRS_TSXT_COMMAND = 0x78
const FILM_MODE_COMMAND = 0x79
const PANEL_ON_TIME_COMMAND = 0x83
const VIDEOWALL_ON_COMMAND = 0x84
const TEMPERATURE_COMMAND = 0x85
const BRIGHTNESS_SENSOR_COMMAND = 0x86
const DYNAMIC_CONSTRAST_COMMAND = 0x87
const VIDEOWALL_USER_COMMAND = 0x89
const MODEL_NAME_COMMAND = 0x8A
const VIDEOWALL_DIRECT_USER_COMMAND = 0x8B
const VIDEOWALL_FEATURE_COMMAND = 0x8C
const FAN_COMMAND = 0x8F
const ENERGY_SAVING_COMMAND = 0x92
const HDMI_BLACK_LEVEL_COMMAND = 0x94
const BLACK_ADJUST_COMMAND = 0x95
const GAMMA_COMMAND = 0x96
const EDGE_ENHANCEMENT_COMMAND = 0x9C
const COLOR_SPACE_COMMAND = 0x9D
const XVYCC_COMMAND = 0x9E
const RESET_COMMAND = 0x9F
const AMBIENT_BRIGHTNESS_MODE_COMMAND = 0xA1
const OSD_DISPLAY_TYPE_ONOFF = 0xA3
const TIMER1_MFM_COMMAND = 0xA4
const TIMER2_MFM_COMMAND = 0xA5
const TIMER3_MFM_COMMAND = 0xA6
const CLOCK_MFM_COMMAND = 0xA7
const HOLIDAY_ADDDELETE_COMMAND = 0xA8
const HOLIDAY_GET_COMMAND = 0xA9
const TIMER4_COMMAND = 0xAB
const TIMER5_COMMAND = 0xAC
const TIMER6_COMMAND = 0xAD
const TIMER7_COMMAND = 0xAE
const EDIT_NAME_COMMAND = 0xAF
const VIRTUAL_REMOTE_COMMAND = 0xB0
const DISPLAY_PORT_DAISY_CHAIN_COMMAND  = 0xB1
const VIDEO_CONFERENCE_SOUND_MODE_COMMAND = 0xB3
const NETWORK_STANDBY_COMMAND = 0xB5
const DST_COMMAND = 0xB6
const CUSTOM_PIP_COMMAND = 0xB7
const AUTO_ID_STATUS_COMMAND = 0xB8
const DISPLAY_ID_INFORMATION = 0xB9
const CLOCKMFM_COMMAND = 0xC5
const ECO_SOLUTION_COMMAND = 0xC6
const EXECUTE_LAUNCHER_COMMAND = 0xC7
const ONSCREEN_DISPLAY_MENU_COMMAND = 0xC8
const SYSTEM_MENU_COMMAND = 0xCA
const NET_PIP_COMMAND = 0xE0
const APPLY_TO_COMMAND = 0xE4
const PANEL_ONOFF_COMMAND = 0xF9
const AUTO_ID_COMMAND = 0xFD
const ACKNAK_COMMAND = 0xFF

// module publics
module.exports = {
  STATUS_COMMAND,
  TIME_COMMAND,
  ON_TIME_COMMAND,
  OFF_TIME_COMMAND,
  VIDEO_COMMAND,
  AUDIO_COMMAND,
  RGB_COMMAND,
  PIP_STATUS_COMMAND,
  MAINTENANCE_COMMAND,
  DISPLAY_STATUS_COMMAND,
  SOUND_COMMAND,
  SW_VERSION_COMMAND,
  SERIALNUM_COMMAND,
  AUTO_MOTION_PLUS_COMMAND,
  MODEL_COMMAND,
  POWER_COMMAND,
  AUDIO_VOLUME_COMMAND,
  AUDIO_MUTE_COMMAND,
  INPUT_COMMAND,
  IMAGE_SIZE_COMMAND,
  DIRECT_CHANNEL_COMMAND,
  SCREEN_MODE_COMMAND,
  MDC_CONNECTION_TYPE_COMMAND,
  CONTRAST_COMMAND,
  BRIGHTNESS_COMMAND,
  SHARPNESS_COMMAND,
  COLOR_COMMAND,
  TINT_COMMAND,
  RED_GAIN_COMMAND,
  GREEN_GAIN_COMMAND,
  BLUE_GAIN_COMMAND,
  TREBLE_COMMAND,
  BASS_COMMAND,
  BALANCE_COMMAND,
  COARSE_COMMAND,
  FINE_COMMAND,
  HPOSITION_COMMAND,
  VPOSITION_COMMAND,
  AUTO_POWER,
  CLEAR_MENU_COMMAND,
  REMOTE_COMMAND,
  RGB_CONTRAST_COMMAND,
  RGB_BRIGHTNESS_COMMAND,
  PIP_ONOF_COMMAND,
  AUTO_ADJUSTMENT_COMMAND,
  COLOR_TONE_COMMAND,
  COLOR_TEMPERATURE_COMMAND,
  PIP_SOURCE_COMMAND,
  MAINPIP_SWAP_COMMAND,
  PIP_SIZE_COMMAND,
  PIP_LOCATE_COMMAND,
  FAN_SPEED_SETTING_COMMAND,
  USER_AUTO_COLOR_COMMAND,
  VIRTUAL_DOLBY_COMMAND,
  SOUND_SELECT_COMMAND,
  AUTO_VOLUME_COMMAND,
  STANDBY_COMMAND,
  VIDEO_PICTURE_POSITION_AND_SIZE_COMMAND,
  PIXEL_SHIFT_COMMAND,
  VIDEOWALL_COMMAND,
  EQ_100HZ_COMMAND,
  EQ_300HZ_COMMAND,
  EQ_1KHZ_COMMAND,
  EQ_3KHZ_COMMAND,
  EQ_10KHZ_COMMAND,
  BBE_COMMAND,
  AUTO_LAMP_COMMAND,
  MANUAL_LAMP_COMMAND,
  SCROLL_COMMAND,
  INVERSE_COMMAND,
  SAFETY_SCREEN_MFM_COMMAND,
  SAFETY_LOCK_COMMAND,
  PANEL_LOCK_COMMAND,
  CHANNEL_UPDOWN_COMMAND,
  VOLUME_UPDOWN_COMMAND,
  TICKER_COMMAND,
  SOUNDSELECT_COMMAND,
  PC_MODULE_DETECT_COMMAND,
  DEVICE_NAME_COMMAND,
  SPEAKER_SELECT_COMMAND,
  OSD_ONOF_COMMAND,
  PICTURE_MODE_SET_COMMAND,
  SOUND_MODE_SET_COMMAND,
  NR_MODE_SET_COMMAND,
  PC_COLOR_TONE_COMMAND,
  AUTO_AUTOADJUSTMENT_COMMAND,
  ALL_KEYS_LOCK_COMMAND,
  SRS_TSXT_COMMAND,
  FILM_MODE_COMMAND,
  PANEL_ON_TIME_COMMAND,
  VIDEOWALL_ON_COMMAND,
  TEMPERATURE_COMMAND,
  BRIGHTNESS_SENSOR_COMMAND,
  DYNAMIC_CONSTRAST_COMMAND,
  VIDEOWALL_USER_COMMAND,
  MODEL_NAME_COMMAND,
  VIDEOWALL_DIRECT_USER_COMMAND,
  VIDEOWALL_FEATURE_COMMAND,
  FAN_COMMAND,
  ENERGY_SAVING_COMMAND,
  HDMI_BLACK_LEVEL_COMMAND,
  BLACK_ADJUST_COMMAND,
  GAMMA_COMMAND,
  EDGE_ENHANCEMENT_COMMAND,
  COLOR_SPACE_COMMAND,
  XVYCC_COMMAND,
  RESET_COMMAND,
  AMBIENT_BRIGHTNESS_MODE_COMMAND,
  OSD_DISPLAY_TYPE_ONOFF,
  TIMER1_MFM_COMMAND,
  TIMER2_MFM_COMMAND,
  TIMER3_MFM_COMMAND,
  CLOCK_MFM_COMMAND,
  HOLIDAY_ADDDELETE_COMMAND,
  HOLIDAY_GET_COMMAND,
  TIMER4_COMMAND,
  TIMER5_COMMAND,
  TIMER6_COMMAND,
  TIMER7_COMMAND,
  EDIT_NAME_COMMAND,
  VIRTUAL_REMOTE_COMMAND,
  DISPLAY_PORT_DAISY_CHAIN_COMMAND,
  VIDEO_CONFERENCE_SOUND_MODE_COMMAND,
  NETWORK_STANDBY_COMMAND,
  DST_COMMAND,
  CUSTOM_PIP_COMMAND,
  AUTO_ID_STATUS_COMMAND,
  DISPLAY_ID_INFORMATION,
  CLOCKMFM_COMMAND,
  ECO_SOLUTION_COMMAND,
  EXECUTE_LAUNCHER_COMMAND,
  ONSCREEN_DISPLAY_MENU_COMMAND,
  SYSTEM_MENU_COMMAND,
  NET_PIP_COMMAND,
  APPLY_TO_COMMAND,
  PANEL_ONOFF_COMMAND,
  AUTO_ID_COMMAND,
  ACKNAK_COMMAND,
  VIDEOWALL_MODE_COMMAND,
}
