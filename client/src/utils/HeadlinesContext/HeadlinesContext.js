import React from 'react'

const HeadlinesContext = React.createContext({
  articles: [],
  isSaved: Boolean,
  getArticles: () => {},
  saveArticle:  () => {},
  deleteArticle: () => {}
})

export default HeadlinesContext