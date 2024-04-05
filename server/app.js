const express=require("express")
const app=express()

const userRouter= require("./routers/user.route")
app.use("/user",userRouter)

const productRouter=require("./routers/product.route")
app.use("/product",productRouter)

const orderRouter=require("./routers/order.route")
app.use("/order",orderRouter)

app.use((errors,req,res,next)=>{
    if(errors.message){
        res.json({"error":errors.message})
    }
    else{
        res.json({"error":errors})
    }

})
module.exports=app