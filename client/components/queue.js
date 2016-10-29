import React, { Component } from 'react';
import Student from './Student'

// Track state with student objects containing name and Id
let queueList = [{name: 'Anonymous', id: 1 }, {name: 'Anonymous', id: 2 }];
let queueId = 0;

// Renders buttons for student to add and remove themselves from queue
class Queue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queueListState: []
    };

    this.addToQ = this.addToQ.bind(this);
    this.removeFromQ = this.removeFromQ.bind(this);
  }

  addToQ(name) {
    const student = { name: name, id: queueId++ };
    queueList.push(student);

    // // Needs server-side implementation if want to add student data into database
    // fetch('/studentData', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(student)
    // }).then(response => response.json())
    // .catch(err => console.log(err))

    this.setState({ queueListState: queueList });
  }

  removeFromQ() {
    queueList.pop(); // needs to be modified if extra students show up

    this.setState({queueListState: queueList});
  }

  // Upon pageload, set state to current list of students in queue
  componentDidMount() {
    // fetch('/waitlist', {
    //   method: 'GET',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   }
    // }).then(response => queueList = response)
    //   .catch(err => console.log(err))
    
    this.setState({ queueListState: queueList });
  }
  
  render() {
    let queue = queueList.map(student => {
      return <Student key={student.id} student={student} removeFromQ={this.removeFromQ} />;
    });

    return (
      <div id="queue">
        <h1>Welcome to the Q!</h1>
        <ul>{queue}</ul>
        <button id="add-to-queue" onClick={() => this.addToQ('doug')}>Add me to the Q</button>
        <button id="remove-from-queue">Remove me from the Q</button>
      </div>
    )
  }
}

export default Queue