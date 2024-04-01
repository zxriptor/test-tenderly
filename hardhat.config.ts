import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as tenderly from '@tenderly/hardhat-tenderly';

tenderly.setup({ automaticVerifications: false });

const config: HardhatUserConfig = {
  tenderly: {
    project: '<redacted>',
    username: '<redacted>'
  },
  solidity: "0.8.24",
  networks: {
    staging: {
        url: `https://rpc.vnet.tenderly.co/devnet/mainnet/22be2c34-16ed-4ef7-a7d3-776a4e0555af`,
        accounts: ["f5b9f5dbbd3cb9b4cf3f759f114443565be06feefeb95fe4edc15bc9f7723ece"],
        chainId: 1, //42170,
        //gas: 2000000000000000
    },
  }
};

export default config;
