import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import './Headlines.css'
import HeadlinesContext from '../../utils/HeadlinesContext'

const Headline = () => {

  const { articles, saveArticle } = React.useContext(HeadlinesContext)

  return (
    <div>
      { articles.length ? 
      ( 
        articles.map( ({ headline, summary, url}, i) =>
          <Card key={i} id={`article${i}`} variant="outlined" className="card">
          <CardHeader 
          title={
            <Typography variant="h5" component="h2">
              { headline }
            </Typography>
          }
          subheader={
            <Typography variant="body2" component="p">
             { summary }
            </Typography>
          }
          action={
            <button variant="outlined" size="small" onClick={saveArticle} id={i}>
              Save Article
            </button>
          }
          />
          <CardContent>
            <a target="_blank" href={url}>
              Click here to see the full article
            </a>
          </CardContent>
          </Card>
        )
      ) : <h1>Press the "Get Articles" button to get articles</h1>
      }
    </div>
  )
}

export default Headline