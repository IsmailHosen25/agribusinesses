import React from "react";
import style from "./YourOrder.module.css";
const orders =[]
export default function YourOrder() {
  return (
    <div className={style.yourorder}>
      <div className={style.title}>Here is Your Order.</div>
      <div className={style.orderdiv}>
        <div className={style.orderHead}>
          <p>Img</p>
          <p>Name</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Packing Date</p>
          <p>Expire Date</p>
          <p>Warehouse</p>
          <p>Confirm</p>
          <p>Cancel</p>
        </div>
        <div className={style.orders}>
        {orders.map((item,i)=>
        <div className={style.order} key={i}>
            <div className={style.img}><img src={item.img} /></div>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p>{item.quantity}</p>
            <p>{item.packingdate}</p>
            <p>{item.expdate}</p>
            <p>{item.warehouse}</p>
            <button>Confirm</button>
            <button>Cancel</button>
          </div>)}
          

         
        </div>
      </div>
    </div>
  );
}
