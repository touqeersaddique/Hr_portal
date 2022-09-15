const { users } = require("../model/org.model");

async function organization(req, res) {
  try {
    let organizationName = req.body.organization;
    let organizationAddress = req.body.organizationAddress;
    let subscriptionPlan = req.body.subscriptionPlan;
    let logo = req.body.logo;
    let subDomain = req.body.subDomain;
    console.log(
      organizationName,
      organizationAddress,
      subscriptionPlan,
      logo,
      subDomain
    );
    let value = new users({
      organizationName: organizationName,
      organizationAddress: organizationAddress,
      subscriptionPlan: subscriptionPlan,
      logo: logo,
      subDomain: subDomain,
    });

    await value.save();
    res.status(200).send(" sucess");
  } catch (error) {
    res.status(404).json(error.message);
  }
}

module.exports = { organization };
