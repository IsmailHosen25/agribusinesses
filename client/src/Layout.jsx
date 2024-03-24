import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Web/Pages/Home/Home'
import Login from './Web/Pages/Login/Login'
import SignUp from './Web/Pages/SignUp/SignUp'
import Errorpage from './Web/Pages/ErrorPage/Errorpage'
import Profile from "./Web/Pages/Profile/Profile"
export default function Layout() {
  return (
    <>
     <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='*' element={<Errorpage/>}/>
     </Routes>
    </>
  )
}
