//create a class (add/delete students)
//create office hour event also delete

import React, { Component } from 'react';

const ProfessorDashboard = () => {

  function createOfficeHours(event) {
    event.preventDefault();
    const location = event.target.elements[0].value;
    const time = event.target.elements[1].value;

    // Needs server-side implementation
    fetch('/update-office-hours', {
      method: 'post',
      body: JSON.stringify({ location, time }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(() => { // update queue with new location and time
    }).catch(() => browserHistory.push('*'));
  }

  function deleteOfficeHours() {
    // Needs server-side implementation
    fetch('/update-office-hours', {
      method: 'post',
      body: JSON.stringify({ location: null, time: null }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(() => { // update queue with new location and time
    }).catch(() => browserHistory.push('*'));
  }

  return (
    <div>
      <form onSubmit={createOfficeHours}>
        <div className="form-group">
          <input type="text" name="location" className="form-control" placeholder="Office Hours Location"></input>
        </div>
          
        <div className="form-group">
          <input type="text" name="time" className="form-control" placeholder="Time"></input>
        </div>
          
        <button type="submit" className="btn btn-primary">Add Office Hours</button>
      </form>
      
      <button className="btn btn-primary btn-block" onClick={() => deleteOfficeHours}>End Office Hours</button>
    </div>
  )
}

export default ProfessorDashboard