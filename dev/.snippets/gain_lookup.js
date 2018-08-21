// NOTE: Device allows for 127 steps from -∞dB to +10dB, this list is truncated to 100 steps for percent control
module.exports.channel = {
     0:  0x00,  // -∞dB
     1:  0x02,  // -68dB
     2:  0x03,  // -66dB
     3:  0x04,  // -64dB
     4:  0x06,  // -60dB
     5:  0x07,  // -59dB
     6:  0x08,  // -58dB
     7:  0x09,  // -57dB
     8:  0x0B,  // -55dB
     9:  0x0C,  // -54dB
    10:  0x0D,  // -53dB
    11:  0x0E,  // -52dB
    12:  0x10,  // -50dB
    13:  0x11,  // -49dB
    14:  0x12,  // -48dB
    15:  0x13,  // -47dB
    16:  0x15,  // -45dB
    17:  0x16,  // -44dB
    18:  0x17,  // -43dB
    19:  0x19,  // -41dB
    20:  0x1A,  // -40dB
    21:  0x1B,  // -39.5dB
    22:  0x1C,  // -39dB
    23:  0x1E,  // -38dB
    24:  0x1F,  // -37.5dB
    25:  0x20,  // -37dB
    26:  0x21,  // -36.5dB
    27:  0x23,  // -35.5dB
    28:  0x24,  // -35dB
    29:  0x25,  // -34.5dB
    30:  0x26,  // -34dB
    31:  0x28,  // -33dB
    32:  0x29,  // -32.5dB
    33:  0x2A,  // -32dB
    34:  0x2B,  // -31.5dB
    35:  0x2D,  // -30.5dB
    36:  0x2E,  // -30dB
    37:  0x2F,  // -29.5dB
    38:  0x30,  // -29dB
    39:  0x32,  // -28dB
    40:  0x33,  // -27.5dB
    41:  0x34,  // -27dB
    42:  0x35,  // -26.5dB
    43:  0x37,  // -25.5dB
    44:  0x38,  // -25dB
    45:  0x39,  // -24.5dB
    46:  0x3A,  // -24dB
    47:  0x3C,  // -23dB
    48:  0x3D,  // -22.5dB
    49:  0x3E,  // -22dB
    50:  0x40,  // -21dB
    51:  0x41,  // -20.5dB
    52:  0x42,  // -20dB
    53:  0x43,  // -19.5dB
    54:  0x45,  // -18.5dB
    55:  0x46,  // -18dB
    56:  0x47,  // -17.5dB
    57:  0x48,  // -17dB
    58:  0x4A,  // -16dB
    59:  0x4B,  // -15.5dB
    60:  0x4C,  // -15dB
    61:  0x4D,  // -14.5dB
    62:  0x4F,  // -13.5dB
    63:  0x50,  // -13dB
    64:  0x51,  // -12.5dB
    65:  0x52,  // -12dB
    66:  0x54,  // -11dB
    67:  0x55,  // -10.5dB
    68:  0x56,  // -10dB
    69:  0x57,  // -9.5dB
    70:  0x59,  // -8.5dB
    71:  0x5A,  // -8dB
    72:  0x5B,  // -7.5dB
    73:  0x5C,  // -7dB
    74:  0x5E,  // -6dB
    75:  0x5F,  // -5.5dB
    76:  0x60,  // -5dB
    77:  0x61,  // -4.5dB
    78:  0x63,  // -3.5dB
    79:  0x64,  // -3dB
    80:  0x65,  // -2.5dB
    81:  0x66,  // -2dB
    82:  0x68,  // -1dB
    83:  0x69,  // -0.5dB
    84:  0x6A,  // 0dB
    85:  0x6C,  // 1dB
    86:  0x6D,  // 1.5dB
    87:  0x6E,  // 2dB
    88:  0x6F,  // 2.5dB
    89:  0x71,  // 3.5dB
    90:  0x72,  // 4dB
    91:  0x73,  // 4.5dB
    92:  0x74,  // 5dB
    93:  0x76,  // 6dB
    94:  0x77,  // 6.5dB
    95:  0x78,  // 7dB
    96:  0x79,  // 7.5dB
    97:  0x7B,  // 8.5dB
    98:  0x7C,  // 9dB
    99:  0x7D,  // 9.5dB
    100: 0x7E,  // 10dB
}

