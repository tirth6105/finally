import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../Redux/Action';

const Login = () => {
  
    let [email,setEmail]=useState();
    let [password,setPassword]=useState();
    let dispatch = useDispatch();

    const handlesubmit=(e)=>{
        e.preventDefault();
        dispatch(login({email,password}));
        alert("Login successful")
    }
  return (
    <div>
      <form onSubmit={handlesubmit}>
            <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Login