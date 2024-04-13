import React from "react";
import {Link, useNavigate} from "react-router-dom"
import { useFormik } from "formik";
import axios from "axios"
import * as yup from "yup"
export default function Updateprofile() {
    const navigate =useNavigate()
    const {values, handleChange,handleBlur,handleSubmit,touched,errors} =useFormik({
        initialValues:{
            email:"",
            name:"",
            address:"",
            role:"",
            number:""
        },
        validationSchema:yup.object({
            email:yup.email,
            name:yup.string().max(30).required("name is required"),
            address:yup.string().min(10).required("address is required")
        }),
        onSubmit:async(values)=>{
           values.role=window.localStorage.getItem("role")
           values.number=window.localStorage.getItem("number")
           const data=JSON.stringify(values)
           const res =await axios.post("http://localhost:3000/user/updinfo", data,{
             headers:{
               "Content-Type":"application/json"
             },
             withCredentials:true
           })
           if(res.data.message==="true"){
            navigate('/profile')
           }
           else{
            alert("internal server error please try agian")
           }
        }
    })
  return (
    <div className="flex justify-center items-center min-h-[100vh]">
      <form class="min-w-[300px] mx-auto" onSubmit={handleSubmit}>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <label
            htmlFor="email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="name"
            id="name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <label
            htmlFor="name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
          <p className="text-[red]">{touched.name ? errors.name :""}</p>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="address"
            id="address"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={values.address}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <label
            htmlFor="address"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            address
          </label>
          <p className="text-[red]">{touched.address ? errors.address:""}</p>
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        <Link to="/profile" className="text-[blue] underline pl-0 sm:pl-[1rem]"><i>Not yet</i></Link>
      </form>
    </div>
  );
}
