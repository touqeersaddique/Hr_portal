let express = require("express");
let mongoose = require("mongoose");
let app = express();
let { users } = require("../model/org.model");
let { organizationtype } = require("../model/org.category.model");

async function organization(req, res) {
  try {
    let organizationName = req.body.organization;
    let organizationAddress = req.body.organizationAddress;
    let subscriptionPlan = req.body.subscriptionPlan;
    let logo = req.body.logo;
    let subDomain = req.body.subDomain;
    let organizationTypeid = req.body.organizationCategory;
    console.log(organizationTypeid);
    let value = new users({
      organizationName: organizationName,
      organizationAddress: organizationAddress,
      subscriptionPlan: subscriptionPlan,
      logo: logo,
      subDomain: subDomain,
      organizationTypeid: organizationTypeid,
    });

    await value.save();
    return res.status(200).json({
      isError: false,
      message: "added successfully",
    });
  } catch (error) {
    return res.status(404).json({
      isError: true,
      message: error.message,
    });
  }
}
async function viewOrganization(req, res) {
  try {
    let organizationTypeid = req.body.organization;
    console.log(organizationTypeid, "yeh wali");
    let view = await users.findById(organizationTypeid);
    console.log(view.organizationTypeid, "h");
    let view2 = await organizationtype.findById(view.organizationTypeid);
    // console.log(view2);
    return res.status(200).json({
      message: "found",
      isError: false,
      data: view2,
    });
  } catch (error) {
    return res.status(404).json({
      isError: true,
      message: error.message,
    });
  }
}

module.exports = { organization, viewOrganization };
