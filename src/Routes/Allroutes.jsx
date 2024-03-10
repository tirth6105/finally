import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Product from '../Pages/Product'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import Privateroute from './Privateroute'
import { useSelector } from 'react-redux'

const Allroutes = () => {
  let data=useSelector((store)=>store.user)

  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            {/* <Route path='/Product' element={<Privateroute><Product/></Privateroute>}></Route> */}
            <Route path='/Product' element={data.isLogin ? <Product/>:<Login/>}></Route>
            <Route path='/Signup' element={<Signup/>}></Route>
            <Route path='/Login' element={<Login/>}></Route>
        </Routes>
    </div>
  )
}

export default Allroutes