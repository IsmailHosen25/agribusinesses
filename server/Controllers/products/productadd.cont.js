const db=require('../../dbconnection')
const productadd=(req,res)=>{
   try{
       const {title,price,code,catagory}=req.body
       const {path,filename}=req.file
       db.connect(function(error){
        const sql="INSERT INTO products(title,filename,filepath,price,code,catagory,number) VALUES( ?, ?, ?, ?, ?, ?, ?)"
        db.query(sql,[title,filename,path,price,code,catagory,1811794146],async function (error,result){
            res.status(200).json({
                message:"Accepted",
            }) 
        })
    })
   }catch(errors){
    console.log(errors)
   }
}
module.exports=productadd