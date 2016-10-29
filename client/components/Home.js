import React, { Component } from 'react';
import { browserHistory } from 'react-router'


// Renders the landing page with buttons that redirect into user-specific routes
const Home = () => {
  return (
    <div id="home">
      <button id="student-login" className="btn btn-primary btn-block"
        onClick={() => browserHistory.push('/student-login')}>Student Login</button>
      
      <button id="professor-login" className="btn btn-primary btn-block"
        onClick={() => browserHistory.push('/professor-dashboard')}>Professor Login</button>
    </div>
  )
}

export default Home