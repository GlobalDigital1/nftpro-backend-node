// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";


contract nftproERC1155 is ERC1155, Ownable, ERC1155Burnable, ERC1155Supply {
    
    mapping (uint256 => string) public CID;
    string public name;
    string public symbol;

    constructor(
        string memory _name,
        string memory _symbol
    ) ERC1155 ("") {
        name = _name;
        symbol = _symbol;
        
    }

    function uri(uint256 id) override public view returns (string memory) {
        require(exists(id), "token doesn't exist");
        return string(abi.encodePacked(
        "https://gateway.pinata.cloud/ipfs/",
        CID[id]
        ));
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function mint(address account, uint256 id, uint256 amount, bytes memory data, string memory tokenCID)
        public
        onlyOwner
    {   
        require(!exists(id), "token already exists");
        _mint(account, id, amount, data);
        CID[id] = tokenCID;
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data, string[] memory tokenCIDs)
        public
        onlyOwner
    {
        _mintBatch(to, ids, amounts, data);
        for (uint i = 0; i < ids.length; i++){
            CID[ids[i]]=tokenCIDs[i];
        }
    }

    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        internal
        override(ERC1155, ERC1155Supply)
    {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }
}