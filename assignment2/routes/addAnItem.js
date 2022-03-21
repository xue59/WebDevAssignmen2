const express = require('express');
const req = require('express/lib/request')
const db = require('../db.js');
const router  = express.Router();
const { check, validationResult } = require('express-validator');
const alert = require('alert')
//const popup = require('popups');


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

router.post('/', [
    check('price').isNumeric().withMessage('Price must be a number!'),
    check('amount').isNumeric().withMessage('Amount must be a number!'),
    check('itemName').isAlphanumeric().withMessage('Item Name must be alphanumeric!'),
    ],
    async function (req, res) {
    //console.log('into post!')
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            let errorMsgStr = new String()
            errors.array().forEach(element => {
                errorMsgStr = errorMsgStr + element['msg'] + ' '
            })
            //console.log(errorMsgStr)
            res.send(`<script>alert("${errorMsgStr}"); window.location.href = "http://localhost:3000/addAnItem" </script>`);            
        } else{
            const data = req.body;
            req.checkBody
            console.log('printing saved user data:\n',data);
            let anItem={
                itemName  : req.body.itemName,
                amount    : req.body.amount,
                price     : req.body.price,
                notes     : req.body.notes
            };
            await db.addAnItem(anItem);
            res.redirect("/addAnItem"); // redirect back to users tab
        }
    } catch(err){
        console.log(err);
    }
});

module.exports = router;