const session = require('express-session');

const Session = session({
  secret: 'secret-key',
  resave: 'false',
  saveUninitialized: true,
  cookie: {
    maxAge: 360000,
  },
});

module.exports = Session;
