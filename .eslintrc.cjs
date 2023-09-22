module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'import/namespace': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/named': 'off',
    'import/no-duplicates': 'off',
    'import/no-named-as-default': 'off',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/order': 'off',
    // create-vite generates .jsx
    'react/jsx-filename-extension': 'off',
  },
}
