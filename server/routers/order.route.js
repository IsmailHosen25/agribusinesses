const express=require("express")
const order=express.Router()

const orderadd=require("../Controllers/order/orderadd.cont")
order.post("/add",orderadd)

const orderromve=require("../Controllers/order/orderremove.cont")
order.delete("/remove",orderromve)

const ordershow=require("../Controllers/order/ordershow.cont")
order.get("/show",ordershow)


module.exports=order
