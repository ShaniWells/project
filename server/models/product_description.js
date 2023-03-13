state_description_product = require("./state_description_product")
template_descriptions = require("./template_descriptions")



module.exports = (sequelize,DataTypes)=>{
    const Product_description = sequelize.define('product_description',{
        id_product_description: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        template_description_id: {
        type: DataTypes.INTEGER,

        // references: {
        //     model: sequelize.template_descriptions,
        //     key: 'id_template_descriptions'
        //   }

        },
        state_description_product_id: {
            type: DataTypes.INTEGER,
            // references: 'state_description_product',
            // referencesKey: 'id_state_description_product',
            // references: {
            //     model: sequelize.state_description_product,
            //     key: 'id_state_description_product'
            //   }
            },
       
        company: DataTypes.STRING,
        product_purpose: DataTypes.STRING,
        type: DataTypes.STRING,
        product_name: DataTypes.STRING,
        gender: DataTypes.STRING,
        properties: DataTypes.STRING,
        more_properties: DataTypes.STRING,
        
        pictures: DataTypes.STRING
    },
    {
        timestamps: false
    }
    );
    return Product_description;
}
//BOOLEAN STRING