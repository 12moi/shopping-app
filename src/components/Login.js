import React, {useState} from 'react'
import '../App.css'

const Login = () => {
  const {userName, setUsername}=useState("");
  const {password, setPassword}=useState("");
  const {error, stError}=useState("");
  return (
    <div className='login-inputs'>
        <div>
          <input value={userName} 
           onChange={(e)=>setUsername(e.target.value)}
            type="text" 
            placeholder='Username'/>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" aria-placeholder='Password'/>
          <small>This is error placeholder</small>
          <button>Login</button>
        </div>
    </div>
  )
}

export default Login