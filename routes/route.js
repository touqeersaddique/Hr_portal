let express=require('express');
let route=express.Router();
let controller=require('../controller/controller');
//let {tokendecode,sec}=require('../middleware/userdata');



route.post('/signup',controller.organization_category);

module.exports=route;
