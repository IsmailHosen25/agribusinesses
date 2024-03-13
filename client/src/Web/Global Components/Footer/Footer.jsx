import React from 'react'
import style from './Footer.module.css'
import { MdAgriculture } from "react-icons/md";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { LiaTelegram } from "react-icons/lia";

export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.one}>
        <div className={style.oneheader}>
          <MdAgriculture />
          <h1>AgriCo </h1>
        </div>
        <p className='text-[#333] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam incidunt ex laborum ipsam distinctio aut dolor. Aliquid animi, mollitia dolores enim amet expedita quas voluptatum sapiente ducimus aut qui dolorem.</p>
        <div className={style.btns}>
          <a href='.##'><button className='hover:text-[#316FF6]'><CiFacebook/></button></a>
          <a href='.##'><button className='hover:text-[#0077b5]'><CiLinkedin/></button></a>
          <a href='.##'><button className='hover:text-[#25D366]'><FaWhatsapp/></button></a>
          <a href='.##'><button className='hover:text-[#0088cc]'><LiaTelegram/></button></a>
        </div>
      </div>
      <div className={style.two}>
        <h1 className={style.oneheader}>Quick Link</h1>
        <div><a href='.##' className='text-[#333] hover:text-[blue] transition-all delay-[70ms] hover:text-[1.1rem] hover:font-[500]'>Bkash</a></div>
        <div><a href='.##' className='text-[#333] hover:text-[blue] transition-all delay-[70ms] hover:text-[1.1rem] hover:font-[500]'>Map</a></div>
        <div><a href='.##' className='text-[#333] hover:text-[blue] transition-all delay-[70ms] hover:text-[1.1rem] hover:font-[500]'>Cureer</a></div>
        <div><a href='.##' className='text-[#333] hover:text-[blue] transition-all delay-[70ms] hover:text-[1.1rem] hover:font-[500]'>Police</a></div>
      </div>
      <div className={style.three}>
        <h1 className={style.oneheader}>Short cut</h1>
        <div><a href='.##' className='text-[#333] hover:text-[blue] transition-all delay-[70ms] hover:text-[1.1rem] hover:font-[500]'>Farmer</a></div>
        <div><a href='.##' className='text-[#333] hover:text-[blue] transition-all delay-[70ms] hover:text-[1.1rem] hover:font-[500]'>Warehouse</a></div>
        <div><a href='.##' className='text-[#333] hover:text-[blue] transition-all delay-[70ms] hover:text-[1.1rem] hover:font-[500]'>Vendor</a></div>
        <div><a href='.##' className='text-[#333] hover:text-[blue] transition-all delay-[70ms] hover:text-[1.1rem] hover:font-[500]'>Trensportation</a></div>
      </div>
      <div className={style.four}>
        <h1 className={style.oneheader}>About us</h1>
        <div><a href='.##' className='text-[#333] hover:text-[blue] transition-all delay-[70ms] hover:text-[1.1rem] hover:font-[500]'>Office</a></div>
        <div><a href='.##' className='text-[#333] hover:text-[blue] transition-all delay-[70ms] hover:text-[1.1rem] hover:font-[500]'>Our goal</a></div>
        <div><a href='.##' className='text-[#333] hover:text-[blue] transition-all delay-[70ms] hover:text-[1.1rem] hover:font-[500] '>Our team</a></div>
      </div>
    </div>
  )
}
