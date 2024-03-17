import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Web/Pages/Home/Home'
import Login from './Web/Pages/Login/Login'
export default function Layout() {
  return (
    <>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
     </Routes>
    </>
  )
}
