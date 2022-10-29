import web3 from './web3';

const address = "0xc244784a1a92016a3f474210beecabb7cea4b622";
const data = require("./PayByLocation.json")
const abi =  data.abi;

// @ts-ignore
// web3.eth.sendTransaction({to:"0x14746d82f23b1cb53e60ddcbd8b88302bc5474c1", from:"0xdC7672A66cE69F7ceABE2C94d40Efb146a62190F", value: web3.utils.toWei('1')})
export default new web3.eth.Contract(abi, address);