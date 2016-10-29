import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import Home from './components/Home'
import ProfessorDashboard from './components/ProfessorDashboard'
import Queue from './components/Queue'
import RouteNotFound from './components/RouteNotFound'
import StudentLogin from './components/StudentLogin'

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Home} />
        <Route path='/professor-dashboard' component={ProfessorDashboard} />
        <Route path='/queue' component={Queue} />
        <Route path='/student-login' component={StudentLogin} />
        <Route path='*' component={RouteNotFound} />
      </Router>
    )
  }
}

export default App
