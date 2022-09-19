let express = require("express");
let mongoose = require("mongoose");
let app = express();
let csvtojson = require("csvtojson");
let { organizationtype } = require("../model/org.category.model");

let organizationCategory = async (req, res) => {
  try {
    csvtojson()
      .fromFile("data.csv")
      .then(async (csvdata) => {
        for (let i = 0; i <= csvdata.length; i++) {
          await organizationtype.find(csvdata[i]).then(async (data, err) => {
            // console.log("this is csvdatas",csvdata[i])
            //console.log("skjdnvjkdsmfnsdklfmn",data);
            //console.log("csv",csvdata[i].organization_category);
            if (data) {
              return res.status(406).json({
                message: "Data Already Exist",
                data: data.organization_category,
              });
              // console.log('====> This is the response',data.organization_category)
              // res.status(406).json({
              //     message:"Data already exist"
              // })
            } else {
              // console.log('Not found');
              var cat = new organizationtype(csvdata[i]);
              //console.log(cat)
              await cat.save(csvdata[i]);
              // return res.status(200).json({
              //     message:"Data Saved",
              //     data:data.organization_category
              // })
              // res.send("this is else")
              console.log("this is else");
            }
          });
        }
        return res.status(200).json({
          message: "Data Saved Successfully",
        });
      });
  } catch (error) {
    return res.status(404).json({
      isError: true,
      message: error.message,
    });
  }
};

module.exports = { organizationCategory };
