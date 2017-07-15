module.exports = {
  extends: ['./index.js'],
  parserOptions: {sourceType: 'module'},
  plugins: ['import'],
  rules: {
    // Import plugin - Static analysis
    'import/no-unresolved': [2, {commonjs: true, amd: true}],
    'import/named': 2,
    'import/default': 2,
    'import/namespace': 2,
    'import/no-restricted-paths': 0,
    'import/no-absolute-path': 2,
    'import/no-dynamic-require': 0,
    'import/no-internal-modules': 0,
    'import/no-webpack-loader-syntax': 2,

    // Import plugin - Helpful warnings
    'import/export': 2,
    'import/no-named-as-default': 2,
    'import/no-named-as-default-member': 2,
    'import/no-deprecated': 2,
    'import/no-extraneous-dependencies': 0,
    'import/no-mutable-exports': 2,

    // Import plugin - Module systems
    'import/unambiguous': 0,
    'import/no-commonjs': 0,
    'import/no-amd': 2,
    'import/no-nodejs-modules': 0,

    // Import plugin - Style guide
    'import/first': 2,
    'import/no-duplicates': 2,
    'import/no-namespace': 2,
    'import/extensions': 2,
    'import/order': 2,
    'import/newline-after-import': 0,
    'import/prefer-default-export': 0,
    'import/max-dependencies': 0,
    'import/no-unassigned-import': 0,
    'import/no-named-default': 2,
    'import/no-anonymous-default-export': [
      2,
      {
        allowArray: true,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowLiteral: false,
        allowObject: true,
      },
    ],
  },
};
