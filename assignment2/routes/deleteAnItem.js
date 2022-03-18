const express = require('express');
const req = require('express/lib/request')
const db = require('../db.js');
const router  = express.Router();

router.get('/:id', async function(req, res){
    try{
        const result = await db.deleteAnItem(req.params.id);
        res.redirect("/addAnItem"); // redirect back to users tab
    }catch(err){
        console.log(err);
    }
});

module.exports = router;