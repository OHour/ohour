import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import Home from './components/Home'
import ProfessorDashboard from './components/ProfessorDashboard'
import Queue from './components/Queue'
import RouteNotFound from './components/RouteNotFound'
import StudentLogin from './components/StudentLogin'

const Container = (props) => (
  <div>
    {props.children}
  </div>
)

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='/student-login' component={StudentLogin} />
          <Route path='/queue' component={Queue} />
          <Route path='/professor-dashboard' component={ProfessorDashboard} />
          <Route path='*' component={RouteNotFound} />
        </Route>
      </Router>
    )
  }
}

export default App
