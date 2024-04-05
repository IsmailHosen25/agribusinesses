const orderadd=(req,res)=>{
    try{
      res.send("order add")
    }catch(errors){
      console.log(errors)
    }
  }
  module.exports=orderadd