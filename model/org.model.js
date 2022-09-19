let mongoose = require("mongoose");
const organizationSchema = new mongoose.Schema({
  organizationName: {
    type: String,
    unique: true,
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
  organizationTypeid: {
    type: String,
    default: null,
  },
});
let users = mongoose.model("organization", organizationSchema);

module.exports = { users };
