const payTest = artifacts.require("payTest");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("payTest", function (/* accounts */) {
  it("should assert true", async function () {
    await payTest.deployed();
    return assert.isTrue(true);
  });
});
