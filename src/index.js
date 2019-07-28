// const metascraper = require('metascraper')([
//   require('metascraper-author')(),
//   require('metascraper-date')(),
//   require('metascraper-description')(),
//   require('metascraper-image')(),
//   require('metascraper-logo')(),
//   require('metascraper-clearbit')(),
//   require('metascraper-publisher')(),
//   require('metascraper-title')(),
//   require('metascraper-url')()
// ])

const express = require('express')
const lookup = require('./service')

const app = express()
const port = 8080

app.use(express.static('public'))

app.get('/api/status', (req, res) => res.send('Ready'))

app.get('/api/lookup', (req, res) => {
  req.setTimeout(7000)
  const targetUrl = req.param('q')
  lookup(targetUrl)
    .then(metaData => {
      res.status(200)
      res.send(metaData)
    })
    .catch(error => {
      res.status(400)
      res.send(error)
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))