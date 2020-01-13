const { News } = require('../models')

module.exports = app => {
  app.get('/news', (req, res) => {
    News.find()
    .then(items => res.json(items))
    .catch(e => console.error(e))
  })
  app.post('/news', (req, res) => {
    News.create(req.body)
    .then( response => res.json(response) )
    .catch(e => console.error(e))
  })
  app.delete('/news/:id', (req, res) => {
    News.deleteOne( { _id: req.params.id } )
    .then( response => res.json(response) )
    .catch(e => console.error(e))
  })
}