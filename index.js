
const express = require('express')
const app = express()
const path = require('path');

app.use('/', express.static('./front/build'))

app.get("/getperson", (req, res)=> {
  
})

module.exports = app