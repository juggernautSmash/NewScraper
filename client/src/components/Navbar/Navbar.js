import React from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import HeadlinesContext from '../../utils/HeadlinesContext'


const styles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));

const NavBar = () => {

  const { getArticles } = React.useContext(HeadlinesContext)

  return (
    <div className={styles}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            News Scraper App
          </Typography>
          <Link to="/">
          <Button variant="outlined" color="secondary" onClick={ getArticles }>Get Articles</Button>
          </Link>
          <Link to="/saved">
          <Button variant="outlined">Saved Articles</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar