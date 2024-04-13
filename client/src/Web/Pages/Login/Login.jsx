import React from 'react'
import style from './Login.module.css'
import {Link,useNavigate} from "react-router-dom"
import {useFormik } from "formik"
import * as yup from "yup"
import axios from 'axios'
export default function Login() {
    const navigate =useNavigate()
    const {values, handleChange,handleBlur,handleSubmit,touched,errors} =useFormik({
        initialValues:{
            number:"",
            password:"",
            role:""
        },
        validationSchema:yup.object({
            number:yup.string().required("Please enter you mobile Number"),
            password:yup.string().required("password is required"),
            role:yup.string().required("Role must be selected")
        }),
        onSubmit:async(values)=>{
          if(values.role==="Choose your role ..."){
            alert("Choose your role")
            return
           }
           const data=JSON.stringify(values)
           const res =await axios.post("http://localhost:3000/user/login", data,{
             headers:{
               "Content-Type":"application/json"
             },
             withCredentials:true
           })
           if(res.data.message==="login"){
            window.localStorage.setItem("user", true)
            window.localStorage.setItem("number",res.data.number)
            window.localStorage.setItem("role",res.data.role)
              navigate("/profile")
           }
           else if(res.data.message=="somthing wrong"){
            alert("somthing wrong") 
           }
           else{
            alert("Sign up first")
            navigate("/signup")
           }
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
          <input type="number" placeholder="number" name='number' value={values.number} onBlur={handleBlur} onChange={handleChange}  className={style.input} required/>
          <p className={style.p_error}>{touched.number ? errors.number :""}</p>
        </div>
        <div className={style.row}>
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Password" name='password' value={values.password} onBlur={handleBlur} onChange={handleChange} className={style.input}  required/>
          <p className={style.p_error}>{touched.password ? errors.password :""}</p>
        </div>
        <div className={style.row}>
                   <select name="role" onChange={handleChange} className={style.select}>
                        <option defaultChecked >Choose your role ...</option>
                        <option>Farm</option>
                        <option>Vendor</option>
                    </select>
          <p className={style.p_error}>{touched.role ? errors.role :""}</p>
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
