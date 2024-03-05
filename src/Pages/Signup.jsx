import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signup } from '../Redux/Action';

const Signup = () => {

    let [username,setUsername]=useState();
    let [email,setEmail]=useState();
    let [password,setPassword]=useState();
    let dispatch = useDispatch();

    const handlesubmit=(e)=>{
      e.preventDefault();
        dispatch(signup({username : username,email: email,password:password}));
        alert("Success")
    }

  return (
    <div>
        <form onSubmit={handlesubmit}>
            <input type="text" placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)} />
            <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Signup