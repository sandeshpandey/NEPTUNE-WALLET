import { UnsupportedChainIdError } from '@web3-react/core';
import { NoEthereumProviderError } from '@web3-react/injected-connector';

export function getErrorMessage(error: Error) {
  console.log(error);

  if (error instanceof NoEthereumProviderError) {
    return 'No Ethereum browser extension detected, install MetaMask on desktop.';
  } else if (error instanceof UnsupportedChainIdError) {
    return "You're connected to an unsupported network.";
  } else {
    console.error(error);
    return 'An unknown error occurred. Check the console for more details.';
  }
}
