module.exports = {
  'extends': ['@metahub', '@metahub/eslint-config/import-config'],
  'parserOptions': {
    'sourceType': 'module'
  },
  'env': {
    'node': true
 },
  'rules': {
   // Node.js and CommonJS
   'callback-return': [2, ['done', 'callback']],
   'global-require': 2,
   'handle-callback-err': 2,
   'no-buffer-constructor': 2,
   'no-mixed-requires': 0,
   'no-new-require': 2,
   'no-path-concat': 2,
   'no-process-env': 0,
   'no-process-exit': 0,
   'no-restricted-modules': 0,
   'no-sync': 0
  }
};
