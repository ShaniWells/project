
const dbConfig= require('../db-config/dbConfig');
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  //operatorsAliases: false,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
  , define:{
    freezeTableName:true,
    underscored:true,
    timestamps:false
  }
});
const db = {};


db.Sequelize = Sequelize;
db.sequelize = sequelize;

 db.customers = require("./customers.js")(sequelize, Sequelize);
db.daily_sale_summaries = require("./daily_sale_summaries.js")(sequelize, Sequelize);
 db.otm_product = require("./otm_product.js")(sequelize, Sequelize);
 db.otm_style_color = require("./otm_style_color.js")(sequelize, Sequelize);
 db.otm_style_size = require("./otm_style_size.js")(sequelize, Sequelize);
 db.otm_styles = require("./otm_styles.js")(sequelize, Sequelize);
 db.product_description_by_company = require("./product_description_by_company.js")(sequelize, Sequelize);
 db.product_description = require("./product_description.js")(sequelize, Sequelize);
  db.state_description_product = require("./state_description_product.js")(sequelize, Sequelize);
db.state_templates = require("./state_templates.js")(sequelize, Sequelize);
db.template_descriptions = require("./template_descriptions.js")(sequelize, Sequelize);
db.rep_sellable_daily_inventories = require("./rep_sellable_daily_inventories.js")(sequelize, Sequelize);

//daily_sale_summaries
db.otm_product.hasMany(db.daily_sale_summaries,{
  foreignKey: "product_id"
})

db.daily_sale_summaries.belongsTo(db.otm_product, {
  foreignKey: "product_id"
  ,//as: "otm_product",
});
// // otm_product
db.otm_product.belongsTo(db.otm_style_color, {
  foreignKey: "style_color_id",
  //as: "style_color_id",
});
db.otm_style_color.hasMany(db.otm_product,{
  foreignKey: "style_color_id"
})
// // otm_product
db.otm_product.belongsTo(db.otm_style_size, {
  foreignKey: "style_size_id",
 //as: "style_size_id",
});
db.otm_style_size.hasMany(db.otm_product,{
  foreignKey: "style_size_id"
})
// // otm_styles
db.otm_styles.belongsTo(db.otm_product, {
  foreignKey: "product_id",
  //as: "product_id",
});
db.otm_product.hasMany(db.otm_styles,{
  foreignKey: "product_id"
})
//  //product_description_by_company
db.product_description_by_company.belongsTo(db.product_description, {
  foreignKey: "product_description_id",
  //as: "product_description_id",
});
db.product_description.hasMany(db.product_description_by_company,{
  foreignKey: "product_description_id"
})
// // //product_description
db.product_description.belongsTo(db.state_description_product, {
  foreignKey: "state_description_product_id",
  //as: "state_description_product_id",
});
db.state_description_product.hasMany(db.product_description,{
  foreignKey: "state_description_product_id"
})
//product_description
db.product_description.belongsTo(db.template_descriptions, {
  foreignKey: "template_description_id",
  //as: "template_description_id",
});
db.template_descriptions.hasMany(db.product_description,{
  foreignKey: "template_description_id"
})
//state_templates
db.state_templates.belongsTo(db.customers, {
  foreignKey: "customer_id",
  //as: "customer_id",
});
db.customers.hasMany(db.state_templates,{
  foreignKey: "customer_id"
})
// //template_descriptions
db.template_descriptions.belongsTo(db.state_templates, {
  foreignKey: "state_template_id",
  //as: "state_template_id",
});
db.state_templates.hasMany(db.template_descriptions,{
  foreignKey: "state_template_id"
})
//rep_sellable_daily_inventories
db.rep_sellable_daily_inventories.belongsTo(db.otm_product, {
  foreignKey: "linked_product_id",
  //as: "state_template_id",
});
db.otm_product.hasMany(db.rep_sellable_daily_inventories,{
  foreignKey: "linked_product_id"
})
// This creates the `bossId` foreign key in Ship.
//Ship.belongsTo(Captain, { as: 'leader', foreignKey: 'bossId' });
// db.sequelize.sync({ force: false }).then(() => {
//   console.log("Drop and re-sync db.");
// });
module.exports = db;
