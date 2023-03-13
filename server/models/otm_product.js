otm_style_color = require("./otm_style_color");
otm_style_size = require("./otm_style_size");

module.exports = (sequelize,DataTypes)=>{
    const Otm_product = sequelize.define('otm_product',{
        product_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        style_color_id: {
            type: DataTypes.INTEGER,
            // references: 'otm_style_color',
            // referencesKey: 'style_color_id',
            // foreignKey: true,
            // references: {
            //     model: sequelize.otm_style_color,
            //     key: 'style_color_id'
            //   }
        
        },
        style_size_id: {
            type: DataTypes.INTEGER,
            // references:'otm_style_size',
            // referencesKey: 'style_size_id',
        //     foreignKey: true,
        // references: {
        //     model: otm_style_size,
        //     key: 'style_size_id'
        //   }
            },
        product_guid: DataTypes.TEXT,
        product_name: DataTypes.TEXT,
        
        qty_on_order: DataTypes.TEXT,
        ats: DataTypes.TEXT,
        style_id: DataTypes.INTEGER,
        upc: DataTypes.TEXT,
        product_weight: DataTypes.BIGINT,
        asin: DataTypes.TEXT,
        color_unconfirmed: DataTypes.TEXT,
        size_unconfirmed: DataTypes.TEXT,
    },
    {
        timestamps: false
    }
    );
    return Otm_product;
}
