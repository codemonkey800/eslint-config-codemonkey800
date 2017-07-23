module.exports = {
  parser: 'babel-eslint',

  extends: 'airbnb-base',

  plugins: [
    'babel',
  ],

  rules: {
    'arrow-parens': ['error', 'as-needed'],

    'babel/new-cap': 'warn',
  },
};
