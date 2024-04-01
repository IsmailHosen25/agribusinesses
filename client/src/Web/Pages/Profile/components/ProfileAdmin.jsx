import React from 'react'
import style from "./ProfileAdmin.module.css"
import YourOrder from './YourOrder'
export default function ProfileAdmin() {
  return (
    <div className={style.admindiv}>
        <div className={style.nav}>
            <div>Add Products</div>
            <div>Your Order</div>
        </div>
        <div className={style.changablediv}>
           <YourOrder/>
        </div>
    </div>
  )
}
