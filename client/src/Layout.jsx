import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Web/Pages/Home/Home'
import Navbar from './Web/Global Components/Navbar/Navbar'
import Products from './Web/Pages/Products/Products'
import About from './Web/Pages/About/About'
import Contactus from './Web/Pages/Contact us/Contactus'
export default function Layout() {
  return (
    <>
     <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
     </Routes>

    </>
  )
}
