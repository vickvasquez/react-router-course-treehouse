import React from 'react';
import TeacherList from '../data/teachers';
import { NavLink,Route } from 'react-router-dom';
import Teacher from './courses/Teacher'

const Teachers = ({match}) => {
  let teachers = TeacherList.map((teacher) => {
    return (
      <li className="teacher" key={teacher.id} >
        <NavLink to={`${match.url}/${teacher.id}`}>
            <img className="teacher-img" src={teacher.img_src} alt="teacher" />
            <h3>{teacher.name}</h3>
            <p>{teacher.bio}</p>
        </NavLink>
      </li>
    );
  }); 

  
  return (
    <div className="main-content">
      <h2>Teachers</h2>
      <ul className="group">
        {teachers}    
      </ul>
          {/* Write routes here... */}
      <Route path={`${match.path}/teach-1`} component={Teacher} />
    </div>
  );
}

export default Teachers;