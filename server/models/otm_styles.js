otm_product = require("./otm_product")


module.exports = (sequelize,DataTypes)=>{
    const Otm_styles = sequelize.define('otm_styles',{
        product_ext_idid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        product_id: {
        type: DataTypes.INTEGER,
        // references: 'otm_product',
        // referencesKey: 'product_id',
        // references: {
        //     model: sequelize.otm_product,
        //     key: 'product_id'
        //   }
        },
        id: DataTypes.TEXT,
        id_type: DataTypes.INTEGER
    },
    {
        timestamps: false
    }
    );
    return Otm_styles;
}
