import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as tenderly from "@tenderly/hardhat-tenderly";

tenderly.setup({ automaticVerifications: true });

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    virtual_optimistic_ethereum: {
      url: "https://virtual.optimism.rpc.tenderly.co/11b6aa15-23c9-49b1-979e-1974aae524de",
      chainId: 10,
      currency: "ETH"
    },
  },
  tenderly: {
    // https://docs.tenderly.co/account/projects/account-project-slug
    project: "cryptonita",
    username: "Kpo",
  },
};

export default config;
