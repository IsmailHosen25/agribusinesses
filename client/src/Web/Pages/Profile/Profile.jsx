import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import profle from "../../../assets/profile.jpg"
import style from "./Profile.module.css"
import ProfileAdmin from './components/ProfileAdmin'
import axios from "axios"
export default function Profile() {
  const navigate=useNavigate()
  const [userinfo,setuserinfo]=useState({})
  const getuserinfo=async()=>{
    const id=  window.localStorage.getItem("number")
    const role= window.localStorage.getItem("role")
    const res=await axios.get(`http://localhost:3000/user/info?id=${id}&role=${role}`)
    setuserinfo(res.data.data)
  }
  if(userinfo.name==null){
    navigate('/updateprofile')
  }
  useEffect(()=>{
    getuserinfo()

  },[])
  return (
    <div className={style.profile_div}>
        <div className={style.user_info}>
            <img className={style.user_img} src={""}/>
            <div className={style.user_deatils}>
               <p className={style.user_name}>{userinfo.name}</p>
               <p>{userinfo.email}</p>
               <p>0{userinfo.number}</p>
               <p>{userinfo.address}</p>
               <Link to="/updateprofile" className={style.link}><i>edit profile</i></Link>
               <button className='ml-[2rem] p-[0.5rem] border' onClick={()=>{
                window.localStorage.clear()
                window.location.reload()
               }}>loge Out</button>
            </div>
            
        </div>
        <ProfileAdmin/>
    </div>
  )
}
