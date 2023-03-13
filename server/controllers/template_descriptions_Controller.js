const db = require('../models/index')
const Template_descriptions = db.template_descriptions;
//    http://localhost:3600/template_descriptions
//הכנסת רשומה Post  V
//

//{
//  "company":"iuf7ti",
 // "template_name":"iuiri",
 //    "purpose":"i7toi",
 //    "gender":"uinytfi",
 //    "type":"hfiyu",
 //    "properties":"juituiy",
//     "more_properties":"iuyli",
////     "state_template_id":3
//} 
exports.AddingArecord= async(req, res) => { 
  //res.send("gsjht");
   const{company,template_name,purpose,gender,type,properties,  more_properties,state_template_id} = req.body; 
if(!company||!template_name||!purpose||! gender||!type||!properties||!state_template_id) {
    res.status(400).json({message:`all field are required`})
}
 try {
    // Check if a record with the same values already exists
    const existingRecord = await Template_descriptions.findOne({
      where: { company,template_name,purpose,gender,type,properties,  more_properties,state_template_id }
    });
    if (existingRecord) {
      res.status(409).send("Record already exists");
    } else {
      // Insert the new record
      const template_descriptions_record = await Template_descriptions.create({company,template_name,purpose,gender,type,properties,
                more_properties,state_template_id})  ;  
            
             
              if(template_descriptions_record)
                res.status(200).json({message:`product ${template_descriptions_record.id_template_descriptions} was created succfully`})
              else
                res.status(401).json({message:`invalid data`})
              
    }
 } catch (error) {
    console.error(   res.status(500).send("Error inserting record"));
 
  }
}

    //http://localhost:3600/template_descriptions?id_template_descriptions=1
    //id_template_description :1
     //מחיקת רשומהץ delete  v
  exports.DeletingArecord=async(req, res) => {
    console.log(req.query.id_template_descriptions);
 
    await Template_descriptions.destroy({
      where: {
       id_template_descriptions: req.query.id_template_descriptions
      }
    })
    .then(num => {
      if(num)
        res.send('Successfully Deletion!')
        else res.status(500).send('Failed Deletion')
    }).catch(err => {
      res.status(404).send({
          message: 
              err.message || "error "      
      })
   })
       
    }   
 
//http://localhost:3600/template_descriptions
//{
///"id_template_descriptions":1,
//"company":"hodaya",
//"template_name":"htyjrtiuy",
//"purpose":1,
//"product_name":"grarg",
//"gender":"rhgeah",
//"type":"haetr",
//"properties":"hfaedh",
//"state_template_id":1,
//} 
   //עריכה לכל השדות PUT   V
   exports.EditingArecord=async(req,res)=>{
      const data=await Template_descriptions.update(req.body, {
        where: {
          id_template_descriptions:req.body.id_template_descriptions
        }
      }).then(num => {
        if(num)
          res.send('Successfully update!')
          else res.status(500).send('Failed update')
      }).catch(err => {
        res.status(404).send({
            message: 
                err.message || "error"      
        })
     })
          
    }
    
 

    



  