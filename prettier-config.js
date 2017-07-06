module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'babel/object-curly-spacing': 0,
    'babel/semi': 0,
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: false,
      },
    ],
  },
};
