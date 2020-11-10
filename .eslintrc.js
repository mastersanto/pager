module.exports = {
  env: {
    browser: true
  },
  plugins: [
      'react',
      'react-hooks'
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  parser: 'babel-eslint'
};
