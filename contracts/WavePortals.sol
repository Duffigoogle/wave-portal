// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves; // declared variable
    address[] public userAddresses; // array with no fixed size

    constructor() {
        console.log("Hello Welcome to Solidity");
    }
    function wave() public {
        totalWaves += 1;
        console.log("%s has waved!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
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