// NOTE: Device allows for 81 steps from -∞dB to +10dB, this list is expanded to 100 steps for percent control
module.exports.crosspoint = {
     0:  0x00,  // -∞dB
     1:  0x01,  // -70dB
     2:  0x02,  // -69dB
     3:  0x03,  // -68dB
     4:  0x04,  // -67dB
     5:  0x04,  // -67dB
     6:  0x05,  // -66dB
     7:  0x06,  // -65dB
     8:  0x07,  // -64dB
     9:  0x08,  // -63dB
    10:  0x09,  // -62dB
    11:  0x09,  // -62dB
    12:  0x0A,  // -61dB
    13:  0x0B,  // -60dB
    14:  0x0C,  // -59dB
    15:  0x0D,  // -58dB
    16:  0x0D,  // -58dB
    17:  0x0E,  // -57dB
    18:  0x0F,  // -56dB
    19:  0x10,  // -55dB
    20:  0x11,  // -54dB
    21:  0x11,  // -54dB
    22:  0x12,  // -53dB
    23:  0x13,  // -52dB
    24:  0x14,  // -51dB
    25:  0x15,  // -50dB
    26:  0x15,  // -50dB
    27:  0x16,  // -49dB
    28:  0x17,  // -48dB
    29:  0x18,  // -47dB
    30:  0x19,  // -46dB
    31:  0x1A,  // -45dB
    32:  0x1A,  // -45dB
    33:  0x1B,  // -44dB
    34:  0x1C,  // -43dB
    35:  0x1D,  // -42dB
    36:  0x1E,  // -41dB
    37:  0x1E,  // -41dB
    38:  0x1F,  // -40dB
    39:  0x20,  // -39dB
    40:  0x21,  // -38dB
    41:  0x22,  // -37dB
    42:  0x22,  // -37dB
    43:  0x23,  // -36dB
    44:  0x24,  // -35dB
    45:  0x25,  // -34dB
    46:  0x26,  // -33dB
    47:  0x26,  // -33dB
    48:  0x27,  // -32dB
    49:  0x28,  // -31dB
    50:  0x29,  // -30dB
    51:  0x2A,  // -29dB
    52:  0x2B,  // -28dB
    53:  0x2B,  // -28dB
    54:  0x2C,  // -27dB
    55:  0x2D,  // -26dB
    56:  0x2E,  // -25dB
    57:  0x2F,  // -24dB
    58:  0x2F,  // -24dB
    59:  0x30,  // -23dB
    60:  0x31,  // -22dB
    61:  0x32,  // -21dB
    62:  0x33,  // -20dB
    63:  0x33,  // -20dB
    64:  0x34,  // -19dB
    65:  0x35,  // -18dB
    66:  0x36,  // -17dB
    67:  0x37,  // -16dB
    68:  0x37,  // -16dB
    69:  0x38,  // -15dB
    70:  0x39,  // -14dB
    71:  0x3A,  // -13dB
    72:  0x3B,  // -12dB
    73:  0x3C,  // -11dB
    74:  0x3C,  // -11dB
    75:  0x3D,  // -10dB
    76:  0x3E,  // -9dB
    77:  0x3F,  // -8dB
    78:  0x40,  // -7dB
    79:  0x40,  // -7dB
    80:  0x41,  // -6dB
    81:  0x42,  // -5dB
    82:  0x43,  // -4dB
    83:  0x44,  // -3dB
    84:  0x44,  // -3dB
    85:  0x45,  // -2dB
    86:  0x46,  // -1dB
    87:  0x47,  // 0dB
    88:  0x48,  // 1dB
    89:  0x48,  // 1dB
    90:  0x49,  // 2dB
    91:  0x4A,  // 3dB
    92:  0x4B,  // 4dB
    93:  0x4C,  // 5dB
    94:  0x4D,  // 6dB
    95:  0x4D,  // 6dB
    96:  0x4E,  // 7dB
    97:  0x4F,  // 8dB
    98:  0x50,  // 9dB
    99:  0x51,  // 10dB
    100:  0x51,  // 10dB
}