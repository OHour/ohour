import React, { Component } from 'react';
import { browserHistory } from 'react-router'

// Renders form for students to login and be authenticated against pre-populated database
class StudentLogin extends Component {
  constructor(props) {
    super(props);
    this.submitInfo = this.submitInfo.bind(this);
  }

  submitInfo(event) {
    event.preventDefault();
    const email = event.target.elements[0].value;
    const password = event.target.elements[1].value;

    // Needs sever-side implementation
    fetch('/submit', {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(() => browserHistory.push('/queue'))
      .catch(() => browserHistory.push('*'));
  }

  render() {
    return (
    <form id="student-form" onSubmit={this.submitInfo}>
      
      <div className="form-group">
        <input id="student-email" type="text" className="form-control" placeholder="Student Email"></input>
      </div>
        
      <div className="form-group">
        <input id="student-password" type="password" className="form-control" placeholder="Password"></input>
      </div>
        
      <button type="submit" className="btn btn-primary btn-lg btn-block">Login</button>
    </form>
    )
  }
}

export default StudentLogin