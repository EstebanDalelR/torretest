
const express = require('express')
const app = express()
var request = require('request')

app.use('/', express.static('./front/build'))

app.get('/getperson/:username', (req, res) => {
  let username = req.params.username
  request(`https://torre.bio/api/bios/${username}`, (error, response, body) => {
    console.log(error)
    res.send(body)
  })
})

app.get('/getconnections/:username', (req, res) => {
  let username = req.params.username
  request(`https://torre.bio/api/people/${username}/connections?limit=20`, (error, response, body) => {
    console.log(error)
    res.send(body)
  })
})

app.listen(3100)
module.exports = app
