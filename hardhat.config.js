require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "base",
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  networks: {
    base: {
      url: `https://base-mainnet.core.chainstack.com/ee21cf364e3ea90b07cfe45d2a7f2728`,
      accounts: [PRIVATE_KEY],
    },
  },
};
