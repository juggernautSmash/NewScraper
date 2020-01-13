import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Headline = () => {

  return (
    <Card variant="outlined">
      <CardHeader 
       title={
        <Typography variant="h5" component="h2">
          Headline: insert head line here
        </Typography>
       }
       subheader={
        <Typography variant="body2" component="p">
          Summary: insert summary here
        </Typography>
       }
       action={
        <Button variant="outlined" size="small">
          Save Article
        </Button>
       }
      />
      <CardContent>
      </CardContent>

    </Card>
  )
}

export default Headline