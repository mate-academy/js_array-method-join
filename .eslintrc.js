module.exports = {
  extends: 'standard',
  env: {
    node: true,
    jest: true
  },
  rules: {
    semi: ['error', 'always', {'omitLastInOneLineBlock': true}],
    strict: 'error',
    'no-proto': 0
  },
  parserOptions: {
    sourceType: 'script'
  },
  plugins: ['jest']
};
