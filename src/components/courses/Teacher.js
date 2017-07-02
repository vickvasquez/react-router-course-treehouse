import Teachers from '../../data/teachers'
import React from 'react'

class Teacher extends React.Component {

	teacher() { 
		return Teachers.filter((teacher) => teacher.id === this.props.idTeacher)
	
	}
	render() {
		const Teacher = this.teacher()
		return (
			<div>
				<h1>{Teacher.id}</h1>
			</div>
		)
	}
}

export default Teacher