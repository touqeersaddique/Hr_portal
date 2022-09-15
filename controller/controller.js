let express=require('express');
let mongoose=require('mongoose');
//var jwt=require('jsonwebtoken')
let app=express();
let csvtojson=require('csvtojson');
let {organization}=require('../model/model');
const { post } = require('../routes/route');

let organization_category=async (req,res)=>{
    // res.send("all good")

    // };
    csvtojson()
    .fromFile('data.csv')
    .then(csvdata=>{
        console.log(csvdata)
        organization.insertMany(csvdata).then(function(){
            console.log("all ok")
        })
    }).catch(function(error){
        console.log("error")
    })
        
}

module.exports={organization_category}
