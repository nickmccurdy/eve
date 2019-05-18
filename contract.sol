pragma solidity 0.5.3;

contract Subreddits {
    // array of redditgov addresses
    address[] public redditgovAddr;
    event SubredditCreated(address SubredditCreated);
    
    function CreateSubreddit (string memory name, uint minAmount) public {
        // verify there is not already a subreddit with the same name
        RedditGov rg = new RedditGov(name, minAmount);
        // add rg to list of reddits
        // emit event SubredditCreated
        redditgovAddr.push(address(rg));
    }
    
    // maybe add a function that allows iterating through the array of redditgovs
    function SubreddListLengh()
    public
    view
    returns(uint count)
  {
    return redditgovAddr.length;
    }
    
    
}

contract RedditGov{

    event DonationReceived(address Donor, uint value);

    string private name;
    uint minAmount;
    
    struct Attack {
    string disciption;
    uint duration;
    uint index;
  }
    mapping(address => Attack) private Attacks;
    address[] private dataIndex;
    event AttackRegistered(address attacker, string disciption, uint duration,uint index);
    
    constructor (string memory name_, uint minAmount_) public {
        name = name_;
        minAmount = minAmount_;
    }
    
    function  MakeDonation () public payable{
        emit DonationReceived(msg.sender, msg.value);
    }
    
    function NewAttack(string memory disciption, uint duration) public payable returns(uint index) {
        // compares msg.value against minimum amount
        // verify that the description is unique
        // create a new attack object
        // store attack in the list of attacks
        // emit AttackRegistered event
        require(msg.value >= minAmount);
        Attacks[msg.sender].disciption = disciption;
        Attacks[msg.sender].duration = duration;
        Attacks[msg.sender].index= dataIndex.push(msg.sender)-1;
        emit AttackRegistered (msg.sender, disciption, duration, Attacks[msg.sender].index);
        return dataIndex.length-1;
    }
    
    function StartNextAttack() public{
        // verify there's not an attack already running
        // look through list of attack and find the most expensive one (highest stake)
        // calculate end time (current time + duration)
        // mark attack as running
        // emit AttackStarted event
        
        
    }
    
    function FinishAttack() public {
        // verify there's an attack running
        // verify the running attack's end time is < current time
        // secret store information to reveal the private key
        // mark attack as finished
        // emit AttackFinished event
    }
    
    
    function Settle(uint result) public{
        //  result is enum Result (Successful, Failed, Cancel, Violation)
        //  depending on the result, distribute amounts as follows
        //  success: attacker gets staked amount back, + up to their stake from the pool
        //  failed: attacker gets slashed (80% of their stake goes to the rulemakers, remaining 20% is payed back)
        //  violation: attacker loses 100% of their stake
        //  cancel: attacker gets 80% of their stake back, rest remains in the pool
        //  mark attack as settled
        //  emit AttackSettled event
    }
}

