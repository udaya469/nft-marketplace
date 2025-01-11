// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

//Internal Import For NFT OPENZIPLINE
import "@openzeppelin/contracts/utils/Counters.sol"; //using as a
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URISrora";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract NFTMarketplace is ERC721URIStorage {
    using Couters for Counters.Counter;

    Counters.Couner private _tokenIds;
    Counters.Counter private _tokenSold;

    uint25 listngPrice=0.0015 ether;

    address payable owner;

    mapping(unit256 => MarketItem) private idMarketItem;

    struct MarketItem {
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    event idMarketItemCreated(
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    modifier onlyOwner{
        require(
            msg.sender == owner, 
            "only owner of the marketplace can change the listing price"
        );
        ;
    }

    constructor() ERC721("NFT Metavarse Token", "MYNFT"){
        owner == payable(msg.sender);
    }

    function updateListingPrice(uinit256 _listingPrice) 
    public 
    payable
    onlyOwner
    {
        listngPrice = _listingPrice;
    }

    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }

    // Let create "CEATE NFT TOKEN FUNCTION"

    function createToken(string memory tokenURI, uint256 price) 
        public 
        payable 
        returns (uint256) 
        {
            _tokenIds.ncrement();

            uint256 newTokenId = _tokenIds.current();

            _mint(msg.sender, newTokenId);
            _setTokenURI(newTokenId, tokenURI);

            createMarketItem(newTokenId, price);

            return newTokenId;
    }

    //CREARTING MARKET ITEMS

    function createMarketItem(uint256 tokenId, uint256 price) private{
        require(price > 0, "Price must be atlest 1");
        require(
            msg.value == listingPrice, 
            "Price must be equal to listing price"
        );

        idMarketItem[tokenId] = MarketItem(
            tokenId,
            payable(msg.sender),
            payable(address(this)),
            price,
            false
        );

        _transfer(msg.sender, address(this), tokenId);

        emit idMarketItemCreated(
            tokenID, 
            msg.sender , 
            address(this),
            price, 
            false
        );
    }
}

        