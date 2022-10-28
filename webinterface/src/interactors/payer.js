import web3 from './web3';

const address = "0x0fe9269e3dA70b3f61312dFF9Ae1E3fe912E103C";

const abi =  [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "balance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "employees",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "distance",
        "type": "uint256"
      },
      {
        "internalType": "int256",
        "name": "lat",
        "type": "int256"
      },
      {
        "internalType": "int256",
        "name": "lng",
        "type": "int256"
      },
      {
        "internalType": "bool",
        "name": "comply",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_employeeAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_allowedDistance",
        "type": "uint256"
      },
      {
        "internalType": "int256",
        "name": "_lat",
        "type": "int256"
      },
      {
        "internalType": "int256",
        "name": "_lng",
        "type": "int256"
      }
    ],
    "name": "addEmployee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "empAddress",
        "type": "address"
      }
    ],
    "name": "getEmployee",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "distance",
            "type": "uint256"
          },
          {
            "internalType": "int256",
            "name": "lat",
            "type": "int256"
          },
          {
            "internalType": "int256",
            "name": "lng",
            "type": "int256"
          },
          {
            "internalType": "bool",
            "name": "comply",
            "type": "bool"
          }
        ],
        "internalType": "struct PayByLocation.Employee",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "int256",
        "name": "_lat",
        "type": "int256"
      },
      {
        "internalType": "int256",
        "name": "_lng",
        "type": "int256"
      }
    ],
    "name": "evaluate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "int256",
        "name": "x",
        "type": "int256"
      }
    ],
    "name": "sqrt",
    "outputs": [
      {
        "internalType": "int256",
        "name": "y",
        "type": "int256"
      }
    ],
    "stateMutability": "pure",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getSender",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
];

// @ts-ignore
// web3.eth.sendTransaction({to:"0x14746d82f23b1cb53e60ddcbd8b88302bc5474c1", from:"0xdC7672A66cE69F7ceABE2C94d40Efb146a62190F", value: web3.utils.toWei('1')})
export default new web3.eth.Contract(abi, address);