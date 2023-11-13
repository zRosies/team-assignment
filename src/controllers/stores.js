const mongodb = require('../connection/db');
const { ObjectId } = require('mongodb');



const getAllStores = async (req,res,next)=>{
    try{
    const getStoresArray = await mongodb.getDb()
    .db('carRental')
    .collection('stores')
    .find().toArray();

if(getStoresArray.length < 1){
    //throw createError(404, "Not found");
   return res.send('Not Found')
}
//return res.send('list', {data : resultArray});
return res.send (getStoresArray);
}
catch(error){
 
 return next(error);

}
}

const getStoreById = async (req,res,next)=>{
    try{
    const storeId = new ObjectId(req.params.id);
    
    const getStoreArray =  await mongodb.getDb()
    .db('carRental')
    .collection('stores')
    .find({_id: storeId}).toArray();
   

if(getStoreArray.length == 0){
        return res.send(`Store with id${storeId} not found`)
    }


    return res.send (getStoreArray);
}
catch(error){
   
    next(error);
}

}
const putStore = async (req,res,next)=>{
    try{
    const storeId = new ObjectId(req.params.id);
    const getStoreArray =  await mongodb.getDb()
    .db('carRental')
    .collection('stores')
    .find({_id: storeId}).toArray();
   

if(getStoreArray.length == 0){
    return res.send (`Store with id${planetId} not found`)
    }
    return res.send(`Store with id ${storeId} has been updated`);
}
catch(error){
   
    next(error);
}



}

const postStore = async (req,res,next)=>{
    try{
    const newStore = req.body;

    const getStoreArray =  await mongodb.getDb()
    .db('carRental')
    .collection('stores')
    .insertOne(newStore);
    if(!getStoreArray.acknowledged){

        return res.send(`Something went wrong`)
        }
    
        return res.send("New Store has been added");
}
    catch(error){

        next(error);
    }



}
const deleteStore = async (req,res,next) => {
    try{
        const storeId = new ObjectId(req.params.id);
        const getStoreArray =  await mongodb.getDb()
        .db('carRental')
        .collection('stores')
        .deleteOne({ _id: storeId});
    if(getStoreArray.deletedCount == 0){

        return res.send(`Store with id ${storeId} not found`);

       }

        return res.send(`Store with id ${storeId} has been deleted`);}

    catch(error){
        next(error);
        }



}





module.exports = { getAllStores, getStoreById, putStore, postStore, deleteStore}