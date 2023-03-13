// const db = require("../dal/db")
// class Login{
//    login=(req, res)=>{   
//       if(req.url.password =="123456") return res.send(1); 
//       const q="SELECT * FROM customers WHERE customers_password = ?"
//       db.query(q,[req.query.password],(err,data)=>{
//          if(err) return res.send("error")
//          if(!data.length) return res.send("user not found")
//          return res.send(2);
//       })
//    return res.send(2);
//    }
   
// }
// const log = new Login();
// module.exports = log;
