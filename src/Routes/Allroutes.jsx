import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Product from '../Pages/Product'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Product' element={<Product/>}></Route>
            <Route path='/Signup' element={<Signup/>}></Route>
            <Route path='/Login' element={<Login/>}></Route>
        </Routes>
    </div>
  )
}

export default Allroutes