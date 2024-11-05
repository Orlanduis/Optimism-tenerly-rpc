import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://virtual.optimism.rpc.tenderly.co/11b6aa15-23c9-49b1-979e-1974aae524de');
const EXPLORER_BASE_URL = "https://virtual.optimism.rpc.tenderly.co/e3548d43-8bfe-49d8-b024-1905cdc98a83";

(async () => {
  const tx = await provider.send('tenderly_setBalance', [
      ['0xc36442b4a4522e871399cd717abdd847ab11fe88', '0x4200000000000000000000000000000000000006'],
      '0xDE0B6B3A7640000',
    ]);

  console.log(`${EXPLORER_BASE_URL}/tx/${tx.hash}`);
})().catch(e => {
  console.error(e);
  process.exitCode = 1;
});
