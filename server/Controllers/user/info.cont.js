const db = require("../../dbconnection");
const info = (req, res) => {
  try {
    const number = req.query.id;
    const role = req.query.role.toLowerCase();
    db.connect((error) => {
      sql = `SELECT * FROM ${role} WHERE number=${number}`;
      db.query(sql, (error, result) => {
        if (error) {
          res.json({
            message:"404"
          });
        } else {
          if (result.length > 0) {
            res.json({
              message: "true",
              data:{
                number:result[0].number,
                name:result[0].name,
                role:result[0].role,
                email:result[0].email,
                address:result[0].address

              }
            });
          } else {
            res.json({
              message: "somthing wrong plese try agin",
            });
          }
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = info;
