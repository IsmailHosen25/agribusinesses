const login=(req,res)=>{
    try{
    res.send("It's from user login")
}
catch(error){
    console.log(error)
}
 }
module.exports=login