const express = require('express');
const req = require('express/lib/request')
const db = require('../db.js');
const router  = express.Router();

router.get('/:id', async function(req, res){
    try{
        //console.log(req.params.id)
        const result = await db.findAnItem(req.params.id);
        //console.log('find one result: \n', result)
        res.render("../views/updateAnItem.pug", anItem=result)
    }catch(err){
        console.log(err);
    }
});

router.post('/:id', async function(req, res){
    try{
        let newItem ={
            itemName  : req.body.itemName,
            amount    : req.body.amount,
            price     : req.body.price
        };
        const result = await db.updateAnItem(req.params.id, newItem);
        res.redirect("/addAnItem"); // redirect back to users tab
    }catch(err){
        console.log(err);
    }
});

module.exports = router;