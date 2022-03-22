const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://admin:admin123@cluster0.nw4rp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const ObjectID = require('mongodb').ObjectID;


//set up the connection
async function dbConnect() {
    try{
        await client.connect();
        console.log("Connect to DB:ASSIGNMENT2SHOPPINGLIST success!");
    } catch(err){
        console.log(err);
    }
}

// add an Item to the DB
async function addAnItem(anItem){
    try {
        await client.db("assignment2shoppinglist").collection("shoppinglist").insertOne(anItem);
        //console.log('DB Success added: \n', anItem);
    }catch (err){
        console.log(err);
    }
}

// find all items in the db and return a cursor 
async function findAllItems(){
    try{
        const allItems = client.db("assignment2shoppinglist").collection("shoppinglist").find({});
        return allItems;
    }catch (err){
        console.log(err)
    }
}

// find One item in the DB
async function findAnItem(id){
    try{
        const anItem = client.db("assignment2shoppinglist").collection("shoppinglist").findOne(ObjectID(id));
        return anItem;
    }catch (err){
        console.log(err)
    }
}

// update/change an Item in the DB
async function updateAnItem(id, newItem){
    try{
        //console.log(id,newItem)
        let myquery = { '_id': ObjectID(id)}
        let newItemToDB = {$set: newItem};
        await client.db("assignment2shoppinglist").collection("shoppinglist").updateOne(myquery, newItemToDB).then(console.log('update success!'))
    }catch(err){
        console.log(err)
    }
}

//remove one Item in the DB
async function deleteAnItem(id){
    try{
        let myquery = { '_id': ObjectID(id)}
        await client.db("assignment2shoppinglist").collection("shoppinglist").deleteOne(myquery).then(console.log('delete one success!'))
    } catch(err){
        console.log(err)
    }
}

module.exports = {
    dbConnect,
    addAnItem,
    findAllItems,
    updateAnItem,
    findAnItem,
    deleteAnItem
};