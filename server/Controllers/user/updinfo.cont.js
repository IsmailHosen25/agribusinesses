const db= require('../../dbconnection')
const updinfo=(req,res)=>{
    try{
        const number=req.body.number
        const email=req.body.email
        const name=req.body.name
        const address=req.body.address
        const role=req.body.role.toLowerCase()
        db.connect((error)=>{
            sql=`UPDATE ${role} SET name="${name}", address="${address}", email="${email}" WHERE number=${number}`
            db.query(sql,(error,result)=>{
                if(error){
                    res.json({
                        message:"Internal server error"
                    })
                }
                else{
                    res.json({
                        message:"true"
                    })
                }
            })
        })
    }
    catch(errors){
        console.log(errors)
    }
}
module.exports=updinfo