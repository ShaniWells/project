module.exports = (sequelize,DataTypes)=>{
    const Customers = sequelize.define('customers',{
        idcustomers: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        password: DataTypes.STRING,
        customer_name: DataTypes.STRING,
        image: DataTypes.STRING,
        phone: DataTypes.STRING,
    },
    {
        timestamps: false
    }
    );
    return Customers;
}
