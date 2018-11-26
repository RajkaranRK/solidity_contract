const path = require('path');
const fs = require('fs');
const solc = require('solc');
//here path module provide the system 
//compatibility for accessing the file either
// in Windox,linux,unix
const inboxPath  = path.resolve(__dirname,'contracts','Inbox.sol');
const source = fs.readFileSync(inboxPath,'utf8');
//console.log(solc.compile(source,1));
module.exports = solc.compile(source,1).contracts[':Inbox'];

