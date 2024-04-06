const bcrypt= require("bcrypt")

const signup=async (req,res)=>{
try{
    const number=req.body.number
    const role=req.body.role
    const password=req.body.password
    const hashedpassword= await bcrypt.hash(password, 10)
    console.log(number,role,password)
    res.status(200).json({
        message:"Accepted"
    })
}
catch(error){
    console.log(error)
}
 }
 module.exports=signup