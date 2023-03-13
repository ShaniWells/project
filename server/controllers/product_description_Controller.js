
//run
const { Console } = require('console');
const base64toFile = require('node-base64-to-file');
const fs = require('fs');
const db = require('../models/index');
const Product_description = db.product_description

//http://localhost:3600/product_description
// {
//   "company":"yael",
//   "product_purpose":"htyjrtiuy",
//   "type":1,
//   "product_name":"ser",
//   "gender":"rhgeah",
//   "properties":"haetr",
//   "more_properties":"hfaedh",
//   "template_description_id":13,
//   "pictures":"[dfggffh,kuyg,jgft]",
//   "state_description_product_id":1
//   }  
// הכנסת רשומה  V
//POST RUN
exports.AddingArecord= async(req, res) => {
  console.log(req.body) ;

let{company,product_purpose,type,
        product_name,gender,properties,more_properties,template_description_id,
        pictures,state_description_product_id} = req.body; 
      
    if(!company|| !product_purpose||!type||!product_name||!gender||!properties||!template_description_id||!state_description_product_id) {
        res.status(400).json({message:`all field are required`})
    }
  
   const existingRecord = await Product_description.findOne({
      where: { 
        company,product_purpose,type,product_name,gender,properties,more_properties,
        template_description_id,state_description_product_id
        }
    })
    if (existingRecord) {
      res.status(409).send("Record already exists");
    } 
   else{
       if(pictures){
                     console.log(pictures);
                     const base64String ='data:image/png;base64,iVBORw0KGgo...';
                     const parentFolder = './imagesFolder/products';
                     const newFolder = product_name;
                     await fs.mkdir(`${parentFolder}/${newFolder}`,{ recursive: true }, async(err) => {
                       if (err) { res.status(500).send(error);}
                       else { console.log('New folder created successfully!');
                       try {
                        pictures = pictures.substring(1,pictures.length-1)
                        pictures= pictures.split(",");
                          
                          pictures.forEach(async(element) => {
                          console.log(element)  
                                                                                                                        
                          const imagePath = await base64toFile(base64String, { filePath: `./imagesFolder/products/${product_name}`, fileName: element, types: ['png'], fileMaxSize: 3145728 });
                         console.log(imagePath)
                         } 
                         );
                        pictures =`./imagesFolder/products/${product_name}` 
                      }catch (error) {
                          console.log(error)
                        }
                       ;} 
                      });
                   }
//             //pictures =`./imagesFolder/products/${product_name}`   //..הכנס  תמונות בנתיב
    const product_description_record = await Product_description.create({
       company,product_purpose,type,product_name,gender,properties,more_properties,
       template_description_id,pictures,state_description_product_id
    })   
     
      if(product_description_record)
        res.status(200).json({message:`product ${product_description_record.id_product_description} was created succfully`})
      else
        res.status(401).json({message:`invalid data`})
      
 // }

  }}
      
         
 

//http://localhost:3600/product_description?id_product_description=1
//DELETE  RUN   rrrrrrrrrrrrrrr
// //מחיקת רשומה עפ   האי די   delete  V
//DELETE
 exports.DeletingArecord=async(req, res) => {
 
    await Product_description.destroy({
      where: {
        id_product_description: req.query.id_product_description
      }
    })
    .then(num => {
      if(num == 1)
        res.send('Successfully Deletion!')
        else res.status(500).send('Failed Deletion')
    }).catch(err => {
      res.status(404).send({
          message: 
              err.message || "error"      
      })
   })
}  
//http://localhost:3600/product_description
// {
//   "id_product_description":83,
//   "company":"yael",
//   "product_purpose":"htyjrtiuy",
//   "type":1,
//   "product_name":"ser",
//   "gender":"rhgeah",
//   "properties":"haetr",
//   "more_properties":"hfaedh",
//   "template_description_id":13,
//   "pictures":"[dfggffh,kuyg,jgft,ddddddddddddddd,asasasas]",
//   "state_description_product_id":1
//   } 

//השדות לעידכון

// //עריכה PUT  V
exports.EditingArecord=async(req,res)=>{
let pictures=req.body.pictures;
if(pictures){
    const folderPath = `../imagesFolder/products/${req.body.product_name}`; 
    const parentFolder = '../imagesFolder/products';
         const newFolder =req.body.product_name;
         const base64String ='data:image/png;base64,iVBORw0KGgo...';
    if (fs.existsSync(folderPath)==null) {
       //אם לא מצאתה נתיב תיצור נתיב
        fs.mkdir(`${parentFolder}/${newFolder}`, { recursive: true }, async(err) => {
          if (err) {
            throw err;
          } else {
            console.log('New folder created successfully!');}})}
            try {
              pictures = pictures.substring(1,pictures.length-1)
              pictures= pictures.split(",");
                pictures.forEach(async(element) => {
                console.log(element)                                                                                              
                const imagePath = await base64toFile(base64String, { filePath: `./imagesFolder/products/${req.body.product_name}`, fileName: element, types: ['png'], fileMaxSize: 3145728 });
               console.log(imagePath)
               } 
               );
            pictures =`./imagesFolder/products/${req.body.product_name}` ;
          }catch (error) {
              console.log(error)
            }
        }
      
          let{company,product_purpose,type,
            product_name,gender,properties,more_properties,template_description_id,
            image,state_description_product_id} = req.body; 
          
        if(!company|| !product_purpose||!type||!product_name||!gender||!properties||!template_description_id||!state_description_product_id) {
            res.status(400).json({message:`all field are required`})
        }

      const data = await Product_description.update(
{
company:company,
product_purpose:product_purpose,
type:type,
product_name:product_name,
gender:gender,
properties:properties,
more_properties:more_properties,
template_description_id:template_description_id,
pictures :pictures,
state_description_product_id:state_description_product_id
}  , {
      where: {
        id_product_description:req.body.id_product_description
      }
    }).then(data => {
      if(data )
        res.send('Successfully update!')
        else res.status(500).send('Failed update')
    }).catch(err => {
      res.status(404).send({
          message: 
              err.message || "error"      
      })
   })
  }
//http://localhost:3600/product_description?template_description_id=1
//שליפת המוצרים המקושרים לתבנית  מסוים GET  
exports.RetrievingProductsLinkedToAcertainTemplate=async(req, res)=>{   
    
  await Product_description.findAll({
    where: {
            template_description_id : req.query.template_description_id
          }}).then(data => {
                             res.send(data)
                            }).catch(error => {res.send('Failed to retrieve data : ', error);})  
}

     
