module.exports = (sequelize,DataTypes)=>{
    const Rep_sellable_daily_inventories = sequelize.define('rep_sellable_daily_inventories',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull:false
        },
        qty:DataTypes.INTEGER,
        day:DataTypes.TEXT,
        sku:DataTypes.TEXT,
        linked_product_id: DataTypes.INTEGER,
        asin: DataTypes.TEXT,
    },
    {
        timestamps: false
    }
    );
    return Rep_sellable_daily_inventories;
}