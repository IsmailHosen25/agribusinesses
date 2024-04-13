const db=require('../../dbconnection')
const productshow=(req,res)=>{
  try{
    db.connect(function(error){
      const sql=`SELECT * FROM products`
      db.query(sql,async function (error,result){
          res.json({
            message:"true",
            data:result
          })
          
         
      })
  })
  }catch(errors){
    console.log(errors)
  }
}
module.exports=productshow