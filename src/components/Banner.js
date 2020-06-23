import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Banner() {
    const data = useSelector (state=>state.data)
    var hienthi = () =>{
      if(data!==null){
        return(
          <div className="box-info-group">
          <div className="box-info admin">
            <div className="inner">
              <h3>11</h3>
              <p>Admin</p>
            </div>
            <div className="icon">
              <i className="fa fa-user-circle" />
            </div>
            <a href="/">Show all<i className="fas fa-arrow-circle-right" /></a>
          </div>
          <div className="box-info techer">
            <div className="inner">
              <h3>{data.filter(el=>el.a_mean.indexOf('teacher')!==-1).length}</h3>
              <p>Teacher</p>
            </div>
            <div className="icon">
              <i className="fa fa-chalkboard-teacher" />
            </div>
            <Link to='home/teacher'>Show all<i className="fas fa-arrow-circle-right" /></Link>
          </div>
          <div className="box-info student">
            <div className="inner">
              <h3>{data.filter(el=>el.a_mean.indexOf('student')!==-1).length}</h3>
              <p>Student</p>
            </div>
            <div className="icon">
              <i className="fa fa-user-graduate" />
            </div>
            <Link to='home/student'>Show all<i className="fas fa-arrow-circle-right" /></Link>
          </div>
          <div className="box-info class">
            <div className="inner">
              <h3>{data.filter(el=>el.c_mean!==null).length}</h3>
              <p>Class</p>
            </div>
            <div className="icon">
              <i className="fab fa-leanpub" />
            </div>
            <Link to='home/class'>Show all<i className="fas fa-arrow-circle-right" /></Link>
          </div>
        </div>
        )
      }
    }
    return (
        <section className="content">
  <div className="container">
      {hienthi()}
  </div>
</section>

    )
}
