const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));
app.set('views', './views'); // all templet goes to view file

const addAnItem = require('./routes/addAnItem.js');
app.use('/addAnItem', addAnItem);

const updateAnItem = require('./routes/updateAnItem.js');
app.use('/updateAnItem', updateAnItem);

const deleteAnItem = require('./routes/deleteAnItem.js');
app.use('/deleteAnItem', deleteAnItem);

const showDetail = require('./routes/showDetail.js');
app.use('/showDetail', showDetail);

app.use(function(req,res){
  res.status(404).render("notfoundpage.pug");
});


const db=require('./db.js');
db.dbConnect().then(()=> app.listen(3000, ()=>{
    console.log("app is running on port 3000!");
    //mydb.saveUserToDB({name:'testestzack'});
    //db.findAllItems();
    //db.updateAnItem(id='6233db8b3a81ca22389dd1d9')
}));
