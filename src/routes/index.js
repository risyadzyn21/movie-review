import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/home'
import MovieDetail from '../pages/movieDetail'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/movie-detail/:id' component={MovieDetail} />
      </Switch>
    </Router>
  )
}

export default Routes

