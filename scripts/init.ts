import { ethers, tenderly } from "hardhat";

async function main() {
    //const myNFTFactory = await ethers.getContractFactory("myNFTMock");
    const myNFTFactory = await ethers.getContractFactory("MyNFT");
    const myNFT = await myNFTFactory.deploy();
    await myNFT.deployed();

    console.log(`myNFTMock deployed to ${myNFT.address}`);

    // await tenderly.verify({
    //     name: "myNFTMock",
    //     address: myNFT.address
    // });
    // console.log("myNFTMock has been sucessfully verified");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
