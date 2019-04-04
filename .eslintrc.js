module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    jest: true
  },
  rules: {
    'no-proto': 0
  },
  parserOptions: {
    sourceType: 'script'
  },
  plugins: ['jest']
};
