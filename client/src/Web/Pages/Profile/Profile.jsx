import React from 'react'
import profle from "../../../assets/profile.jpg"
import style from "./Profile.module.css"
import ProfileAdmin from './components/ProfileAdmin'
export default function Profile() {
  return (
    <div className={style.profile_div}>
        <div className={style.user_info}>
            <img className={style.user_img} src={profle}/>
            <div className={style.user_deatils}>
               <p className={style.user_name}>Hasan</p>
               <p>ismailhosen122@gmail.com</p>
            </div>
        </div>
        <ProfileAdmin/>
    </div>
  )
}
