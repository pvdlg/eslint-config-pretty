module.exports = {
  extends: ['./es6.js', './promise.js', './ava.js', './prettier.js'],
  parserOptions: {ecmaVersion: 8, sourceType: 'module'},
  rules: {'no-magic-numbers': 0},
};
