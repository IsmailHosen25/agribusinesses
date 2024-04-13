const express=require("express")
const userRouter=express.Router()

const login =require("../Controllers/user/login.cont")
userRouter.post("/login",login)

const signup =require("../Controllers/user/signup.cont")
userRouter.post("/signup",signup)

const info =require('../Controllers/user/info.cont')
userRouter.get("/info",info)

const updinfo=require("../Controllers/user/updinfo.cont")
userRouter.post("/updinfo",updinfo)

const userproduct =require("../Controllers/user/userproduct")
userRouter.get('/product',userproduct)

module.exports=userRouter