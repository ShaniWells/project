// const db = require("../dal/db")
// let mysql  = require('mysql');
// class Tree{
//   get_children = (req, res) => {
//     const q = "SELECT * FROM nodes WHERE parent_code = ?";
//     db.query(q, [req.query.name_node], (err, data) => {
//       if (err) return res.send("error");
//       return res.send(data);
//     });
//   };
//     findDic=(nodename)=>{
//         const q="SELECT code FROM dictionary WHERE client_describe = ?";
//       db.query(q,[nodename],(err,data)=>{
//          if(err) return "error";
//          return data;
//          //אם אין במילון האם יחזור נל 
//       });
//     };
//     update=(req,res)=>{
//         dicode=findDic(req.query.name);
//         //(node_code,name_node ,parent_code ,dic_code)
//         let sen = `INSERT INTO nodes (name_node ,parent_code ,dic_code) VALUES(?,?,?)`;
//         let newnode= [req.query.name,req.query.father,dicode];
//         //שם זה מה שהבנא הוסיף, אבא זה הצומת שהוסיפו אליו 
//         //השאלה מה יש לריאקט תקוד שלו או משהו אחר
//         db.query(sen, newnode, (err, results) => {
//         if (err) return res.send("error");
//         console.log('node Id:' + results.insertId);
//         });
//         if(req.query.father=="null"){
//         //   let senroot = `INSERT INTO tree_root (customer_code ,node_code) VALUES(?,?,?)`;
//         // let newnode= [req.query.name,req.query.father,dicode];
//         // //שם זה מה שהבנא הוסיף, אבא זה הצומת שהוסיפו אליו 
//         // //השאלה מה יש לריאקט תקוד שלו או משהו אחר
//         // db.query(sen, newnode, (err, results) => {
//         // if (err) return res.send("error");
//         // console.log('node Id:' + results.insertId);
//         // });
//         }
//     };
//     delete=(req,res)=>{
//         let childnode=`UPDATE nodes SET parent_code = ? 
//         WHERE parent_code = ?`;
//         let changeparent=[req.query.parent_code,req.query.id];
//         db.query(childnode,changeparent,(error, results) => {
//             if (err) return res.send("error");
//             console.log('changeChildrenfather:', results.affectedRows);
//           });
//         let sen=`DELETE FROM nodes WHERE node_code = ?`;
//         let delnode=[req.query.id]
//         db.query(sen,delnode,(err,results)=>{
//             if (err) return res.send("error");
//             //return console.error(error.message);
//             console.log('Deleted node:', results.affectedRows);
//     });
//     };
// }
// const tree = new Tree();
// module.exports = tree;
// //Returns a tree for a particular category                                                              
// // buildTree = (req, res) => {
// //     const tree = new Promise((resolve, reject) => {
// //       db.query(`SELECT * FROM nodes WHERE parent_id = ${req.query.rootId}`, (error, results) => {
// //         if (error) {
// //           reject(error);
// //         } else {
// //           const promises = results.map(result => buildTree({ query: { rootId: result.id } }));
// //           Promise.all(promises)
// //             .then(children => {
// //               results.forEach((result, index) => {
// //                 result.children = children[index];
// //               });
// //               resolve(results);
// //             })
// //             .catch(error => reject(error));
// //         }
// //       });
// //     });

// //     tree.then(data => {
// //       res.send(data);
// //     }).catch(error => {
// //       res.status(500).send(error);
// //     });
// //   };
