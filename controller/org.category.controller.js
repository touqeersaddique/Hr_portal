let express=require('express');
let mongoose=require('mongoose');
//var jwt=require('jsonwebtoken')
let app=express();
let csvtojson=require('csvtojson');
let {organization}=require('../model/org.category.model');
const { post } = require('../routes/org.category.route');

let organization_category=async (req,res)=>{
    // res.send("all good")

    // };
    csvtojson()
    .fromFile('data.csv')
    .then(csvdata=>{
        console.log(csvdata)
        organization.insertMany(csvdata).then(function(){
            res.status(200).json("Data Saved")
        })
    }).catch(function(error){
        res.status(500).json("Error")
    })
        
}

module.exports={organization_category}
