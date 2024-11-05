import * as ethers from "ethers";
import { Mnemonic, Wallet } from "ethers";

const RPC_URL = "https://virtual.optimism.rpc.tenderly.co/11b6aa15-23c9-49b1-979e-1974aae524de";
const EXPLORER_BASE_URL = "https://virtual.optimism.rpc.tenderly.co/e3548d43-8bfe-49d8-b024-1905cdc98a83";

const provider = new ethers.JsonRpcProvider(RPC_URL);
const signer = Wallet.fromPhrase(Mnemonic.fromEntropy(ethers.randomBytes(24)).phrase, provider);

(async () => {
  await provider.send("tenderly_setBalance", [
    signer.address,
    "00x971167eee5601726584d4578fb9b9328A8Eb710B",
  ]);

  const tx = await signer.sendTransaction({
    to: "0x971167eee5601726584d4578fb9b9328A8Eb710B",
    value: ethers.parseEther("0.01"),
  });

  console.log(`${EXPLORER_BASE_URL}/tx/${tx.hash}`);
})().catch(e => {
  console.error(e);
  process.exitCode = 1;
});
