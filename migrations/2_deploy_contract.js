var SmartNote = artifacts.require("./SmartPromissoryNote.sol");

module.exports = function(deployer) {
  deployer.deploy(SmartNote);
};
