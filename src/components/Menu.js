import React from 'react'
import {Link, NavLink} from 'react-router-dom';

export default function Menu() {
        return (
            <header>
            <div className="slide-menu">
                <Link to="/" className="admin">
                <i className="fab fa-adn" />
                <span>Admin</span>
                </Link>
                <center>
                <img src={require('./images/t1.jpg')} alt="" />
                <h2>Harry Potter</h2>
                </center>
                <NavLink activeClassName="active-style" exact to="/home" className="list"><i className="fa fa-user" /><span>Home</span></NavLink>
                <NavLink activeClassName="active-style" to="/home/teacher" className="list"><i className="fa fa-chalkboard-teacher" /><span>Teacher</span></NavLink>
                <NavLink activeClassName="active-style" to="/home/student" className="list"><i className="fa fa-user-graduate" /><span>Student</span></NavLink>
                <NavLink activeClassName="active-style" to="/a" className="list"><i className="fab fa-leanpub" /><span>Class</span></NavLink>
                <NavLink activeClassName="active-style" to="/b" className="list"><i className="fa fa-atlas" /><span>Institute</span></NavLink>
                <NavLink activeClassName="active-style" to="/c" className="list"><i className="fa fa-cog" /><span>Setting</span></NavLink>
                <NavLink activeClassName="active-style" to="/d" className="log-out list"><i className="fa fa-sign-out-alt" /><span>Logout</span></NavLink>
            </div>
        </header>
        )
    }


