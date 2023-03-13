require("dotenv").config();
const express = require('express');

const customersRouter = require('./routes/customersRouter');
const daily_sale_summariesRouter = require('./routes/daily_sale_summariesRouter');
const otm_productRouter = require('./routes/otm_productRouter');
const otm_style_colorRouter = require('./routes/otm_style_colorRouter');
const otm_style_sizeRouter = require('./routes/otm_style_sizeRouter');
const otm_stylesRouter = require('./routes/otm_stylesRouter');
const product_description_by_companyRouter = require('./routes/product_description_by_companyRouter');
const product_descriptionRouter = require('./routes/product_descriptionRouter');
const state_description_productRouter = require('./routes/state_description_productRouter');
const state_templatesRouter = require('./routes/state_templatesRouter');
const template_descriptionsRouter = require('./routes/template_descriptionsRouter');
const rep_sellable_daily_inventoriesRouter = require('./routes/rep_sellable_daily_inventoriesRouter');

const app = express();
const PORT = process.env.PORT || 3600;
const db = require("./models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.use(express.json());
app.use(express.urlencoded());

 app.use('/customers',customersRouter);
 app.use('/daily_sale_summaries', daily_sale_summariesRouter);
 app.use('/otm_product', otm_productRouter);
// app.use('/otm_style_color',otm_style_colorRouter);
// app.use('/otm_style_size', otm_style_sizeRouter);
// app.use('/otm_styles', otm_stylesRouter);
app.use('/product_description_by_company', product_description_by_companyRouter);
 app.use('/product_description', product_descriptionRouter);
 app.use('/state_description_product',state_description_productRouter);
app.use('/state_templates', state_templatesRouter);
app.use('/template_descriptions', template_descriptionsRouter);
app.use('/rep_sellable_daily_inventories', rep_sellable_daily_inventoriesRouter);
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));







