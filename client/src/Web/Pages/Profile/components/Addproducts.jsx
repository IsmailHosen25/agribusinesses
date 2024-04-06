import styles from "./Addproducts.module.css"
import { useEffect, useState } from 'react'
import {useFormik} from "formik"
import * as yup from "yup"
import axios from "axios"
import Adproductpagee from "./Adproductpagee"
const products =[{},{}]
export default function Addproducts() {

  const formik=useFormik({
    initialValues:{
        file:"",
        title:"",
        price:"",
        code:"",
        catagory:""
    },validationSchema:yup.object({
      file:yup.string().required("file is requird"),
      title:yup.string().required("title is Required"),
      price:yup.string().required("price is Required"),
      code:yup.string().required("code is Required"),
      catagory:yup.string().required("caragory is Required")
    })
    ,
    onSubmit:async(values)=>{
      if(values.role==="Choose..."){
        alert("Choose a catagory")
        return
       }
        const formdata=new FormData()
        // formdata.append("file",values.file)
        formdata.append("title", values.title)
        formdata.append("price",values.price)
        formdata.append("code",values.code)
        formdata.append("catagory",values.catagory)
        const res=await axios.post("http://localhost:3000/product/add",formdata,{withCredentials:true})
        if(res.data.message=="Accepted"){
          console.log(res.data.message)  
          alert("hello") 
      }
    }
  })
  return (
    <div className={styles.addhome}>

        <h2 className={styles.heading}>
            Add Products
        </h2>
        <p className={styles.addtage}>Add Products:</p>
        <form onSubmit={formik.handleSubmit} className={styles.addform} method="post" encType="multipart/form-data">
            <input type='file' name='file' className={styles.ptg} onChange={(e)=>{
                
                formik.setFieldValue("file", e.target.files[0])
            }} />
            <div className={styles.ptg}>
              <input type='text' name='title' placeholder='Title' value={formik.values.title} onChange={formik.handleChange}/>
              <label><i>{formik.errors.title}</i></label>
            </div>
           <div className={styles.ptg}>
             <input type='number' name='price' placeholder='Price' value={formik.values.price} onChange={formik.handleChange}/>
             <label><i>{formik.errors.price}</i></label>
            </div>
            <div className={styles.ptg}>
              <input type='text' name='code' placeholder='code' value={formik.values.code} onChange={formik.handleChange}/>
               <label><i>{formik.errors.code}</i></label>
            </div>
            <div  className={styles.ptg}>
                    <select name="catagory" onChange={formik.handleChange} className={styles.select}>
                        <option defaultChecked >Choose...</option>
                        <option>Home Men's</option>
                        <option>Home Women's</option>
                        <option>Home Kid's</option>
                        <option>Men's</option>
                        <option>Women's</option>
                        <option>Kid's</option>
                    </select>
                    <label><i>{formik.errors.catagory}</i></label>
            </div>
            <div className={styles.ptgbtn}>
                 <button  type='submit' className={styles.btnc}> + Add</button>
            </div>
           </form>

      <div>
       <Adproductpagee  products={products}  />
      </div>

    </div>
  )
}