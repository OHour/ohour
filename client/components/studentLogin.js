import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class StudentLogin extends Component {
  constructor(props) {
    super(props);
    this.submitInfo = this.submitInfo.bind(this);
  }

  submitInfo(event) {
    event.preventDefault();
    const email = event.target.elements[0].value;
    const password = event.target.elements[1].value;

    // Needs server-side implementation
    // fetch('/submit', {
    //   method: 'post',
    //   body: JSON.stringify({ email, password }),
    //   headers: new Headers({
    //     'Content-Type': 'application/json'
    //   })
    // }).then(() => browserHistory.push('/queue'))
    //   .catch(() => browserHistory.push('*'));
  }

  render() {
    return (
    <form onSubmit={this.submitInfo}>
      
      <div className="form-group">
        <input type="text" name="email" className="form-control" placeholder="Student Email"></input>
      </div>
        
      <div className="form-group">
        <input type="password" name="password" className="form-control" placeholder="Password"></input>
      </div>
        
      <button type="submit" className="btn btn-primary btn-lg btn-block">Login</button>
    </form>
    )
  }
}

export default StudentLogin