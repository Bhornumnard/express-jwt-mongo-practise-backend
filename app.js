const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = "8080";
const home = require('./route/home')
const connectDB = require('./mongo/mongo')
app.use(cors())
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
connectDB()
app.use('/home', home)

app.listen(port, ()=> {
    console.log("server running at port 8080")
} )