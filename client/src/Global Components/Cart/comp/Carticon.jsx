import styles from './Carticon.module.css'
import { useNavigate } from 'react-router-dom'
import useCarContext from '../../../Hooks/useCartContext'
import { useEffect } from 'react'
import { FaCartShopping } from "react-icons/fa6";

export default function Carticon() {
    const navigate =useNavigate()
    const {cartitem}=useCarContext()
    const handlecart=()=>{
           navigate("/cart")
    }
    useEffect(()=>{
           
    },[cartitem])
  return (
    <div className={styles.carticon} onClick={handlecart}>
        <FaCartShopping />
        <div className={styles.countitem}>
            {cartitem.length} 
        </div>
    </div>
  )
}
