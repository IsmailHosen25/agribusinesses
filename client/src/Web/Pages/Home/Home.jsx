import React from 'react'
import style from './Home.module.css'
import Footer from '../../../Global Components/Footer/Footer'



export default function Home() {
  return (
    <>
      <div className={style.container}>
        <div className={style.sec1}>
          <div className={style.headtext}>
            <h1>Welcome to the place where natural flavour is born</h1>
          </div>
          <div className={style.tailtext}>
            <h2>Discover our products</h2>
          </div>
          <div className={style.icards}>
            <div className={style.icard}>Fishes</div>
            <div className={style.icard}>Crops & vegitable</div>
            <div className={style.icard}>Poultry</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
