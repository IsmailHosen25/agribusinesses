const ordershow=(req,res)=>{
    try{
      res.send("order show")
    }catch(errors){
      console.log(errors)
    }
  }
  module.exports=ordershow
  