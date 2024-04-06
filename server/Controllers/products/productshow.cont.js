const db=require('../../dbconnection')
const productshow=(req,res)=>{
  try{
    db.connect(function(error){
      const sql=`SELECT * FROM products where number = 1811794146`
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