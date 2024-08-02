const hre = require("hardhat");

async function main() {
  // Contract details
  const contractName = "Alpha"; // Updated to your contract's name
  const contractAddress = "0x..."; // Replace with your deployed contract address
  const constructorArguments = ["0xYourInitialOwnerAddressHere"]; // Replace with the actual initial owner address used during deployment

  // Verify the contract on Etherscan
  console.log(`Verifying ${contractName} at ${contractAddress}...`);
  await hre.run("verify:verify", {
    address: contractAddress,
    constructorArguments: constructorArguments,
  });

  console.log(`${contractName} verified successfully!`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// To run the verification: npx hardhat run scripts/VerifyOnEtherscan.js --network sepolia
