//const ganache = require('ganache-cli');
const Web3 = require('web3');
const assert = require('assert')
const mocha = require('mocha');
const {interface,bytecode} = require('../complie');
//const testrpc = require('testrpc');

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var accounts;
var inbox;
beforeEach(async()=>{
   accounts = await web3.eth.getAccounts();
   console.log(interface);
   console.log(bytecode);
   inbox = await new web3.eth.Contract(JSON.parse(interface))
   .deploy({data:bytecode,arguments:['Hi']})
   .send({from:accounts[0],gas:'1000000'});
//    inbox = await new Web3.eth.Contract(JSON.parse(interface))
//    .deploy({data:bytecode,arguments:['Hi There!!!']})
//    .send({from:accounts[0],gas:'100000'});
});

describe('Inbox',()=>{
    it('deploy a contract',()=>{
        console.log(inbox);
    });
});
// class Car{
//     drive(){
//         return "Vroom";
//     }
//     park(){
//         return "stopped";
//     }
// }

// let car ;
// beforeEach(()=>{
//     car = new Car();
// });

// describe("Car Test",()=>{
//     it("Should return Vroom",()=>{
//         assert.equal(car.drive(),"Vroom");
//     });
//     it("Should return stopped",()=>{
//         assert.equal(car.park(),"stopped");
//     })
// });


