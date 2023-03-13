const product_description = require("./product_description")


module.exports = (sequelize,DataTypes)=>{
    const Product_description_by_company = sequelize.define('product_description_by_company',{
        idproduct_description_by_company: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        product_description_id: {
        type: DataTypes.INTEGER,
        // references:  product_description,
        // referencesKey: 'id_product_description',
        // references: {
        //     model: sequelize.product_description,
        //     key: 'id_product_description'
        //   }
        },
     amz_description: DataTypes.STRING,
       
    },
    {
        timestamps: false
    }
    );
    return Product_description_by_company;
}
