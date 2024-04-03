
import styles from './Adproductpagee.module.css'
export default function Adproductpagee({products}) {


  return (


    <div className={styles.addproductpage}>
         <h1 className={styles.heading}>Your total Products --- ({products.length})</h1>
         <div className={styles.addproducts}>
           <div className={styles.productstag}>
             <p className={styles.ptg}>Image</p>
             <p className={styles.ptg}>Title</p>
             <p className={styles.ptg}>Price</p>
             <p className={styles.ptg}>Code</p>
             <p className={styles.ptg}>Delete</p>
           </div>
           {products.map((item,i)=> <div key={i} className={styles.addproduct}>
              <div className={styles.ptg}>
                <img className={styles.ptgimg}  src={``}/>
              </div>

               <p className={styles.ptg}>{item.title}</p>
               <p className={styles.ptg}>${item.price}</p>
               <p className={styles.ptg}>{item.code}</p>
               <div className={styles.ptg}>
                 <button className={styles.btn}>- delete</button>
               </div>

           </div>)}
         </div>

    </div>
    
  )
}
