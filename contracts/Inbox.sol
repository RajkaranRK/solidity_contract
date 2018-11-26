pragma solidity ^0.4.25;

contract Inbox{
    string  public  message;
    
    constructor(string initialMsg) public{
        message = initialMsg;
    }
    
    function setMessage(string msg) public{
        message = msg;
    }
    
    function getMessage()public  returns(string){
        return message;
    }
    
    function getDate() public  returns(uint){
        return now;
    }
}
