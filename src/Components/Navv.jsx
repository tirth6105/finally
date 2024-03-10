import React from 'react'
import { Link } from 'react-router-dom'
import CSS from '../CSS/navv.css'
import { logout } from '../Redux/Action'
import { useDispatch, useSelector } from 'react-redux'

const Navv = () => {
  let dispatch =useDispatch();
  let data=useSelector((store)=>store.user)
  console.log(data);
  return (
    <div className='nav'>
        <Link to='/' className='link'>Home</Link>
        <Link to='/Product' className='link'>Product</Link>
        {data.isLogin ? <span className='link navlink'>{data.UserData.username}</span> : <Link className='link navlink' to="/Signup">SIGNUP</Link>}
        {data.isLogin ? <span className='link navlink' onClick={()=>dispatch(logout())}>LOGOUT</span> : <Link className='link navlink' to="/Login">LOGIN</Link>}
        {/* <Link to='/Signup' className='link'>Signup</Link>
        <Link to='/Login' className='link'>Login</Link> */}
    </div>
  )
}

export default Navv