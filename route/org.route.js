var express = require("express");
const controller = require("../controller/org.category.controller");
const { Router } = require("express");

var route = express.Router();

route.post("/organization", controller.organization);
route.get("/aad-org-category", controller.organization_category);
route.get("/view", controller.viewOrganization);
module.exports = route;
