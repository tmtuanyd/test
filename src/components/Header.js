import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'

export default function Header() {
  // const loginAcc = useSelector(state=>state.Login)
  const dispatch = useDispatch ()
  const logout = () => {
      axios
        .get('/logout')
        .then(
          response => dispatch({type:"LOGIN",login:response.data})
          );
    };
    return (
        <section className="content-banner">
  <div className="container">
    <nav>
      <label htmlFor>School name</label>
      <label htmlFor="menu" className="menu-bar">
        <i className="fas fa-bars" />
      </label>
      <ul>
        <li><Link onClick={()=>logout()} to="/" className="btn btn-logout">Logout</Link></li>
      </ul>
    </nav>
  </div>
</section>

    )
}
