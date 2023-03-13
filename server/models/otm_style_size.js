
module.exports = (sequelize,DataTypes)=>{
    const Otm_style_size = sequelize.define('otm_style_size',{
        style_size_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        client_guid: DataTypes.TEXT,
        style_size_created_user_id: DataTypes.INTEGER,
        style_size_guid: DataTypes.TEXT,
        size_name: DataTypes.TEXT,
        size_code: DataTypes.TEXT,
        prodct_size_sort_order: DataTypes.INTEGER
    },
    {
        timestamps: false
    }
    );
    return Otm_style_size;
}