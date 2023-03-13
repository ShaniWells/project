//run
const db = require('../models/index')
const Customers = db.customers;

//GET
//http://localhost:3600/customers
exports.Retrieving_passwords = async (req, res) => {
    await Customers.findAll({
                 attributes: ['password']
               })
        .then(data => {
            if(data) {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(404).send({
                message: 
                    err.message || "cannot find"      
            })
        })
               
}
//GET
//http://localhost:3600/customers/password?password=1234
exports.RetrievingArecordByPassword = async(req,res)=>{
     await Customers.findAll({
                    where: {
                        password: req.query.password
                    }
                 })
        .then(data => {
            res.send(data)
        })
        .catch(error => {
           res.send('Failed to retrieve data : ', error);
        })
}
const jwt = require("jsonwebtoken");
//GET
//http://localhost:3600/customers/login?id=123456
exports.login= async(req, res) =>{
    console.log(req.query.id);
    if (req.query.id == 123456) {
      res.send("1");
    }
    try {
         await Customers.findOne({
            where: {password: req.query.id },
        }).then(data => {
            if(data) {
            const accessTokensecret="bussinesToken";
            // const accessToken = jwt.sign(accessTokensecret);
            var token = jwt.sign({ foo: '2' }, 'bussinesToken');
            res.send(token)}
            else res.status(500).send('user not found')
        })
    } catch (error) {
      console.error(error);
       res.send('error');
    }
    
  }