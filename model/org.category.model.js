let mongoose = require("mongoose");

const organizationType = new mongoose.Schema({
  organizationCategory: {
    type: String,

    timestamp: true,
  },
});

const organizationtype = mongoose.model("Organization_type", organizationType);
module.exports = { organizationtype };
