const bcrypt= require("bcrypt")
const db=require('../../dbconnection')
const signup=async (req,res)=>{
try{
    const number=req.body.number
    const role=req.body.role
    const password=req.body.password
    const hashedpassword= await bcrypt.hash(password, 10)
    db.connect(function(error){
        const sql=`SELECT * FROM farm where number= ${number}`
        db.query(sql,function(error,result){
            var h=null
            if(result.length>0){
               h=result[0].number
            }
            if(h==number){
                res.json({
                    message:"user alrady exist"
                })
            }else{
                const sql="INSERT INTO farm(number,password,role) VALUES(?, ?, ?)"
                db.query(sql,[number,hashedpassword,role],function(error,result){
                    res.send("Accepted")
                })
            }
           
        })
    })

}
catch(error){
    console.log(error)
}
 }
 module.exports=signup