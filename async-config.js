module.exports = {
  extends: ['./promise-config.js'],
  rules: {
    'promise/no-nesting': 2,
    'promise/prefer-await-to-then': 2,
    'promise/prefer-await-to-callbacks': 2,
  },
};
