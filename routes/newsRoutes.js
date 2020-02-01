const { News } = require('../models')
const { newsC } = require('../controller')

module.exports = app => {
  app.get('/api/headlines', (req, res) => {
    console.log('get headlines route is hit')
    newsC.getNews()
      .then( r => r ? res.json(r) : res.sendStatus(404))
      .catch( e => console.error(e))
  })

  app.get('/api/news', (req, res) => {
    console.log('get news route is hit')
    News.find()
    .then(items => res.json(items))
    .catch(e => console.error(e))
  })

  app.post('/api/news', (req, res) => {
    News.create(req.body)
    .then( response => res.json(response) )
    .catch(e => console.error(e))
  })

  app.delete('/api/news/:id', (req, res) => {
    News.deleteOne( { _id: req.params.id } )
    .then( response => res.json(response) )
    .catch(e => console.error(e))
  })
}