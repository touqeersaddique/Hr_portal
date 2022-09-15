let mongoose = require("mongoose");

const organizationType = new mongoose.Schema({
  organization_category: {
    type: String,
    enum: {
      values: [
        "Accomodation",
        "Accounting",
        "Agriculture",
        "Construction",
        "Consulting",
        "Design",
        "Digital Marketing",
        "E-Commerce",
        "Education",
        "Entertainment",
        "HealthCare",
        "Office",
      ],
    },
    timestamp: true,
  },
  organization_id: {
    type: String,
    default: null,
  },
});
const organizationSchema = new mongoose.Schema({
  organizationName: {
    type: String,
    required: true,
  },
  organizationAddress: {
    type: String,
    required: true,
  },
  subscriptionPlan: {
    type: String,
    enum: ["weekly", "monthly", "yearly"],
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  subDomain: {
    type: String,
    required: true,
  },
  organizationType_id: {
    type: String,
    default: null,
  },
});
let users = mongoose.model("organization", organizationSchema);

const organizationtype = mongoose.model("Organization_type", organizationType);
module.exports = { organizationtype, users };
