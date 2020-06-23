// import React, { useEffect, useState } from 'react'
// import { LoginElement } from './LoginElement'
// import axios from 'axios'
// import { Redirect } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';

// export const Login = () => {
//     const [data,setData]=useState([])
//     const loginAcc = useSelector(state=>state.login)
//     const dispatch = useDispatch ()
//     useEffect(() => {
//         axios
//           .get('/getaccount')
//           .then(response => response.data}));
//       }, []);
//     const hienthi = ()=>{

//     }
//     return (
//         <div>
//             {console.log(loginAcc)}
//             {(loginAcc.length===0)?(<LoginElement/>):(<Redirect to ='/home'/>)}
//         </div>
//     )
// }
