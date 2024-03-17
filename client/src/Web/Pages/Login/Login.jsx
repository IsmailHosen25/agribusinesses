import React from 'react'
import style from './Login.module.css'
import img from "../../../assets/farmer_land.jpg"
export default function Login() {
  return (
    <div className={style.login_container}>
    <div className={style.container}>
    <div className={style.wrapper}>
      <div className={style.title}><span>Login Form</span></div>
      <form action="#" className={style.form}>
        <div className={style.row}>
          <i className="fas fa-user"></i>
          <input type="text" placeholder="Email or Phone" className={style.input} required/>
        </div>
        <div className={style.row}>
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Password"  className={style.input}  required/>
        </div>
        <div className={style.pass}><a href="#">Forgot password?</a></div>
        <div className={`${style.row} ${style.button}`}>
          <input type="submit" value="Login"  className={`${style.input} ${style.btninput} ` }/>
        </div>
        <div className={style.signup_link}>Not a member? <a href="#">Signup now</a></div>
      </form>
    </div>
  </div>
  </div>
  )
}
