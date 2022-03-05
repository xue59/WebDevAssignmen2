const express = require('express');
const db = require('../db');
const router  = express.Router();

router.get('/', function(req, res){
    res.send('<h1>This is a list for all my users: </h1>');
});

router.get('/:name/id/:id', function(req, res){
    //res.send(`Hello ${req.params.name} <p> welcome to your page your ID is: ${req.params.id}</p> `);
    //activity 7 
    res.render('../views/user.pug', {name:req.params.name});
});

router.post('/', async function (req, res) {
    try {
        const data = req.body;
        console.log(data);
        await db.saveUser(data);
    } catch(err){
        conslog.log(err);
    }
})

module.exports = router;


