const { model, Schema } = require('mongoose')

module.exports = {
  News: require('./News.js')(model, Schema),
  Comment: require('./Comment.js')(model, Schema)
}