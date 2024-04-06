const express=require("express")
const product=express.Router()
const uploadimg =require('../middlewares/uplodeimg')

const productadd=require('../Controllers/products/productadd.cont')
product.post("/add",uploadimg.single("file"),productadd)

const productremove=require("../Controllers/products/productremove.cont")
product.delete("/remove",productremove)

const productshow=require("../Controllers/products/productshow.cont")
product.get("/show",productshow)

module.exports=product