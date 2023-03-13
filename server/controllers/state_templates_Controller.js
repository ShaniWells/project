const db = require("../models");
const state_templates_Controller = db.state_templates;
//const { Sequelize, Op } = require("sequelize");

//שליפת כל הטבלה    get
//לפי הסיסמא*********************************
//שליפת התבניות ללא המוגנים
//http://localhost:3600/state_templates/List?customer_id=1
exports.getAllList=async(req, res)=>{
console.log(req.query.customer_id);
await state_templates_Controller.findAll({where:{customer_id:req.query.customer_id}})
.then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving state_templates_Controller."
    });
  });
};
// http://localhost:3600/state_templates/status?status=on&customer_id=1
//GET
exports.GetPopList=async(req, res)=>{
     await state_templates_Controller.findAll({
      where:{
        status:req.query.status
        ,customer_id:req.query.customer_id
      }
    }).then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving state_templates_Controller."
     });
    });
  };
//פונקציה להוספת מס הלינקים או הפחתה put
// שינוי תאריך אחרון של עריכהput 
// שינוי סטטוסput
//http://localhost:3600/state_templates
// {
//         "id_state_templates": 2,
//         "customer_id": 1,
//         "template_name": "ybn",
//         "products_linked": 9,
//         "sku": "zcv",
//         "change_date": "2034-02-02",
//         "status": "on"
//     }
exports.updateRow=async(req, res,err)=>{
  await state_templates_Controller.update(req.body, {
    where: {
      id_state_templates:req.body.id_state_templates
    }
  })
  .then(data => {
    if (data) {//מה חוזר
      res.send({
        message: "state_templates was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update state_templates `
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error updating state_templates with id=" + id
    });
  });
}
//template_name=req.bod,products_linked,sku,change_date,status:,customer_id
//  מחיקת רשומהdelete
//שני
//http://localhost:3600/state_templates?id_state_templates=1
exports.DeleteRow=(req, res)=>{
    const id = req.query.id_state_templates;
    state_templates_Controller.destroy({
      where: {id_state_templates: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "state_templates_Controller was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete state_templates_Controller with id=${id}. Maybe state_templates was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete state_templates_Controller with id=" + id
        });
      });
  };
//post הוספת רשומה
//post פונקציות לכל שדה הניתן לעריכה המאפשרות שינו של השדות הנל 
//השדות הניתנים לשינוי הם תאריך אחרון ושם 
//const jane = await User.create({ name: "Jane", age: 100 });
//const incrementResult = await jane.increment('age', { by: 2 });

// http://localhost:3600/state_templates
//{
//         "customer_id": 1,
//         "template_name": "ybn",
//         "products_linked": 9,
//         "sku": "zcv",
//         "change_date": "2034-02-02",
//         "status": "on"
//     }
exports.addRow=async(req,res)=>{
   //בדיקת שדות חובה
   //template_name=req.bod,products_linked,sku,change_date,status:,customer_id   ||!req.body.customer_id
   if(!req.body.template_name|| !req.body.products_linked||!req.body.sku||!req.body.change_date||!req.body.status) {
    res.status(400).json({message:`all field are required`})
}
// await state_templates_Controller.findAll({
//   where:{
//     template_name:req.body.template_name,
//     products_linked:req.body.products_linked,
//     sku:req.body.sku,
//     req.body.change_date||!req.body.status
//   }
await state_templates_Controller.create(req.body)
.then(data => {
  res.send({
    message: "state_templates was create successfully."
  });
})
.catch(err => {
  res.status(500).send({
    message:
      err.message || "Some error occurred while creating the state_templates."
  });
});
}