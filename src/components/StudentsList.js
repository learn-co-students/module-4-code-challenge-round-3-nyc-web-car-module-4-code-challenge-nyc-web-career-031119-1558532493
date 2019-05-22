import React from "react";
import Student from "./Student";

const StudentsList = (props) => {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Student Name</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Class Year</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Course Percentage</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Edit</h3>
          </th>
        </tr>
        // Very confused why this isn't working below - I console logged exactly what I was mapping through and it gave me the array I was looking for. If this is deleted the first few of my deliverables are completed.
        {props.students.students.map(student => <Student student={student}/>)}
      </tbody>
    </table>
  );
};

export default StudentsList;
