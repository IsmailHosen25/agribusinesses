const productremove=(req,res)=>{
    try{
      res.send("prodct remove")
    }catch(errors){
        console.log(errors)
    }
}
module.exports=productremove