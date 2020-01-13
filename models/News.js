module.exports = (model, Schema) => {
  const News = new Schema({
    headline: String,
    summary: String,
    url: String,
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
  })
  return model('News', News)
}