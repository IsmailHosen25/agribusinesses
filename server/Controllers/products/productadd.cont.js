const productadd=(req,res)=>{
   try{
       res.send("product add")
   }catch(errors){
    console.log(errors)
   }
}
module.exports=productadd