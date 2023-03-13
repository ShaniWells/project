//שליפת כל הטבלה    get
//post הוספת רשומה
//put פונקציות לכל שדה הניתן לעריכה המאפשרות שינו של השדות הנל 

//  מחיקת רשומהdelete
//שני
const db = require("../models");
const state_description_product_Controller = db.state_description_product;
//GET
//http://localhost:3600/state_description_product
exports.getAllListProduct=async(req, res)=>{
await state_description_product_Controller.findAll()
.then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving state_description_product_Controller."
    });
  });
};
//PUT
//http://localhost:3600/state_description_product
// {
//   "id_state_description_product": 1,
//   "statuse": "on",
//   "product_name": "tambe",
//   "sku": "e5g7",
//   "last_edited_date": "2000-11-22",
//   "embed": "on"
// }
exports.updateRow=async(req, res,err)=>{
  await state_description_product_Controller.update(req.body, {
    where: {
     id_state_description_product:req.body.id_state_description_product
    }
  })
  .then(data => {
    if (data) {//מה חוזר
      res.send({
        message: "state_description_product_Controller was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update state_description_product_Controller `
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error updating state_description_product_Controller with id=" + id
    });
  });
}
//delete
//שני
//http://localhost:3600/state_description_product?id_state_description_product=1
exports.DeleteRow=(req, res)=>{
    const id = req.query.id_state_description_product;
    state_description_product_Controller.destroy({
      where: {id_state_description_product: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "state_description_product_Controller was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete state_description_product_Controller with id=${id}. Maybe state_description_product_Controller was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete state_description_product_Controller with id=" + id
        });
      });
  };
//post 
//http://localhost:3600/state_description_product
// {
//   "id_state_description_product": 1,
//   "statuse": "on",
//   "product_name": "tambe",
//   "sku": "e5g7",
//   "last_edited_date": "2000-11-22",
//   "embed": "on"
// }
exports.addRow=async(req,res)=>{
   //בדיקת שדות חובה
   if(!req.body.statuse|| !req.body.product_name||!req.body.sku||!req.body.last_edited_date||!req.body.embed) {
    res.status(400).json({message:`all field are required`})
}
await state_description_product_Controller.create(req.body)
.then(data => {
  res.send({
    message: "state_description_product was create successfully."
  });
})
.catch(err => {
  res.status(500).send({
    message:
      err.message || "Some error occurred while creating the state_description_product."
  });
});
}