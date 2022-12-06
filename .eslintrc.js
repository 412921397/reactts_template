module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    'no-empty-function': 1, // 禁止出现空函数
    'jsx-a11y/anchor-is-valid': 'off' //注销a标签的警告
  }
};
