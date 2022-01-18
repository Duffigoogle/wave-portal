// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves; //declared variable
    uint256 totalHugs; 
    address[] public userAddresses; // array with no fixed size
    Wave[] waves;
    Hug[] hugs;
    uint256 private seed;

    /*created a struct named Wave */
    struct Wave {
        address waver; //The address of the user who waved.
        // string message; //The message the user sent.
        uint256 timestamp; // The timestamp when the user waved.
    }

    /*created a struct named Hug */
    struct Hug {
        address hugger; //The address of the user who waved.
        string message; //The message the user sent.
        uint256 timestamp; // The timestamp when the user waved.
    }

    // This is an address => uint mapping, meaning I can associate an address with a number!.
    // In this case, I'll be storing the address with the last time the user sent a hug or waved at me.
    mapping(address => uint256) public lastSentHugAt;
    mapping(address => uint256) public lastWavedAt;
    

    /*declare wave the event */
    event NewWave(address indexed from, uint256 timestamp);

    /*declare hug the event */
    event NewHug(address indexed from, uint256 timestamp, string message);

    constructor() payable {
        console.log("We have been constructed!");

        // set the initial seed
        seed = (block.timestamp + block.difficulty) % 100;
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s waved", msg.sender);

          //Making sure the current timestamp is at least 15-minutes bigger than the last timestamp we stored.

        require(
            lastWavedAt[msg.sender] + 15 minutes < block.timestamp, "Wait 15m"
        );

        // Updating the current timestamp we have for the user
        lastWavedAt[msg.sender] = block.timestamp;

        /*
         * This is where I actually store the wave data in the array.
         */
         waves.push(Wave(msg.sender, block.timestamp));


        emit NewWave(msg.sender, block.timestamp);
       
    }

    function hug(string memory _message) public {
        totalHugs += 1;
        console.log("%s hugged w/ message %s", msg.sender, _message);

        //Making sure the current timestamp is at least 15-minutes bigger than the last timestamp we stored.

        require(
            lastSentHugAt[msg.sender] + 15 minutes < block.timestamp, "Wait 15m"
        );

        // updaing the current timestamp we I have for the user.
        lastSentHugAt[msg.sender] = block.timestamp;


        /*
         * This is where I actually store the wave data in the array.
         */
         hugs.push(Hug(msg.sender, _message, block.timestamp));

        //Generate a new seed for the next user that sends a hug

         seed = (block.timestamp + block.difficulty + seed) % 100;
        console.log("Random # generated: %d", seed);

        /*
         * Give a 50% chance that the user wins the prize.
         */
        if (seed <= 50) {
            console.log("%s won!", msg.sender);

            /*
             * The same code we had before to send the prize.
             */
            uint256 prizeAmount = 0.0001 ether;
            require(
                prizeAmount <= address(this).balance,
                "Trying to withdraw more money than the contract has."
            );
            (bool success, ) = (msg.sender).call{value: prizeAmount}("");
            require(success, "Failed to withdraw money from contract.");
        }

         emit NewHug(msg.sender, block.timestamp, _message);
    }

    /*
     * I added a function getAllWaves which will return the struct array, waves, to us.
     * This will make it easy to retrieve the waves from our website!
     */
    function getAllWaves() public view returns (Wave[] memory) {
        return waves;
    }


    function getAllHugs() public view returns (Hug[] memory) {
        return hugs;
    }


    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }

    function getTotalHugs() public view returns (uint256) {
        console.log("We have %d total hugs!", totalHugs);
        return totalHugs;
    }

    function senderAddress() public {
        userAddresses.push(msg.sender); //push user adddress into userAddreses array
        console.log("sender address has been added!");
    }

    function getAllSendersAddress() external view returns(address[] memory) {
        console.log("We have %d senders address", userAddresses.length);
        return userAddresses;
    }
}