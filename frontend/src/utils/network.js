// frontend/src/utils/network.js
export const GANACHE_PARAMS = {
  chainId:   '0x539',             // 1337 hex
  chainName: 'Ganache Local',
  rpcUrls:   ['http://127.0.0.1:8545'],
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
};

export async function ensureGanacheNetwork() {
  if (!window.ethereum) return;
  const current = await window.ethereum.request({ method: 'eth_chainId' });
  if (current === GANACHE_PARAMS.chainId) return;

  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: GANACHE_PARAMS.chainId }]
    });
  } catch (switchError) {
    if (switchError.code === 4902) {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [GANACHE_PARAMS]
      });
    } else {
      console.error('Could not switch to Ganache', switchError);
    }
  }
}

