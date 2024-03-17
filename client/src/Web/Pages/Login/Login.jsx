import React from 'react'
import style from './Login.module.css'
import {Link,useNavigate} from "react-router-dom"
import {useFormik } from "formik"
import * as yup from "yup"
export default function Login() {
    const navigate =useNavigate()
    const {values, handleChange,handleBlur,handleSubmit,touched,errors} =useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema:yup.object({
            email:yup.email,
            password:yup.string().required("password is required")
        }),
        onSubmit:(values)=>{
            console.log(values)
            navigate("/")
        }
    })
  return (
    <div className={style.login_container}>
    <div className={style.container}>
    <div className={style.wrapper}>
      <div className={style.title}><span>Login Form</span></div>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.row}>
          <i className="fas fa-user"></i>
          <input type="email" placeholder="Email" name='email' value={values.email} onBlur={handleBlur} onChange={handleChange}  className={style.input} required/>
        </div>
        <div className={style.row}>
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Password" name='password' value={values.password} onBlur={handleBlur} onChange={handleChange} className={style.input}  required/>
        </div>
        <div className={style.pass}><a href="#">Forgot password?</a></div>
        <div className={`${style.row} ${style.button}`}>
          <input type="submit" value="Login"  className={`${style.input} ${style.btninput} ` }/>
        </div>
        <div className={style.signup_link}>Not a member? <Link to="/signup" className={style.link}>Signup now</Link></div>
      </form>
    </div>
  </div>
  </div>
  )
}
