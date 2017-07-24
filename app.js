const express = require('express')
const engines = require('consolidate')
const config = require('./config')

const apiRoutes = require('./api/index')

const app = express()

var stitch = require("mongodb-stitch");
client = new stitch.StitchClient(config.APPNAME);
const db = client.service('mongodb', 'mongodb-atlas').db('portal_users');

client.login().then(() =>
  db.collection('users').updateOne({owner_id: client.authedId()}, {$set:{number:42}}, {upsert:true})
    ).then(()=>
      db.collection('users').find({owner_id: client.authedId()})
        ).then(docs => {
          console.log("Found docs", docs);
          console.log("[MongoDB Stitch] Connected to Stitch");
          }).catch(err => {
            console.error(err);
});

app.use('/api', apiRoutes)

app.engine('njk', engines.nunjucks)
app.set('view engine', 'njk')
app.set('views', __dirname + '/views')
app.use(express.static('public'))

app.get('*', (req, res) => {
  res.render('pages/index', {
    appname: config.APPNAME
  })
})

app.listen(config.PORT, function () {
  console.log(`App currently running; navigate to localhost:${config.PORT} in a web browser.`)
})