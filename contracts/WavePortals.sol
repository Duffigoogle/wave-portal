// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves; //declared variable
    uint256 totalHugs; 
    address[] public userAddresses; // array with no fixed size
    Wave[] waves;
    Hug[] hugs;

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

    /*declare wave the event */
    event NewWave(address indexed from, uint256 timestamp);

    /*declare hug the event */
    event NewHug(address indexed from, uint256 timestamp, string message);

    constructor() {
        console.log("Hello Welcome to Solidity");
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s waved", msg.sender);
        /*
         * This is where I actually store the wave data in the array.
         */
         waves.push(Wave(msg.sender, block.timestamp));

         emit NewWave(msg.sender, block.timestamp);
    }

    function hug(string memory _message) public {
        totalHugs += 1;
        console.log("%s hugged w/ message %s", msg.sender, _message);
        /*
         * This is where I actually store the wave data in the array.
         */
         hugs.push(Hug(msg.sender, _message, block.timestamp));

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