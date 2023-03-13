module.exports = (sequelize,DataTypes)=>{
    const State_templates = sequelize.define('state_templates',{
        id_state_templates: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        customer_id: {
        type: DataTypes.INTEGER,
        //foreignKey:true
        // references: {
        //     model: sequelize.customers,
        //     key: 'idcustomers'
        //   }
      
        },
        template_name: DataTypes.STRING,
        products_linked: DataTypes.INTEGER,
        sku: DataTypes.STRING,
        change_date: DataTypes.DATE,
        status: DataTypes.STRING
    },
    {
        timestamps: false
    }
    );
    return State_templates;
}
//BOOLEAN STRING