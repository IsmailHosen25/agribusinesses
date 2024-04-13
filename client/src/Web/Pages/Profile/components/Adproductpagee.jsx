import axios from "axios"
import styles from './Adproductpagee.module.css'
export default function Adproductpagee({products}) {


  return (


    <div className={styles.addproductpage}>
         <h1 className={styles.heading}>Your total Products --- ({products.length})</h1>
         <div className={styles.addproducts}>
           <div className={styles.productstag}>
             <p className={styles.ptg}>Image</p>
             <p className={styles.ptg}>Name</p>
             <p className={styles.ptg}>Price</p>
             <p className={styles.ptg}>Quantity</p>
             <p className={styles.ptg}>Packing Date</p>
             <p className={styles.ptg}>Expire Date</p>
             <p className={styles.ptg}>Warehouse</p>
             <p className={styles.ptg}>Delete</p>
           </div>
           {products.map((item,i)=> <div key={i} className={styles.addproduct}>
              <div className={styles.ptg}>
                <img className={styles.ptgimg}  src={`http://localhost:3000/img?name=${item.filename}`}/>
              </div>

               <p className={styles.ptg}>{item.name}</p>
               <p className={styles.ptg}>${item.price}</p>
               <p className={styles.ptg}>{item.quantity}</p>
               <p className={styles.ptg}>{item.packingdate}</p>
               <p className={styles.ptg}>{item.expdate}</p>
               <p className={styles.ptg}>{item.warehouse}</p>
               <div className={styles.ptg}>
                 <button className={styles.btn} onClick={async ()=>{
                   const res=axios.delete(`http://localhost:3000/product/remove?id=${item.id}`,{
                    withCredentials:true
                   })
                   window.location.reload()
                 }}>- delete</button>
               </div>

           </div>)}
         </div>

    </div>
    
  )
}
