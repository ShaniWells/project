
module.exports = (sequelize,DataTypes)=>{
    const State_description_product = sequelize.define('state_description_product',{
        id_state_description_product: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        statuse: DataTypes.BOOLEAN,
        product_name: DataTypes.STRING,
        sku: DataTypes.STRING,
        last_edited_date: DataTypes.DATE,
        embed: DataTypes.BOOLEAN

    },
    {
        timestamps: false
    }
    );
    return State_description_product;
}
//BOOLEAN STRING