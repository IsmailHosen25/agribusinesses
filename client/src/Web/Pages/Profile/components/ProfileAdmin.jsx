import React, {useState} from 'react'
import style from "./ProfileAdmin.module.css"
import YourOrder from './YourOrder'
import Addproducts from './Addproducts'
export default function ProfileAdmin() {
  const [adminnav,setadminnav]=useState("addproducts")
  return (
    <div className={style.admindiv}>
        <div className={style.nav}>
            <div onClick={()=>setadminnav("addproducts")} style={{background: `${adminnav ==="addproducts" ? "#7AA2E3":""}`}}>Add Products</div>
            <div onClick={()=>setadminnav("yourorder")}  style={{background: `${adminnav ==="yourorder" ? "#7AA2E3":""}`}}>Your Order</div>
        </div>
        <div className={style.changablediv}>
        {adminnav ==="addproducts"? <Addproducts/>:<YourOrder/>}
        </div>
    </div>
  )
}
