const express = require('express');
const req = require('express/lib/request')
const db = require('../db.js');
const router  = express.Router();

router.get('/', async function(req, res){
    //res.send('<h1>This is a list for all my users: </h1>');
    try{
        //const result = await (await db.findAllUsersInDB()).toArray();
        //console.log(result, result.length)
        const result = await (await db.findAllItems()).toArray();
        //console.log(result)
        res.render("../views/addAnItem.pug", allItems=result)
    }catch(err){
        console.log(err);
    }
});

router.post('/', async function (req, res) {
    //console.log('into post!')
    try {
        const data = req.body;
        console.log('printing saved user data:\n',data);
        let anItem={
            itemName  : req.body.itemName,
            amount    : req.body.amount,
            price     : req.body.price
        };
        await db.addAnItem(anItem);
        res.redirect("/addAnItem"); // redirect back to users tab
    } catch(err){
        console.log(err);
    }
});

module.exports = router;