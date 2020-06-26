const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const indexRouter = require('./routes/index');

const server = express();
const port = process.env.PORT || 5000;

server.listen(port);

// Connect to MongoDB
// huh???
const mongoDB = "mongodb+srv://sandbox-776eb.mongodb.net/messages";
mongoose.connect(mongoDB, { useNewUrlParser: true});
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/messages',  { useNewUrlParser: true });
mongoose.Promise = global.Promise; // ?

// Get the default connection
const db = mongoose.connection;
// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'jade');

server.use(cors());
server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public')));
server.use(bodyParser.json());

server.use('/api', indexRouter);

// catch 404 and forward to error handler
server.use(function(req, res, next) {
  next(createError(404));
});

// error handler
server.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = server;
