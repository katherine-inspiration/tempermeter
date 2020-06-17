var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var pgClient = require('./postgreClient');

var app = express();
const router = express.Router();



const port = process.env.PORT || 3000;


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));


app.get('/api/history/results/:user_id', (req, res) => {
  pgClient.getResultsHistory(req.params.user_id, res);
});

app.get('/api', (req, res) => {
  res.json({text: "Hello, api!"})
});


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => console.log(`url-shortener listening on port ${port}!`));

module.exports = app;
