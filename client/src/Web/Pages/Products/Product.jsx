import React from 'react'
import Card from '../../../Global Components/Card/Card'
import style from './Product.module.css'
import Carticon from '../../../Global Components/Cart/comp/Carticon';
import photo from '../../../assets/Header_01.jpg'


const products = [{
    img: photo,
    name: "Potato",
    price: 40,
    quantity:400,
    packdate: '23-07-2024',
    expdate: '29-07-2024',
    warehouse: 'Dhaka'
},
{
  img: photo,
  name: "Potato1",
  price: 40,
  quantity:400,
  packdate: '23-07-2024',
  expdate: '29-07-2024',
  warehouse: 'Dhaka'
},{
  img: photo,
  name: "Potato2",
  price: 40,
  quantity:400,
  packdate: '23-07-2024',
  expdate: '29-07-2024',
  warehouse: 'Dhaka'
},{
  img: photo,
  name: "Potato3",
  price: 40,
  quantity:400,
  packdate: '23-07-2024',
  expdate: '29-07-2024',
  warehouse: 'Dhaka'
},{
  img: photo,
  name: "Potato4",
  price: 40,
  quantity:400,
  packdate: '23-07-2024',
  expdate: '29-07-2024',
  warehouse: 'Dhaka'
},{
  img: photo,
  name: "Potato5",
  price: 40,
  quantity:400,
  packdate: '23-07-2024',
  expdate: '29-07-2024',
  warehouse: 'Dhaka'
},{
  img: photo,
  name: "Potato6",
  price: 40,
  quantity:400,
  packdate: '23-07-2024',
  expdate: '29-07-2024',
  warehouse: 'Dhaka'
},{
  img: photo,
  name: "Potato7",
  price: 40,
  quantity:400,
  packdate: '23-07-2024',
  expdate: '29-07-2024',
  warehouse: 'Dhaka'
},{
  img: photo,
  name: "Potato8",
  price: 40,
  quantity:400,
  packdate: '23-07-2024',
  expdate: '29-07-2024',
  warehouse: 'Dhaka'
},{
  img: photo,
  name: "Potato9",
  price: 40,
  quantity:400,
  packdate: '23-07-2024',
  expdate: '29-07-2024',
  warehouse: 'Dhaka'
},{
  img: photo,
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
          <Card key={key}img={item.img} name={item.name} price={item.price} quantity={item.quantity} packdate={item.packdate} expdate={item.expdate} warehouse={item.warehouse}/>          
        )
      }
      </div>
      <Carticon />
    </div>
  )
}



