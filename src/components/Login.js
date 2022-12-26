import React, {useState} from 'react'
import '../App.css'
import axios from 'axios';

const Login = () => {
  const {userName, setUsername}=useState("");
  const {password, setPassword}=useState("");
  const {error, stError}=useState("");
  
  const loginHandler= ({token,setToken})=>{
   axios ({
    url:'https://fakestoreapi.com/auth/login',
    method:"POST",
    data:{
      username: userName,
      password: password,
    },
   }).then(res=>{
    console.log(res.data.token);
    setToken(res.data.token)
   }).catch(err=>{
    console.log(err)
   })
  }

  return (
    <div className='login'>
        <div className='login-inputs'>
          <input value={userName} 
           onChange={(e)=>setUsername(e.target.value)}
            type="text" 
            placeholder='Username'/>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password'/>
          <small>This is error placeholder</small>
          <button onClick={loginHandler}>Login</button>
        </div>
    </div>
  )
}

export default Login