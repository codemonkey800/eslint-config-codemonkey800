module.exports = {
  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: 'babel-eslint',
  },

  extends: [
    'codemonkey800',
    'plugin:vue/recommended',
  ],

  plugins: [
    'vue',
  ],

  rules: {
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
  },
};
