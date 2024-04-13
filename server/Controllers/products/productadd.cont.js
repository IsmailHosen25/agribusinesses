const db=require('../../dbconnection')
const productadd=(req,res)=>{
   try{
       const {name,price,quentity,packingdate,expdate,warehouse,number}=req.body
       const {path,filename}=req.file
       db.connect(function(error){
        const sql="INSERT INTO products(name,filename,filepath,price,quantity,packingdate,expdate,warehouse,number) VALUES( ?, ?, ?, ?, ?, ?, ?,?,?)"
        db.query(sql,[name,filename,path,price,quentity,packingdate,expdate,warehouse,number],async function (error,result){
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