module.exports = {
  extends: ['./es6-config.js', './prettier-config.js'],
  parserOptions: {ecmaVersion: 8, sourceType: 'module'},
  rules: {'no-magic-numbers': 0},
};
