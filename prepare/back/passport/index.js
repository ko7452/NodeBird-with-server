// $npm install passport passport-local
const passport = require('passport');
const local = require('./local');

module.exports = () => {
  passport.serializeUser(() => {
    // todo
  });

  passport.deserializeUser(() => {
    // todo
  });

  local();
};