const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));
//app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './views'); // all templet goes to view file

// add an Item route
const addAnItem = require('./routes/addAnItem.js');
app.use('/addAnItem', addAnItem);

// update an Item route
const updateAnItem = require('./routes/updateAnItem.js');
app.use('/updateAnItem', updateAnItem);

// delete Item route
const deleteAnItem = require('./routes/deleteAnItem.js');
app.use('/deleteAnItem', deleteAnItem);

// show details route
const showDetail = require('./routes/showDetail.js');
app.use('/showDetail', showDetail);

//render a 404 page
app.use(function(req,res){
  res.status(404).render("notfoundpage.pug");
});

const db=require('./db.js');
db.dbConnect().then(()=> app.listen(3000, ()=>{
    console.log("app is running on port 3000!");
}));

module.exports = app;