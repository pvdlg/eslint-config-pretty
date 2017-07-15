module.exports = {
  extends: ['./import-config.js'],
  plugins: ['node'],
  env: {node: true},
  rules: {
    // ESLint - Node.js and CommonJS
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
    'no-sync': [2, {allowAtRootLevel: true}],

    // Node plugin - Possible Errors
    'node/no-extraneous-import': 2,
    'node/no-extraneous-require': 2,
    'node/no-missing-import': 2,
    'node/no-missing-require': 2,
    'node/no-unpublished-bin': 2,
    'node/no-unpublished-import': 2,
    'node/no-unpublished-require': 2,
    'node/no-unsupported-features': 0,
    'node/process-exit-as-throw': 2,
    'node/shebang': [2, {convertPath: {'src/bin/**/*.js': ['^src/(.+?)\\.js$', 'lib/$1.js']}}],

    // Node plugin - Best Practices
    'node/no-deprecated-api': 2,

    // Node plugin - Stylistic Issues
    'node/exports-style': 2,
  },
};
