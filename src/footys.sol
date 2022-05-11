// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.7;

contract footys {
    address public owner;
    uint256 public counter;

    constructor() {
        counter = 0;
        owner = msg.sender;
    }

    struct footy {
        address footySender;
        uint256 id;
        string footyTxt;
        string footyImg;
    }

    event footyCreated(
        address footySender,
        uint256 id,
        string footyTxt,
        string footyImg
    );

    mapping(uint256 => footy) Footys;

    function addFooty(string memory _footyTxt, string memory _footyImg)
        public
        payable
    {
        require(msg.value == (0.1 ether), "Please submit 0.1 Matic");
        footy storage newFooty = Footys[counter];

        newFooty.footyTxt = _footyTxt;
        newFooty.footyImg = _footyImg;
        newFooty.footySender = msg.sender;
        newFooty.id = counter;

        emit footyCreated(msg.sender, counter, _footyTxt, _footyImg);

        counter++;

        payable(owner).transfer(msg.value);
    }

    function getFooty(uint256 _id)
        public
        view
        returns (
            string memory,
            string memory,
            address
        )
    {
        require(_id < counter, "The footy doesn't exist");

        footy storage f = Footys[_id];
        return (f.footyTxt, f.footyImg, f.footySender);
    }
}
