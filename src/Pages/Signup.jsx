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
    <div className='text-center pt-5'>
      <h1 className=' fs-5 text-uppercase fw-semibold'>SIGNUP</h1>
        <form onSubmit={handlesubmit}>
            <input type="text" placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)} className=' my-3 border-white border-1 col-12 p-2  rounded' style={{width:"30%"}} /><br />
            <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} className=' my-2 border-white border-1 col-12 p-2  rounded' style={{width:"30%"}} /><br />
            <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} className=' my-3 border-white border-1 col-12 p-2  rounded' style={{width:"30%"}} /><br />
            <input type="submit" className='btn btn-secondary col-12 mx-auto py-2' style={{width:"30%"}} />
        </form>
    </div>
  )
}

export default Signup