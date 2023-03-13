module.exports = (sequelize,DataTypes)=>{
    const Otm_style_color = sequelize.define('otm_style_color',{
        style_color_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        
        client_guid: DataTypes.TEXT,
        style_color_created_user_id: DataTypes.INTEGER,
        style_color_guid: DataTypes.TEXT,
        color_name: DataTypes.TEXT,
        color_code: DataTypes.INTEGER

    },
    {
        timestamps: false
    }
    );
    return Otm_style_color;
}
