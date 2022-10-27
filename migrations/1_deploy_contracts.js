const PayByLocation = artifacts.require("PayByLocation");
module.exports = function(deployer) {
  deployer.deploy(PayByLocation);
};