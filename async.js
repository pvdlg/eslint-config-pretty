module.exports = {
  extends: ['./promise.js'],
  rules: {
    // Promise plugin
    'promise/no-nesting': 2,
    'promise/prefer-await-to-then': 2,
    'promise/prefer-await-to-callbacks': 2,
  },
};
