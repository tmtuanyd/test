import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

export const Login = () => {
  const login = useSelector(state=>state.login)
  const dispatch = useDispatch()
  const loginacc=async (login_type, username,password)=>{
    const resp = await axios.post('/loginacc', {login_type, username, password })
    return (resp.data)
  }
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [authority,setAuthority]=useState('')
  const [isReload,setIsReload]=useState(false)
  var clickLogin = (e)=>{
    loginacc(authority,username,password)
    // return <Redirect to="/"/>
  }

  useEffect(() => {
            axios
              .get('/getaccount')
              .then(response => dispatch({type:"LOGIN",login:response.data}));
          }, [dispatch]);
    return (
        <div className="body-login">
          {console.log(isReload)}
          {console.log(login.length)}
         {/* {reloadpage()} */}
  <form  action="/" className="login-form">
    {/* <img class="avatar" src="./images/avatar.svg" alt="">
      <h2>Welcome</h2> */}
    <div className="input-group">
      <h1>Login</h1>
      <h3>Login as</h3>
  <div className="select">
    <select onChange={(e)=>setAuthority(e.target.value)} name="login_type">
      <option>Choose an option</option>
      <option value="admin">Admin</option>
      <option value="teacher(dean)">Teacher(Dean)</option>
      <option value="teacher">Teacher</option>
      <option value="student">Student</option>
    </select>
  </div>
      <div className="txtb">
        <input onChange={(e)=>setUsername(e.target.value)} type="text" />
        <span data-placehoder="Username" />
      </div>
      <div className="txtb">
        <input onChange={(e)=>setPassword(e.target.value)} type="password" />
        <span data-placehoder="Password" />
      </div>
      <input onClick={(e)=>clickLogin(e)}  type="submit" className="logbtn" defaultValue="Login" />
      <div className="bottom-text">
        <a  href="/home">Forgot Password?</a>
      </div>
    </div>
  </form>
</div>

    )
}
