const Proof = artifacts.require("Payer");
module.exports = function(deployer) {
  deployer.deploy(Proof);
};