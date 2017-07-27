const express = require('express')
const engines = require('consolidate')
const config = require('./config')

const apiRoutes = require('./api/index')

const app = express()
var creds = {'fname': 'Jordan', 'lname': 'Stapinski', 'email': 'jestapinski@yahoo.com'}

var stitch = require("mongodb-stitch");
// client = new stitch.StitchClient(config.APPNAME);
// const db = client.service('mongodb', 'mongodb-atlas').db('portal_users');

app.use('/api', apiRoutes)

app.engine('njk', engines.nunjucks)
app.set('view engine', 'njk')
app.set('views', __dirname + '/views')
app.use(express.static('public'))

app.get('*', (req, res) => {
  res.render('pages/index', {
    appname: config.APPNAME,
  })
})

app.listen(config.PORT, function () {
  console.log(`App currently running; navigate to localhost:${config.PORT} in a web browser.`)
})