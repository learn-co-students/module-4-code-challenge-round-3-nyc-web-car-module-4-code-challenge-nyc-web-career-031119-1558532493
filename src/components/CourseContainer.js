import React, { Component } from "react"
import CourseSelector from "./CourseSelector"
import EditStudent from "./EditStudent"
import StudentsList from "./StudentsList"
const courseAPI = 'https://bayside-high.herokuapp.com/api/v1/users/150/courses'

class CourseContainer extends Component {
  state = {
    students: [],
    currentCourse: {},
    currentStudent: {},
    courses: []
  }

  componentDidMount() {
    fetch(courseAPI)
    .then(r => r.json())
    .then(data => {
      this.setState({
        courses: data
      })
    })
  }

  onChangeCourse = (event) => {
    let course_id = event.target.value
    console.log("changed!", event.target.value)
    let selectedCourse = this.state.courses.find(course => course.id == course_id)
    this.setState({currentCourse: selectedCourse}, () => console.log(selectedCourse))
    fetch(`https://bayside-high.herokuapp.com/api/v1/users/150/courses/${course_id}`)
    .then(r => r.json())
    .then(data => {
      this.setState({
        students: data
      }, console.log(this.state.students))
    })
  }

  render() {
    return (
      <div className="ui grid container">
        <div className="ui center aligned header sixteen wide column">
          {this.state.currentCourse.name}
        </div>

        <CourseSelector courses={this.state.courses} onChangeCourse={this.onChangeCourse}/>

        <EditStudent />

        <StudentsList students={this.state.students}/>
      </div>
    )
  }
}

export default CourseContainer
