const payByLocation = artifacts.require("PayByLocation");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("PayByLocation", function (/* accounts */) {
  // it("should assert true", async function () {
  //   let instance = await payByLocation.deployed();
  //   // console.log(await instance.getSender())
  //   return assert.isTrue(await instance.getSender()=="0xbb3c032365E41D85F1730Cb08e86dA6EA138FDe7");
  // });

  it("should assert true", async function () {
    let instance = await payByLocation.deployed();
    console.log(await instance.getDistance(0,0,3,4))
    // console.log(await instance.sqrt(4)==2)
    return assert.isTrue(await instance.getDistance(0,0,3,4)==5);
  });
});
