import React, {useState} from 'react'
import '../App.css'
import axios from 'axios';


const Login = () => {
  const {userName, setUsername}=useState("");
  const {password, setPassword}=useState("");
  const {error, setError}=useState("");
  
  const LoginHandler= ({token,setToken})=>{
    // setError("");
    // setPassword("");
    // setUsername("");
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
    console.log(err.response.data);
    setError(err.response)
   })
  }

  return (
    <div className='login'>
        <div className='login-inputs'>
          <input value={userName} 
           onChange={(e)=>setUsername(e.target.value)}
            type="text" 
            placeholder='Username'/>
          <input value={password} 
             onChange={(e)=>setPassword(e.target.value)}
           type="password" 
           placeholder='Password'/>
          {error && <small>{Error}</small>}
          <button onClick={LoginHandler}>Login</button>
        </div>
    </div>
  )
}

export default Login