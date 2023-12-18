module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'import/extensions': 'off',
    'no-undef': 'off',
    'no-underscore-dangle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-new': 'off',
    'no-unused-expressions': 'off',
    'import/no-mutable-exports': 'off',
    'no-dupe-keys': 'off',
    'no-use-before-define': 'off',
  },
};
