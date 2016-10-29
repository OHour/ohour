//header "location, time" + graphics: "students waiting"
//queue component "students in it"
//add button
//remove button

import React, { Component } from 'react';

const queueList = [];
let queueId = 0;

class Queue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queueListState: []
    };

    this.addToQ = this.addToQ.bind(this);
  }

  addToQ(name) {
    const student = { name: name, id: queueId++ };
    queueList.push(student);

    // Needs server-side implementation
    // fetch('/studentData', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(student)
    // }).then(response => response.json())
    // .catch(err => console.log(err))

    this.setState({queueListState: queueList});
  }

  render() {
    return (
      <div>
        <h1>Welcome to the Q!</h1>
        <button onClick={() => this.addToQ('doug')}>Add me to the Q</button>
        <button>Remove me from the Q</button>
      </div>
    )
  }  
}

export default Queue