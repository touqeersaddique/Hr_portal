let express = require("express");
let mongoose = require("mongoose");
let app = express();
let csvtojson = require("csvtojson");
let { organizationtype, users } = require("../model/org.category.model");
//const { post } = require("../routes/org.category.route");

let organization_category = async (req, res) => {
  // res.send("all good")

  // };
  csvtojson()
    .fromFile("data.csv")
    .then((csvdata) => {
      console.log(csvdata);
      organizationtype.insertMany(csvdata).then(function () {
        res.status(200).json("Data Saved");
      });
    })
    .catch(function (error) {
      res.status(500).json("Error");
    });
};

async function organization(req, res) {
  try {
    let organizationName = req.body.organization;
    let organizationAddress = req.body.organizationAddress;
    let subscriptionPlan = req.body.subscriptionPlan;
    let logo = req.body.logo;
    let subDomain = req.body.subDomain;
    let organizationType_id = req.body.organizationCategory;
    console.log(
      organizationName,
      organizationAddress,
      subscriptionPlan,
      logo,
      subDomain,
      organizationType_id
    );
    let value = new users({
      organizationName: organizationName,
      organizationAddress: organizationAddress,
      subscriptionPlan: subscriptionPlan,
      logo: logo,
      subDomain: subDomain,
      organizationType_id: organizationType_id,
    });

    await value.save();
    res.status(200).send(" sucess");
  } catch (error) {
    res.status(404).json(error.message);
  }
}
async function viewOrganization(req, res) {
  let organizationType_id = req.body.organization;
  let view = await users.findById(organizationType_id);
  console.log(view.organizationType_id);
  let view2 = await organizationtype.findById(view.organizationType_id);
  res.json(view2);
}

module.exports = { organization, organization_category, viewOrganization };
