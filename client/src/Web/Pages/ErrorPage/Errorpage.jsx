import React from "react";
import style from  "./Errorpage.module.css";
import {Link} from "react-router-dom"
export default function Errorpage() {
  return (
    <div className={style.errordiv}>
        <div>
            <p className={style.para}>Look like you are lost in space ....</p>
            <h1 className={style.hfzf}>404</h1> 
            <div className={style.link_div}><Link to="/" className={style.go_home}>Go Back to Home</Link></div>
            
        </div>
    </div>
  );
}
