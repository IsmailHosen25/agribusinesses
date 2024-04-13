import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Protectedpage({Components}) {
  const navigate=useNavigate()

  useEffect(()=>{
    let login=window.localStorage.getItem("user")
    if(!login){
       navigate("/login")
    }
  })
  return (
    <Components/>
  )
}
