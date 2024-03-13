import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Web/Pages/Home/Home'
import Navbar from './Web/Global Components/Navbar/Navbar'
export default function Layout() {
  return (
    <>
     <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>}/>
     </Routes>

    </>
  )
}
