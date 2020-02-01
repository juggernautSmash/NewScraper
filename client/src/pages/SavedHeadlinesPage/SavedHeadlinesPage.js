import React from 'react'
import axios from 'axios'
import SavedHeadlines from '../../components/SavedHeadlines'
import Navbar from '../../components/Navbar'
import HeadlinesContext from '../../utils/HeadlinesContext'

const SavedHeadlinesPage = _ => {

  const [state, setState] = React.useState({
    articles: [],
    isSaved: false
  })

  state.deleteArticle = e => {
    axios.delete(`/api/news/${e.target.id}`)
    .then( response => console.log(response))
    e.target.parentNode.parentNode.parentNode.remove()
  }

  React.useEffect( () => {

    axios.get('/api/news')
    .then( articles => {
      console.log('artciles is: ', articles.data)
      setState({ ...state, articles: articles.data ? articles.data : [ ] })
    })
    .catch( e => console.error(e))

  }, [])

  return (
    <HeadlinesContext.Provider value={state}>
      <Navbar />
      <SavedHeadlines />
    </HeadlinesContext.Provider>
  )

}

export default SavedHeadlinesPage