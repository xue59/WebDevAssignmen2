const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// following are routing method 
// activity 3
app.get('/', function(req, res){
    res.send('hello world zkk!');
});

// app.get('/users', function(req, res){
//     res.send('<h1>This is a list for all my users: </h1>');
// });

// my own test on port 3000 about page 
app.get('/about', function(req, res){
    res.send('<h1>About page:1111 </h1>')
});

//activity 4 
// app.get('/users/:name/id/:id', function(req, res){
//     res.send(`Hello ${req.params.name} <p> welcome to your page your ID is: ${req.params.id}</p> `);
// });

//activity 5 
app.use(express.static('public'));

//activity 6 
// const users = require('./routes/users.js');
// app.use('/users', users);
// console.log(users);

//activity 7 
app.set('views', './views'); // all templet goes to view file


// activity 1 - week7

const fs = require('fs');
//const content ='something content!';
const util = require('util');
const writePromise = util.promisify(fs.writeFile);
const readPromise = util.promisify(fs.readFile);

// writePromise('message.txt', 'test input helloword')
//     .then(() => readPromise('message.txt', 'utf-8'))
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// use aysnc to replace above promise 
async function writeReadPromiseAsync(fileName, fileContent){
    try {
        await writePromise(fileName, fileContent);
        var readData = await readPromise(fileName, 'utf-8');
        console.log(readData);
    }
    catch(err) {
        console.log(readData)
    }
}
//writeReadPromiseAsync('message_async.txt', 'This write by a async function! 2nd time!');

// activity 2 connect to mongodb & insert 
const logger = require('./logger.js'); 
logger.log();
console.log(logger.version);

const mydb=require('./db.js');

mydb.connectToZacksMongodb().then(()=> app.listen(3000, ()=>{
    console.log("app is running on port 3000");
    //mydb.saveUserToDB({name:'testestzack'});
}));

//from previous week6 - activity 6 
const users = require('./routes/users.js');
app.use('/users', users);
// console.log(users);







