const info=(req,res)=>{
    try{
        res.send("It's from userinfo")
    }
    catch(error){
        console.log(error)
    }
 }
 module.exports=info