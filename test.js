const Web3 = require('web3');

var web3 = new Web3("http://localhost:8545");

web3.eth.getAccounts().then(accounts =>{
    foo = accounts
    console.log(foo);
});

web3.eth.getBalance().then(balance =>{
    console.log(balance);
});
