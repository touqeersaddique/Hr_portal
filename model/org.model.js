const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const organizationSchema = new Schema({
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
});
let users = mongoose.model("organization", organizationSchema);

module.exports = { users };
