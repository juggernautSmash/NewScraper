import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Container from '@material-ui/core/Container'

import LandingPage from './pages/LandingPage'
import SavedHeadlinesPage from './pages/SavedHeadlinesPage'


function App() {
  return (
    <Container maxWidth="sm">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/saved" component={SavedHeadlinesPage}/>
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
