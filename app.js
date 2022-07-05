var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/rotasIndex');
var clientesRouter = require('./routes/rotasClientes');
var cadastroRouter = require('./routes/rotasCadastro');
var contatoRouter = require('./routes/rotasContato');
var cadVetRouter = require('./routes/rotasCadVet');
var loginRouter = require('./routes/rotasLogin');
var abaVetRouter = require ('./routes/rotasabaVet')
var CadastroPetRouter = require ('./routes/rotasCadastroPet')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/clientes', clientesRouter);
app.use('/cadastro', cadastroRouter);
app.use('/contato', contatoRouter);
app.use('/cadVet', cadVetRouter);
app.use('/login', loginRouter);
app.use('/abaVeterinario', abaVetRouter);
app.use('/CadastroPet', CadastroPetRouter);
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

// teste branch
module.exports = app;
