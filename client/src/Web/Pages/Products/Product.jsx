import React from 'react'
import Card from '../../../Global Components/Card/Card'
import style from './Product.module.css'
import { FaCartArrowDown } from "react-icons/fa6";


const products = [{
    img:"",
    name: "Potato",
    price: 40,
    quantity:400,
    packdate: '23-07-2024',
    expdate: '29-07-2024',
    warehouse: 'Dhaka'
},
{
  img:"",
  name: "Potato1",
  price: 40,
  quantity:400,
  packdate: '23-07-2024',
  expdate: '29-07-2024',
  warehouse: 'Dhaka'
},{
  img:"",
  name: "Potato2",
  price: 40,
  quantity:400,
  packdate: '23-07-2024',
  expdate: '29-07-2024',
  warehouse: 'Dhaka'
},{
  img:"",
  name: "Potato3",
  price: 40,
  quantity:400,
  packdate: '23-07-2024',
  expdate: '29-07-2024',
  warehouse: 'Dhaka'
},{
  img:"",
  name: "Potato4",
  price: 40,
  quantity:400,
  packdate: '23-07-2024',
  expdate: '29-07-2024',
  warehouse: 'Dhaka'
},{
  img:"",
  name: "Potato5",
  price: 40,
  quantity:400,
  packdate: '23-07-2024',
  expdate: '29-07-2024',
  warehouse: 'Dhaka'
},{
  img:"",
  name: "Potato6",
  price: 40,
  quantity:400,
  packdate: '23-07-2024',
  expdate: '29-07-2024',
  warehouse: 'Dhaka'
},{
  img:"",
  name: "Potato7",
  price: 40,
  quantity:400,
  packdate: '23-07-2024',
  expdate: '29-07-2024',
  warehouse: 'Dhaka'
},{
  img:"",
  name: "Potato8",
  price: 40,
  quantity:400,
  packdate: '23-07-2024',
  expdate: '29-07-2024',
  warehouse: 'Dhaka'
},{
  img:"",
  name: "Potato9",
  price: 40,
  quantity:400,
  packdate: '23-07-2024',
  expdate: '29-07-2024',
  warehouse: 'Dhaka'
},{
  img:"",
  name: "Potato10",
  price: 40,
  quantity:400,
  packdate: '23-07-2024',
  expdate: '29-07-2024',
  warehouse: 'Dhaka'
}
]

export default function Products() {
  return (
    <div className={style.cont}>
      <div className={style.title}>
        Products
      </div>
      <div className={style.container}>
      {
        products.map((item, key)=>
          <Card key={key} name={item.name} price={item.price} quantity={item.quantity} packdate={item.packdate} expdate={item.expdate} warehouse={item.warehouse}/>          
        )
      }
      <div className={style.cart}>
        <FaCartArrowDown size={'1.7rem'}/>
      </div>
      </div>
        <p className={style.countcart}>5</p>
    </div>
  )
}



