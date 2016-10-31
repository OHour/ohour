import React, { Component } from 'react';

const Student = ({student, removeStudent}) => {
  return (<li className="student-in-queue" onClick={() => {removeStudent(student.id)}}>{student.name}</li>);
}

Student.propTypes = {
    Student: React.PropTypes.object,
    removeStudent: React.PropTypes.func
}

export default Student