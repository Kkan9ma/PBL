// .eslintrc.js
module.exports = {
  extends: ['airbnb', 'prettier'],
  // extends: ['react-app', 'airbnb', 'prettier'],
  rules: {
    // Override rules or Add more rules
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      // presets: ['@babel/preset-react'],
    },
  },
};
