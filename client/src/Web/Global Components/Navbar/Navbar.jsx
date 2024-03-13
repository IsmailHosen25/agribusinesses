import React from 'react'
import style from './Navbar.module.css'

export default function Navbar() {
  return (
    <>
    <div className={style.container}>
      <div className={style.left}>
        
      </div>
      <div className={style.mid}>
        <h2 className='text-[30px] text-border font-[800]'>
            Aggribusiness suplly chain system
        </h2>
      </div>
      <div className={style.right}>
        <button className={style.btn}>Signin</button>
        <button className={style.btn}>Signup</button>
      </div>
    </div>
    </>
  )
}
