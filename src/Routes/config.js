import Web3 from './web3'

export const CONTACT_ADDRESS = '0xe13839E763C7ABbaE361A8Bca6a80d00F2c3018b';
export const CONTACT_ABI = [
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "companyAddressList",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "string",
        "name": "_ipfs",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "c_name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "c_date",
        "type": "uint256"
      }
    ],
    "name": "registrationJobPosting",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "testWeb3",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }
];

const instance = new Web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS);
export default instance;