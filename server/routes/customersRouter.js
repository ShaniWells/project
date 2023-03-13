const express = require('express');
const jwt = require("jsonwebtoken");
const customers = require('../controllers/customers_Controller');
const router = express.Router();
const accessTokensecret= "bussinesToken";
const authenticateJWT =(req,res,next)=>{
const authHeader = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiIyIiwiaWF0IjoxNjc3NzY0MjM3fQ.kjD-zmGOiv7KtWP88oCnP7f24p94x0Qu4CBX_flICjU";
// if(authHeader){
const token = authHeader;
jwt.verify(token,accessTokensecret,(err,data)=>{
    if(err){
        console.log(err);
    return res.send("403");
}
req.data = data;
next();


});
// }else{
    
// res.sendStatus(401);
// }







}

router.route('/')
    .get(customers.Retrieving_passwords)

router.route('/password')
    .get(customers.RetrievingArecordByPassword) 
router.route('/login')
    .get(customers.login)    
module.exports = router;
