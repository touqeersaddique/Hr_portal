var express = require("express");
const controller = require("../controller/org.controller");
const { Router } = require("express");

var route = express.Router();

route.post("/organization", controller.organization);
module.exports = route;
