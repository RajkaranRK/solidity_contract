const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./complie');


const INITIAL_MSG = "Hi There!";


const provider = new HDWalletProvider(
    'memonics',
    'https://ropsten.infura.io/v3/<token>'
);

const web3 = new Web3(provider);
var result;
const deploy = async()=>{
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deply contract using account :',accounts[0]);
   // console.log(accounts[0].eth);
    result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:bytecode,arguments:[INITIAL_MSG]})
    .send({from:accounts[0], gas: '7000000', gasPrice: web3.utils.toWei('500', 'gwei')});
    console.log('Contract deploy to ',result.options.address);
};
deploy();
