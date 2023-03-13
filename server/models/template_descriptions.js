state_templates = require("./state_templates")


module.exports = (sequelize,DataTypes)=>{
    const Template_descriptions = sequelize.define('template_descriptions',{
        id_template_descriptions: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        state_template_id: {
        type: DataTypes.INTEGER,
        // references: {
        //     model: sequelize.state_templates,
        //     key: 'id_state_templates'
        //   }
        },
        company: DataTypes.STRING,
        template_name: DataTypes.STRING,
        purpose: DataTypes.STRING,
        gender: DataTypes.STRING,
        type: DataTypes.STRING,
        properties: DataTypes.STRING,
        more_properties: DataTypes.STRING,
        
    },
    {
        timestamps: false
    }
    );
    return Template_descriptions;
}
//BOOLEAN STRING