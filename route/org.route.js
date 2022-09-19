var express = require("express");
const orgCategorycontroller = require("../controller/org.category.controller");
const orgController = require("../controller/org.controller");

var route = express.Router();

route.post("/api/organization", orgController.organization);
route.get("/api/aad-org-category", orgCategorycontroller.organizationCategory);
route.get("/api/view-organization", orgController.viewOrganization);
module.exports = route;
