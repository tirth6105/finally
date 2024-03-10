import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
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
    let selector = useSelector((store) => store);
  console.log(selector);
  return (
    <div className='text-center pt-5'>
      <h1 className=' fs-5 text-uppercase fw-semibold'>LOGIN  </h1>
      <form onSubmit={handlesubmit}>
            <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} className='bg-transparent my-2 border-white text-center border-1 col-12 p-2 text-dark rounded' style={{width:"30%"}} /><br/>
            <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} className='bg-transparent my-3 border-white text-center border-1 col-12 p-2 text-dark rounded' style={{width:"30%"}}  /><br/>
            <input type="submit" className='btn btn-secondary mt-4 col-12 mx-auto py-2' style={{width:"30%"}} />
        </form>
    </div>
  )
}

export default Login