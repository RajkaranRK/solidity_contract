//in order to run the code use "npm run test"
//make sure testrpc network in on at 8545 port 

const Web3 = require('web3');
const assert = require('assert')
const mocha = require('mocha');
const {interface,bytecode} = require('../complie');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var accounts;
var inbox;
const INITIAL_MSG = "Hi There!";


beforeEach(async()=>{
   accounts = await web3.eth.getAccounts();
   console.log(interface);
   console.log(bytecode);
   inbox = await new web3.eth.Contract(JSON.parse(interface))
   .deploy({data:bytecode,arguments:[INITIAL_MSG]})
   .send({from:accounts[0],gas:'1000000'});

});

describe('Inbox',()=>{
    it('deploy a contract',()=>{
        console.log(inbox);
    });

    it('has default value',async ()=>{
        const message = await inbox.methods.message().call();
        //inbox is the contract object
        //methods is the properties of the contract 
        //and message is the function() of the contract with no parameter
        //call() is tell who is actually going to run the transaction
        //you can set the gas limit as well as in call()
        assert.equal(message,INITIAL_MSG);
    });

    it('should update the message',async()=>{
        const recepit = await inbox.methods.setMessage('Bye There!')
        .send({from:accounts[0] });
        const message = await inbox.methods.message().call();
        assert.equal(message,'Bye There!');
    });
});
