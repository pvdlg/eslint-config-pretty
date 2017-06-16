module.exports = {
  'extends': ['@metahub/eslint-config/promise-config'],
  'rules': {
    'promise/no-nesting': 2,
    'promise/prefer-await-to-then': 2,
    'promise/prefer-await-to-callbacks': 2
  }
}
