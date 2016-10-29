import React, { Component } from 'react';

// Renders a form to create and delete office hours
// Location and time are sent to database for students to see on queue page
const ProfessorDashboard = () => {

  function createOfficeHours(event) {
    event.preventDefault();
    const location = event.target.elements[0].value;
    const time = event.target.elements[1].value;

    // // Needs server-side implementation
    // fetch('/update-office-hours', {
    //   method: 'post',
    //   body: JSON.stringify({ location, time }),
    //   headers: new Headers({
    //     'Content-Type': 'application/json'
    //   })
    // }).then(() => { // update queue with new location and time
    // }).catch(() => browserHistory.push('*'));
  }

  function deleteOfficeHours() {
    // // Needs server-side implementation
    // fetch('/update-office-hours', {
    //   method: 'post',
    //   body: JSON.stringify({ location: null, time: null }),
    //   headers: new Headers({
    //     'Content-Type': 'application/json'
    //   })
    // }).then(() => { // update queue with new location and time
    // }).catch(() => browserHistory.push('*'));
  }

  return (
    <div id="professor-dashboard">
      <form onSubmit={createOfficeHours}>
        <div className="form-group">
          <input id="location" type="text" name="location" className="form-control" placeholder="Location"></input>
        </div>
          
        <div className="form-group">
          <input id="time" type="text" name="time" className="form-control" placeholder="Time"></input>
        </div>
          
        <button id="submit" type="submit" className="btn btn-primary">Add Office Hours</button>
      </form>
      
      <button id='delete' className="btn btn-primary btn-block" onClick={() => deleteOfficeHours}>End Office Hours</button>
    </div>
  )
}

export default ProfessorDashboard