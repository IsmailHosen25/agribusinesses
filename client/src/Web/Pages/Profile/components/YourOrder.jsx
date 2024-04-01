import React from "react";
import style from "./YourOrder.module.css";
import img from "../../../../assets/profile.jpg"
const orders =[{
    img:img,
    title:"title",
    code:"code",
    price:"Price",
    quantity:"quantity"
},{
    img:img,
    title:"title",
    code:"code",
    price:"Price",
    quantity:"quantity"
},{
    img:img,
    title:"title",
    code:"code",
    price:"Price",
    quantity:"quantity"
}]
export default function YourOrder() {
  return (
    <div className={style.yourorder}>
      <div className={style.title}>Here is Your Order.</div>
      <div className={style.orderdiv}>
        <div className={style.orderHead}>
          <p>Img</p>
          <p>Title</p>
          <p>Code</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Confirm</p>
          <p>Cancel</p>
        </div>
        <div className={style.orders}>
        {orders.map((item,i)=>
        <div className={style.order} key={i}>
            <div className={style.img}><img src={item.img} /></div>
            <p>{item.title}</p>
            <p>{item.code}</p>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
            <button>Confirm</button>
            <button>Cancel</button>
          </div>)}
          

         
        </div>
      </div>
    </div>
  );
}
