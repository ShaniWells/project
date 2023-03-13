const db = require("../models");
const product_description_by_company = db.product_description_by_company;
//http://localhost:3600/product_description_by_company
//שינוי שדה האמזון put
// {
//   "idproduct_description_by_company":"1",
//   "product_description_id":"1",
//      "amz_description":"ttttdcvb"  
//  } 
exports.updateAmazon=async(req, res,err)=>{
  const id = req.query.idproduct_description_by_company;
  await product_description_by_company.update(req.body, {
    where: {
      idproduct_description_by_company:req.body.idproduct_description_by_company
    }
  })
  .then(data => {
    if (data) {//מה חוזר
      res.send({
        message: "product_description_by_company was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update product_description_by_company`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error updating product_description_by_company with id=" + id
    });
  });
}
//delete
//שני
//http://localhost:3600/product_description_by_company?idproduct_description_by_company=5
exports.Deletedescription=(req, res)=>{
    const id = req.query.idproduct_description_by_company;
    product_description_by_company.destroy({
      where: {idproduct_description_by_company: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "product_description_by_company was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete product_description_by_company with id=${id}. Maybe state_description_product_Controller was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete product_description_by_company with id=" + id
        });
      });
  };
//post 
//http://localhost:3600/product_description_by_company
// {
//   "idproduct_description_by_company":5,
//   "product_description_id":1,
//      "amz_description":"ttttdcvb"  
//  } 

exports.addRow=async(req,res)=>{
   //בדיקת שדות חובה
   if(!req.body.product_description_id|| !req.body.amz_description) {
    res.status(400).json({message:`all field are required`})
}
await product_description_by_company.create(req.body)
.then(data => {
  res.send({
    message: "product_description_by_company was create successfully."
  });
})
.catch(err => {
  res.status(500).send({
    message:
      err.message || "Some error occurred while creating the product_description_by_company."
  });
});
}
//הוספת רשומהpost 
//delete מחיקת רשומה
//שינוי שדה האמזון put
//שני