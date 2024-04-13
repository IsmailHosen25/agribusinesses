const db=require('../../dbconnection')
const userproduct=(req,res)=>{
  try{
    const number=req.query.id
    db.connect(function(error){
      const sql=`SELECT * FROM products where number =${number}`
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
module.exports=userproduct