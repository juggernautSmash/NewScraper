import React from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar'
import Headlines from '../../components/Headlines'
import HeadlinesContext from '../../utils/HeadlinesContext'

const LandingPage = _ => {

  const [state, setState] = React.useState({
    articles: [],
    isSaved: false
  })


  state.getArticles = async _ => {
    console.log('running getArticles')

    const news = await axios.get('/api/headlines')
    .then( ({data: articles}) => {
      console.log('axios .get hit')
      console.log(articles)

      return articles ? articles : []
    })
    .catch( e => console.error(e))

    setState({ ...state, articles: news})
    console.log('state articles is now...')
    console.log(state.articles)
    setTimeout(() => console.log(' article state after 3 seconds', state.article), 3000)
  }

  state.saveArticle = e => {
    console.log('save articled id: ', e.target.id)
    console.log('article info is ', state.articles[e.target.id])
    axios.post('/api/news', state.articles[e.target.id])
    .then( savedPost => console.log(savedPost.data))
  }
  // React.useEffect( () => {
  //   state.getArticles()
  //   console.log(state.articles)
  // }, [])

  return (
    <HeadlinesContext.Provider value={state}>
      <Navbar />
      <Headlines />
    </HeadlinesContext.Provider>
  )
} // end LandingPage

export default LandingPage
