import React from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function Navbar() {
  const navigate=useNavigate()
  const user=window.localStorage.getItem("user")
  console.log(user)
  return (
    <>
    <div className={style.container}>
      <div className={style.left}>
        <Link to={'/'} className={style.lilink}>
          <h2 className='text-[40px] text-border font-[800]'>AggriCo</h2>
        </Link>
      </div>
      <div className={style.right}>
        <ul className={style.menuul}>
          <li className={style.ulli}><Link to={'/'} className={style.lilink}>Home</Link></li>
          <li className={style.ulli}><Link to={'/products'} className={style.lilink}>Products</Link></li>
          <li className={style.ulli}><Link to={'/about'} className={style.lilink}>About</Link></li>
          <li className={style.ulli}><Link to={'/contactus'} className={style.lilink}>Contact us</Link></li>
        </ul>
        {user?  <li className={style.ulli}><Link to={'/profile'} className={style.lilink}>Dashboard</Link></li>:    <button className={style.btn} onClick={()=>{navigate("/login")}}>Login</button> }
      </div>
    </div>
    </>
  )
}
