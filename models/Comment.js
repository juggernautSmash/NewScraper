module.exports = (model, Schema) => {
  const Comment = new Schema({
    comment: String,
    headline: [{ type: Schema.Types.ObjectId, ref: 'News' }]
  })
  return model('Comment', Comment)
}