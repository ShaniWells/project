const db = require("../models");
const rep_sellable_daily_inventories_Controller= db.rep_sellable_daily_inventories;
//get
//http://localhost:3600/rep_sellable_daily_inventories/GetInventory?linked_product_id=43000
exports.GetInventory=async(req, res)=>{
await rep_sellable_daily_inventories_Controller.findAll({where:{linked_product_id:req.query.linked_product_id}})
.then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving rep_sellable_daily_inventories."
    });
  });
};
//GET
//http://localhost:3600/rep_sellable_daily_inventories/GetDate
exports.GetDate=async(req, res)=>{
     await rep_sellable_daily_inventories_Controller.findAll({
        attributes: [[db.sequelize.fn("MAX", db.sequelize.col("day")), "last_date"],'linked_product_id','qty'],
        group: ['linked_product_id'],
    }).then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving rep_sellable_daily_inventories."
     });
    });
  };