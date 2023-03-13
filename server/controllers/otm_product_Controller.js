const db = require('../models/index')
const Daily_sale_summaries = db.daily_sale_summaries;
const Otm_style_color = db.otm_style_color;
const Otm_style_size = db.otm_style_size;
const Otm_product = db.otm_product;
const Otm_styles = db.otm_styles;
//http://localhost:3600/otm_product?product_id=1
// פונקציה שמחזירה לכל מוצר את הצבע ומידה וסטייל
exports.getProductsWithStyleInfo=async(req, res)=> {
    try {
      const product = await Otm_product.findAll({
        include: [
       { model: Otm_style_color, attributes: ['color_name'] },
          { model: Otm_style_size, attributes: ['size_name'] },
          { model: Otm_styles, attributes: ['product_ext_idid','id'] }
        ], where: {
          product_id: req.query.product_id
        }
      })
      console.log(product)
      res.status(200).send(product);
   } catch (error) {
     console.error(error);
     res.status(500).send('Internal server error');
   }
  }
//http://localhost:3600/otm_product
exports.getAllproduct=async(req,res)=>{
  
    Otm_product.findAll({
    attributes: ['product_name'],
    group: ['product_name']
  }).then(products => {
   const productNames = products.map(product => product.product_name);
   res.send(productNames);
  }).catch(err => {
    res.status(404).send({
        message: 
            err.message || "error"      
    })
 })
  
} 


 