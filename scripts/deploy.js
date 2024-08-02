const hre = require("hardhat");

async function main() {
  // Get the deployer's address
  const [deployer] = await hre.ethers.getSigners();

  // Deploy the contract
  const contract = await hre.ethers.deployContract(
    "Mycoin",
    [deployer.address],
    {
      gasLimit: 2000000,
    }
  );

  // Wait for the contract to be deployed
  await contract.waitForDeployment();

  console.log("contract deployed to:", contract.target);

  // Wait a bit before verifying, to make sure the contract is indexed by Etherscan
  console.log("Waiting a bit before verifying...");
  await new Promise((resolve) => setTimeout(resolve, 30000)); // waiting for 30 seconds

  // Verify the contract on Etherscan
  await hre.run("verify:verify", {
    address: contract.target,
    constructorArguments: [deployer.address],
  });

  console.log("contract verified successfully!");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// npx hardhat run scripts/deploy.js --network sepolia
