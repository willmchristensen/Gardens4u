const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { environment } = require('./config');
const isProduction = environment === 'production';
// routes folder
const routes = require('./routes');

const app = express();
// catch sequelize errors and format them before sending error response
const { ValidationError } = require('sequelize');
// Set the view engine to ejs
app.set('view engine', 'ejs');
// morgan middleware
app.use(morgan('dev'));
// cookies (parsing) middleware
app.use(cookieParser());
// json (req handler) middleware
app.use(express.json());
// cors middleware
if (!isProduction) {
  // enable cors only in development
  app.use(cors());
}
// helmet middleware
app.use(
  helmet.crossOriginResourcePolicy({
    policy: "cross-origin"
  })
);
// _csrf token & create req.csrfToken method
app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true
    }
  })
);

// use routes folder
app.use(routes);

// ----------error handler : resource not found-------------------
// Catch unhandled requests and forward to error handler.
app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  // invoking next error handler
  next(err);
});
// ----------error handler : Sequelize Error-Handler--------------
app.use((err, _req, _res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = 'Validation error';
  }
  next(err);
});
// -------------- Error formatter------------------
app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || 'Server Error',
    statusCode: err.status,
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack
  });
});
module.exports = app;
