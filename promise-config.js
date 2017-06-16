module.exports = {
  'extends': ['./es6-config.js'],
  'plugins': ['promise'],
  'rules': {
    'promise/catch-or-return': 2,
    'promise/no-return-wrap': 2,
    'promise/param-names': 2,
    'promise/always-return': 2,
    'promise/no-native': 0,
    'promise/no-nesting': 0,
    'promise/no-promise-in-callback': 2,
    'promise/no-callback-in-promise': 2,
    'promise/avoid-new': 2,
    'promise/prefer-await-to-then': 0,
    'promise/prefer-await-to-callbacks': 0
  }
};
