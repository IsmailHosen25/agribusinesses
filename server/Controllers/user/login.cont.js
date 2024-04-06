const bcrypt= require("bcrypt")
const db=require('../../dbconnection')
const login=async(req,res)=>{
    try{
        const number=req.body.number
        const role=req.body.role.toLowerCase()
        const password=req.body.password
        db.connect(function(error){
            const sql=`SELECT * FROM ${role} where number= ${number}`
            db.query(sql,async function (error,result){
                if(result.length>0){
                    const passwordvalid= await bcrypt.compare(password,result[0].password)
                    if(passwordvalid){
                        res.json({
                            "message":"login"
                        })
                    }else{
                        res.json({
                            "message":"somthing wrong"
                        })
                    }
                }
                else{
                    res.json({
                        "message":"first signup"
                    })
                }
               
            })
        })
}
catch(error){
    console.log(error)
}
 }
module.exports=login