const db=require('../../dbconnection')
const productremove=(req,res)=>{
    try{
      const id=req.query.id
      db.connect((error)=>{
        const sql= `DELETE FROM products WHERE id=${id}`
        db.query(sql,async function (error,result){
          res.json({
            message:"true"
          })
        })
      })
    }catch(errors){
        console.log(errors)
    }
}
module.exports=productremove