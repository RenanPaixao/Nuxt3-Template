
module.exports = {
  root: true,
  // https://www.npmjs.com/package/vue-eslint-parser
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: '2020'
  },
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],
  // https://eslint.org/docs/latest/rules/
  rules: {
    'padded-blocks': ['warn', 'never'],
    'space-before-function-paren': ['warn', 'never'],
    'no-mixed-spaces-and-tabs': 'off',
    quotes: ['error', 'single'],
    'vue/multi-word-component-names': 'off',
    'comma-dangle': ['error', 'never'],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    semi: ['error', 'never'],
    'no-duplicate-imports': 'error',
    strict: 'error',
    'sort-imports': 'error',
    'import/order': 'off',
    'no-tabs': 'off'
  }
}
