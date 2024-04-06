import React from 'react'
import style from './Signup.module.css'
import {Link,useNavigate} from "react-router-dom"
import {useFormik } from "formik"
import axios from "axios"
import * as yup from "yup"
export default function SignUp() {
    const navigate =useNavigate()
    const {values, handleChange,handleBlur,handleSubmit,touched,errors} =useFormik({
        initialValues:{
            number:"",
            password:"",
            cp_password:"",
            role:""
        },
        validationSchema:yup.object({
            number:yup.string().required("Please enter you mobile Number"),
            password:yup.string().min(6).required("Please enter your password"),
            cp_password:yup.string().required("Please enter your Confirm password").oneOf([yup.ref("password"),null],"Password must match"),
            role:yup.string().required("Role must be selected")
        }),
        onSubmit:async (values)=>{
            if(values.role==="Choose your role ..."){
                  alert("Choose your role")
                  return
            }
            const data=JSON.stringify(values)
            const res =await axios.post("http://localhost:3000/user/signup", data,{
              headers:{
                "Content-Type":"application/json"
              },
              withCredentials:true
            })
            if(res.data.message=="Accepted"){
                console.log(res.data.message) 
                alert("hello")  
            }
        }
    })
  return (
    <div className={style.sign_container}>
    <div className={style.container}>
    <div className={style.wrapper}>
      <div className={style.title}><span>SignUp Form</span></div>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.row}>
          <i className="fas fa-user"></i>
          <input type="number" placeholder="Phone Number" name='number' value={values.number} onBlur={handleBlur} onChange={handleChange}  className={style.input} required/>
          <p className={style.p_error}>{touched.number ? errors.number :""}</p>
        </div>
        <div className={style.row}>
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Password" name='password' value={values.password} onBlur={handleBlur} onChange={handleChange} className={style.input}  required/>
          <p className={style.p_error}>{touched.password ? errors.password :""}</p>
        </div>
        <div className={style.row}>
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Confirm Password" name='cp_password' value={values.cp_password} onBlur={handleBlur} onChange={handleChange} className={style.input}  required/>
          <p className={style.p_error}>{touched.cp_password ? errors.cp_password :""}</p>
        </div>
        <div className={style.row}>
                   <select name="role" onChange={handleChange} className={style.select}>
                        <option defaultChecked >Choose your role ...</option>
                        <option>Farm</option>
                        <option>Vendor</option>
                    </select>
          <p className={style.p_error}>{touched.role ? errors.role :""}</p>
        </div>
        <div className={`${style.row} ${style.button}`}>
          <input type="submit" value="Sign Up"  className={`${style.input} ${style.btninput} ` }/>
        </div>
        <div className={style.signup_link}>alrady a member? <Link to="/login" className={style.link}>login now</Link></div>
      </form>
    </div>
  </div>
  </div>
  )
}
