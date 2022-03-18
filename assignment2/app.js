// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
  res.send('hello world zkk!');
});// testing purpose  
app.get('/about', function(req, res){
  res.send('<h1>About page:1111 </h1>')
}); // testing purpose 

app.use(express.static('public'));
app.set('views', './views'); // all templet goes to view file

const addAnItem = require('./routes/addAnItem.js');
app.use('/addAnItem', addAnItem);
const updateAnItem = require('./routes/updateAnItem.js');
app.use('/updateAnItem', updateAnItem);
const deleteAnItem = require('./routes/deleteAnItem.js');
app.use('/deleteAnItem', deleteAnItem);


const db=require('./db.js');
db.dbConnect().then(()=> app.listen(3000, ()=>{
    console.log("app is running on port 3000!");
    //mydb.saveUserToDB({name:'testestzack'});
    //db.findAllItems();
    //db.updateAnItem(id='6233db8b3a81ca22389dd1d9')
}));
