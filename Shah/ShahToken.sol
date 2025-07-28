// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ShahToken is ERC20, Ownable {
    constructor() ERC20("ShahCoin", "SHAH") {
        _mint(msg.sender, 21000000 * 10 ** decimals()); // 21 million SHAH
    }
}

