import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Web/Pages/Home/Home'
export default function Layout() {
  return (
    <>
     <Routes>
        <Route path='/' element={<Home/>}/>
     </Routes>
    </>
  )
}
