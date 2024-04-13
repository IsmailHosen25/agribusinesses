import styles from "./Addproducts.module.css"
import { useEffect, useState } from 'react'
import {useFormik} from "formik"
import * as yup from "yup"
import axios from "axios"
import Adproductpagee from "./Adproductpagee"

export default function Addproducts() {
  const id=window.localStorage.getItem("number")
  const [ products,setproducts]=useState([])
  const formik=useFormik({
    initialValues:{
        file:"",
        name:"",
        price:"",
        quentity:"",
        packingdate:"",
        expdate:"",
        warehouse:""
    },validationSchema:yup.object({
      file:yup.string().required("file is requird"),
      name:yup.string().required("title is Required"),
      price:yup.string().required("price is Required"),
      quentity:yup.string().required("quentity is Required"),
      packingdate:yup.string(),
      expdate:yup.string(),
      warehouse:yup.string().required("warehouse is Required")
    })
    ,
    onSubmit:async(values)=>{
      if(values.role==="Choose..."){
        alert("Choose a warehouse")
        return
       }
        const formdata=new FormData()
        formdata.append("file",values.file)
        formdata.append("name", values.name)
        formdata.append("price",values.price)
        formdata.append("quentity",values.quentity)
        formdata.append("packingdate",values.packingdate)
        formdata.append("expdate",values.expdate)
        formdata.append("warehouse",values.warehouse)
        formdata.append("number",id)
        const res=await axios.post("http://localhost:3000/product/add",formdata,{withCredentials:true})
        if(res.data.message=="Accepted"){
          window.location.reload()
      }
    }
  })
  const getproduct = async()=>{
    const res=await axios.get(`http://localhost:3000/user/product?id=${id}`)
    setproducts(res.data.data)
  }
  useEffect(()=>{
    getproduct()
  },[])
  
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
              <input type='text' name='name' placeholder='Name' value={formik.values.name} onChange={formik.handleChange}/>
              <label><i>{formik.errors.name}</i></label>
            </div>
           <div className={styles.ptg}>
             <input type='number' name='price' placeholder='Price' value={formik.values.price} onChange={formik.handleChange}/>
             <label><i>{formik.errors.price}</i></label>
            </div>
            <div className={styles.ptg}>
              <input type='number' name='quentity' placeholder='quentity' value={formik.values.quentity} onChange={formik.handleChange}/>
               <label><i>{formik.errors.quentity}</i></label>
            </div>
            <div className={styles.ptg}>
              <input type='date' name='packingdate' placeholder='Packing Date' value={formik.values.packingdate} onChange={formik.handleChange}/>
              <p className="text-[black]">(Packing Date)</p>
            </div>
            <div className={styles.ptg}>
              <input type='date' name='expdate' placeholder='Expire Date' value={formik.values.expdate} onChange={formik.handleChange}/>
              <p className="text-[black]">(Expire Date)</p>
            </div>
            <div  className={styles.ptg}>
                    <select name="warehouse" onChange={formik.handleChange} className={styles.select}>
                        <option defaultChecked >Choose...</option>
                        <option>Barisal Warehouse</option>
                        <option>Chittagong Warehouse</option>
                        <option>Comilla Warehouse</option>
                        <option>Dhaka Warehouse</option>
                        <option>Khulna Warehouse</option>
                        <option>Mymensingh Warehouse</option>
                        <option>Rangpur Warehouse</option>
                        <option>Rajshahi Warehouse</option>
                        <option>Sylhet Warehouse</option>
                    </select>
                    <label><i>{formik.errors.warehouse}</i></label>
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