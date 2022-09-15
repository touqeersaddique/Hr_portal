var express = require("express");
// var cors = require("cors");
var app = express();
var port = 4000;
const route = require("./route/org.route");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/hr_portal", {
  useUnifiedTopology: true,
  useNewurlParser: true,
});
//app.use(cors());
app.use(bodyParser.json());
app.use("/", route);
app.listen(port || 4000, function () {
  var datetime = new Date();
  var message = "Server running on port:-" + port + "Started at:-" + datetime;
  console.log(message);
});
