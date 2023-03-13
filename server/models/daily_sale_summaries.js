otm_product = require("./otm_product");

module.exports = (sequelize,DataTypes)=>{
    const Daily_sale_summaries = sequelize.define('daily_sale_summaries',{
        daily_sale_summary_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        daily_product_id: {
        type: DataTypes.INTEGER
        // references: 'otm_product',
        // referencesKey: 'daily_product_id',
        // foreignKey: true,
        // references: {
        //     model: sequelize.otm_product,
        //     key: 'daily_product_id'
        //   }
        },
        date_day: DataTypes.TEXT,
        units_sold: DataTypes.INTEGER,
        sales: DataTypes.DOUBLE,
        store_front_id: DataTypes.INTEGER
    },
    {
        timestamps: false
    }
    );
    return Daily_sale_summaries;
}
