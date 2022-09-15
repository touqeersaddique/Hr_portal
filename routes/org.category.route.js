let express=require('express');
let route=express.Router();
let controller=require('../controller/org.category.controller');
//let {tokendecode,sec}=require('../middleware/userdata');



route.get('/aad-org-category',controller.organization_category);

module.exports=route;
