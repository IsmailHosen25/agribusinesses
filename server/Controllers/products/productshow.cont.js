const productshow=(req,res)=>{
  try{
        res.send("product show")
  }catch(errors){
    console.log(errors)
  }
}
module.exports=productshow