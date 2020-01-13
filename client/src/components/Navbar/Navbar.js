import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            News Scraper App
          </Typography>
          <Button variant="outlined" color="secondary">Get Articles</Button>
          <Button variant="outlined" color="inherit">Saved Articles</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar