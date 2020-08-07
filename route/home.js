const express = require('express')
const route = express.Router()
const home = require('../controller/home')
route.get ('/',  home.getData)
route.post('/', home.postData)
route.put('/:id', home.putData)
route.delete('/',home.deleteData)

module.exports = route