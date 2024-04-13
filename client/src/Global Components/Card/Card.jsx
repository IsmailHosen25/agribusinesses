import style from'./Card.module.css'
import useCartContext from "../../Hooks/useCartContext"

export default function Card({img ,name, price, quantity, packdate, expdate, warehouse}) {
   const product = {img, name,price, quantity, packdate, expdate, warehouse}
   const {cartitem,setcartitem}=useCartContext()

   const handlecart=()=>{
      setcartitem([...cartitem,{...product}])
   }
   
  return (
   <div className={style.container}>
      <div className={style.img}>
         <img src={img} alt="No image found" />
      </div>
      <div className={style.detail}>
         <div className={style.name}>
            <h2>Name:{name} </h2>
         </div>
         <div>
            <h2>Price:{price} </h2>
         </div>
         <div>
            <h2>Quantity:{quantity} </h2>
         </div>
         <div>
            <h2>Pacakging date:{packdate} </h2>
         </div>
         <div>
            <h2>expire date:{expdate} </h2>
         </div>
         <div>
            <h2>Warehouse:{warehouse} </h2>
         </div>
         <div className={style.btn}>
            <button className={style.subbtn1}> - </button>
            <button className={style.subbtn2} onClick={handlecart}>Add to Cart</button>
            <button className={style.subbtn3} onClick={handlecart}> + </button>
         </div>
      </div>

   </div>
  )
}
