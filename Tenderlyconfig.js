import { createWalletClient, http, parseEther } from "viem";
import { TSetBalanceRpc, virtual_optimistic_ethereum } from "./tenderly.config"
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";

const account = privateKeyToAccount(generatePrivateKey());
const client = createWalletClient({
  account,
  chain: virtual_optimistic_ethereum,
  transport: http(virtual_optimistic_ethereum.rpcUrls.default.http[0]),
});

(async () => {
  await client.request<TSetBalanceRpc>({
    method: "tenderly_setBalance",
    params: [
      [account.address],
      "0x971167eee5601726584d4578fb9b9328A8Eb710B",
    ],
  });

  const txHash = await client.sendTransaction({
    to: "0x971167eee5601726584d4578fb9b9328A8Eb710B",
    value: parseEther("0.01"),
  });

  console.log(`${virtual_optimistic_ethereum.blockExplorers.default.url}/tx/${txHash}`);
})().catch(e => {
  console.error(e);
  process.exitCode = 1;
});
