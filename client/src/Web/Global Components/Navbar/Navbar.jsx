import React from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <div className={style.container}>
      <div className={style.left}>
        <h2 className='text-[40px] text-border font-[800]'>
            AggriCo
        </h2>
      </div>
      <div className={style.right}>
        <ul className={style.menuul}>
          <li className={style.ulli}><Link className={style.lilink}>Home</Link></li>
          <li className={style.ulli}><Link className={style.lilink}>Products</Link></li>
          <li className={style.ulli}><Link className={style.lilink}>About</Link></li>
          <li className={style.ulli}><Link className={style.lilink}>Contact us</Link></li>
        </ul>
        <button className={style.btn}>Login</button>
      </div>
    </div>
    </>
  )
}
