const fs = require('fs');
const content ='something content!';
const util = require('util');
const writePromise = util.promisify(fs.writeFile);
const readPromise = util.promisify(fs.readFile);

// writePromise('message.txt', 'test input helloword')
// .then(() => readPromise('message.txt', 'utf-8'))
// .then((data) => console.log(data))
// .catch((err) => console.log(err))

const logger = require('./logger.js'); 

logger.log();
console.log(logger.version);

// fs.writeFile('test.txt', content, err => 
//     {
//     if (err) {
//       console.error(err)
//     }
//     //file written successfully
//     fs.readFile('test.txt', 'utf-8', (err,data) => {
//         if (err){console.error(err);}
//         else{
//             console.log('readFile success!')
//         }
//     }); 
//   })

var express = require('express');
var app = express();

// following are routing method 
app.get('/', function(reg, res){
    res.send('hello world zkk!');
});
app.get('/users', function(req, res){
    res.send('<h1>This is a list for all my users: </h1>');
});
app.get('/users/:name', function(req, res){
    res.send(`Hello ${req.params.name} welcome to your page`);
});

app.listen(3000, ()=> {console.log('the app is running on port 3000')})