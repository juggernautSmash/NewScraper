import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import './Headlines.css'
import HeadlinesContext from '../../utils/HeadlinesContext'

const Headline = () => {

  const { articles, saveArticle } = React.useContext(HeadlinesContext)

  console.log()
  return (
    <div >
      { articles ? 
      ( 
        articles.map( ({ headline, summary, url}, i) =>
          <Card key={i} id={`article[${i}]`} variant="outlined" className="card">
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
            <Button variant="outlined" size="small" onClick={saveArticle} data-headline={headline} data-summary={summary} data-url={url}>
              Save Article
            </Button>
          }
          />
          <CardContent>
            <a target="_blank" href={url}>
              Click here to see the full article
            </a>
          </CardContent>
          </Card>
        )
      ) : null
      }
    </div>
  )
}

export default Headline