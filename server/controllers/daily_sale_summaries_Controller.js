const db = require('../models/index')
const Daily_sale_summaries = db.daily_sale_summaries;
//GET
//פונקציה שמוצאה לכל מוצר לכל יום כמה נימכר ובכמהV 
/*//http://localhost:3600/daily_sale_summaries?product_id=39752
//product_id=39752
// מחזיר לכל מוצר את */
exports.getSalle=async(req,res)=> {
    console.log(req.query.product_id)
    await Daily_sale_summaries.findAll({
        attributes: [
                          'date_day',
                          'product_id',
                          'units_sold',
                          'sales'
                         ],
                        where: {
                                      product_id: req.query.product_id
                                    }
                                  
                    }).then(data => {
   if(data) {
    salesData= data.map(sale => ({
                date_day: sale.date_day,
                product_id: sale.product_id,
                units_sold: sale.units_sold,
                sales: sale.sales,
                sales_per_unit: sale.sales / sale.units_sold
              }));
          
              res.status(200).send(salesData);
   }
})
.catch(err => {
   res.status(404).send({
       message: 
           err.message || "cannot find"      
   })
})
      
}
//הפיצרים הם
//צבע     טבלת צבעים
//מידה    טבלת  מידה  
//טבלת סטייל     STYLE


