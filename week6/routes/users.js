const express = require('express');
const router  = express.Router();

router.get('/', function(req, res){
    res.send('<h1>This is a list for all my users: </h1>');
});

router.get('/:name/id/:id', function(req, res){
    //res.send(`Hello ${req.params.name} <p> welcome to your page your ID is: ${req.params.id}</p> `);
    //activity 7 
    res.render('../views/user.pug', {name:req.params.name});
});

module.exports = router;
