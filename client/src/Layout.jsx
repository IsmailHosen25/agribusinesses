import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Web/Pages/Home/Home'
import Login from './Web/Pages/Login/Login'
import SignUp from './Web/Pages/SignUp/SignUp'
import Errorpage from './Web/Pages/ErrorPage/Errorpage'
import Profile from "./Web/Pages/Profile/Profile"
import Protectedpage from './Protectedpage'
import Updateprofile from './Web/Pages/Profile/components/Updateprofile'
import Navbar from './Global Components/Navbar/Navbar'
import Products from './Web/Pages/Products/Product'


export default function Layout() {
  return (
    <>
     <Navbar/>
     <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/profile' element={<Protectedpage Components={Profile}/>}/>
        <Route path='/updateprofile' element={<Protectedpage Components={Updateprofile}/>}/>
        <Route path='/products' element={<Products/>} />
        <Route path='*' element={<Errorpage/>}/>
     </Routes>
    </>
  )
}
