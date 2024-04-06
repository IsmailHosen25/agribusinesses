const productadd=(req,res)=>{
   try{
       const {title,price,code,catagory}=req.body
       const {path,filename}=req.file
       res.status(200).json({
        message:"Accepted"
    })
   }catch(errors){
    console.log(errors)
   }
}
module.exports=productadd