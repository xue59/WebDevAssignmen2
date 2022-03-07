const {MongoClient} = require('mongodb');
const url='mongodb+srv://zackxue:Shanghai123%40@cluster0.s9wzm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const client = new MongoClient(url);

async function connectToZacksMongodb(){
    try {
        await client.connect();
        console.log('Zack Mongodb connects successfully!');
    } catch (err){
        console.log(err);
    }
};

async function saveUserToDB(newUser) {
    try{
        const result = await client.db('cs5610').collection('users').insertOne(newUser);
        console.log(result);
    } catch (err){
        console.log(err);
    }
}

async function findOneUserInDB(targetUser) {
    try{
        const result = await client.db('cs5610').collection('users').findOne(targetUser);
        return result;
    } catch(err){
        console.log(err);
    }
}

async function findAllUsersInDB(){
    try{
        const result = await client.db('cs5610').collection('users').find({})
        return (result);
    } catch (err){
        console.log(err);
    }
}



//  Testing purpose：
//  connectToZacksMongodb().then(()=>{
//     saveToDB({thirduser:'Cici'})}
//     );

//export the functions for other file to use
module.exports = {
    connectToZacksMongodb,
    saveUserToDB,
    findOneUserInDB,
    findAllUsersInDB
} 




