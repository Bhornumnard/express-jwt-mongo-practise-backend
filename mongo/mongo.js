// const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path : '../config.env'})
const mongoURL = process.env.DATABASE
const DB = "mongodb+srv://admin:admin@fakebook.7uijj.mongodb.net/Fakebook?retryWrites=true&w=majority"
console.log(mongoURL)
// MongoClient.connect("mongodb+srv://admin:admin@fakebook.7uijj.mongodb.net/Fakebook?retryWrites=true&w=majority" , (err, client)=> {
//     if(err) return console.log(err)
//     console.log("Connected to Database")
// })

const ConnectDB = async ()=> {
 
    mongoose.connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then( con => {
        // console.log(con.connections)
        console.log(`MongoDB Connected: ${con.connection.host}`)
    }).catch (err => {
        console.log(mongoURL)
        
    })
    

}

module.exports = ConnectDB