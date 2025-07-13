// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FileStorage {
    struct File { bytes32 hash; string cid; address uploader; uint256 ts; }
    mapping(string => File) public files;
    event Stored(string cid, bytes32 hash, address indexed uploader, uint256 ts);

    function store(string calldata cid, bytes32 hash) external {
        require(files[cid].uploader == address(0), "Already stored");
        files[cid] = File(hash, cid, msg.sender, block.timestamp);
        emit Stored(cid, hash, msg.sender, block.timestamp);
    }

    function verify(string calldata cid, bytes32 hash) external view returns (bool) {
        return files[cid].hash == hash;
    }
}
