const bcrypt= require("bcrypt")
const login=(req,res)=>{
    try{
        const number=req.body.number
        const role=req.body.role
        const password=req.body.password
        console.log(number,role,password)
        res.status(200).json({
            message:"Accepted"
        })
}
catch(error){
    console.log(error)
}
 }
module.exports=login