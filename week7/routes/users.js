const express = require('express');
const req = require('express/lib/request')
const db = require('../db.js');
const router  = express.Router();

router.get('/', function(req, res){
    res.send('<h1>This is a list for all my users: </h1>');
});

router.get('/:htmlinputname/', async function(req, res){
    //res.send(`Hello ${req.params.name} <p> welcome to your page your ID is: ${req.params.id}</p> `);
    //activity 7 
    //res.render('../views/user.pug', {name:req.params.name});

    //week7 activity findOne
    //console.log(req.params)
    //db.findUserInDB(req.params)
    console.log(req.params)
    const user = await db.findUserInDB(req.params);
    res.render('../views/user.pug', {name: user.htmlinputname, id:user._id});
    //res.json(user);
});

//week7 activity-1 POST 
router.post('/', async function (req, res) {
    try {
        const data = req.body;
        //console.log('printing saved user data:\n',data);
        await db.saveUserToDB(data);
        res.send("user data saved!");
    } catch(err){
        console.log(err);
    }
});



module.exports = router;


