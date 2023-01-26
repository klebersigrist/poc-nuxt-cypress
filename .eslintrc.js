module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    semi: ['error', 'always'],
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
  },
};
