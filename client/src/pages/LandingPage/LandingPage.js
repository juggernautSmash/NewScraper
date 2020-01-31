import React from 'react'
import axios from 'axios'
import cheerio from 'cheerio'
import Headlines from '../../components/Headlines'
import HeadlinesContext from '../../utils/HeadlinesContext'

const LandingPage = _ => {

  const [state, setState] = React.useState({
    artilces: [],
    isSaved: false
  })

  state.pushArticle = article => {
    let articles = JSON.parse(JSON.stringify(state.articles))
    articles.push(article)
    setState({ ...state, articles })
  }

  state.getArticles = _ => {
    console.log('running getArticles')

    axios.get('/headlines')
  } // end getArticles

  // React.useEffect( () => {
  //   state.getArticles()
  //   console.log(state.articles)
  // }, [])

  return (
    <HeadlinesContext.Provider value={state}>
      <Headlines />
    </HeadlinesContext.Provider>
  )
} // end LandingPage

export default LandingPage
