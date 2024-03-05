import React from 'react'
import { Link } from 'react-router-dom'
import CSS from '../CSS/navv.css'

const Navv = () => {
  return (
    <div className='nav'>
        <Link to='/' className='link'>Home</Link>
        <Link to='/Product' className='link'>Product</Link>
        <Link to='/Signup' className='link'>Signup</Link>
        <Link to='/Login' className='link'>Login</Link>
    </div>
  )
}

export default Navv