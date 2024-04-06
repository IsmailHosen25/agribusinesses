const jwt=require("jsonwebtoken")
const checkjwt=(req,res,next)=>{
    try{
          const token =req.cookies.token
          const decode=jwt.verify(token,asdcvbhytre456y)
          req.number=decode.number
          req.name=decode.name
          next()
    }catch{
        next('Token Expired')
    }

}
module.exports=checkjwt