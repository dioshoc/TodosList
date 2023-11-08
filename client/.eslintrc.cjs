module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'ts-prefixer',
    'plugin:jsx-a11y/recommended',
    'plugin:storybook/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { 'project': ['./tsconfig.json'] },
  plugins: ['react-hooks', 'jsx-a11y', '@typescript-eslint', 'import'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'react-hooks/rules-of-hooks': 'error',
    'jsx-a11y/tabindex-no-positive': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'import/no-unresolved': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    'indent': ['error', 2],
    'sort-keys': ['off', 'asc', { 'caseSensitive': false, 'natural': true }],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
      alias: {
        map: [
          ['@', './src'],
        ],
      },
    },
  },
  overrides: [],
};
