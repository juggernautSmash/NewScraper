import React from 'react'

const HeadlinesContext = React.createContext({
  articles: [],
  getArticles: () => {}
})

export default HeadlinesContext