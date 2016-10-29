import React, { Component } from 'react';
import { browserHistory } from 'react-router'

const Home = () => {
  return (
    <div>
      <button className="btn btn-primary btn-block" onClick={() => browserHistory.push('/queue')}>
      Student Login</button>
      <button className="btn btn-primary btn-block" onClick={() => browserHistory.push('/professor-dashboard')}>
      Professor Login</button>
    </div>
  )
}

export default Home