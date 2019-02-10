
const express = require('express')
const app = express()

app.use('/', express.static('./front/build'))

app.get('/getperson', (req, res) => {
  let username = req.body.username
  fetch(`https://torre.bio/api/bios/${username}`)
    .then(resp => {
      res.send(resp)
    })
    .catch(error => console.error('sorry, something went wrong:' + error))
})

app.get('/getconnections', (req, res) => {
  let username = req.body.username
  fetch(`https://torre.bio/api/people/${username}/connections?limit=20`)
    .then(resp => {
      res.send(resp)
    })
    .catch(error => console.error('sorry, something went wrong:' + error))
})

app.listen(3100)
module.exports = app
