const express=require("express")
const app=express()
const cors =require("cors")


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

const userRouter= require("./routers/user.route")
app.use("/user",userRouter)

const productRouter=require("./routers/product.route")
app.use("/product",productRouter)


app.get("/img",(req,res)=>{
    res.download(`./image/${req.query.name}`)
})
=======
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