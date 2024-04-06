const multer=require("multer")
const path=require('path')
const folder="./image";
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, folder)
    },
    filename:(req,file,cb)=>{
        const fileExt=path.extname(file.originalname)
        const filename=file.originalname
                                      .replace(fileExt, "")
                                      .toLowerCase()
                                      .split(" ")
                                      .join("-")+"-"+ Date.now();
        cb(null, filename+fileExt)                               
    }
})
var uploadimg=multer({
    storage:storage,
    limits:{
        fileSize:5000000 // 1MB //
    },
    fileFilter:(req,file,cb)=>{
        if(file.mimetype=== "image/jpg"|| file.mimetype==="image/png" || file.mimetype==="image/jpeg"){
            cb(null,true)
        }else{
            cb(new Error("only jpg,png,jpeg is allowed"))
        }
    }
  })
module.exports=uploadimg