const express=require("express")
const userRouter=express.Router()

const login =require("../Controllers/login.cont")
const signup =require("../Controllers/signup.cont")
const info =require('../Controllers/info.cont')

userRouter.post("/login",login)
userRouter.post("/signup",signup)
userRouter.get("/info",info)
module.exports=userRouter