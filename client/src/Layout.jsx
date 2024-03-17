import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Web/Pages/Home/Home'
import Login from './Web/Pages/Login/Login'
import SignUp from './Web/Pages/SignUp/SignUp'
import Errorpage from './Web/Pages/ErrorPage/Errorpage'
export default function Layout() {
  return (
    <>
     <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='*' element={<Errorpage/>}/>
     </Routes>
    </>
  )
}
