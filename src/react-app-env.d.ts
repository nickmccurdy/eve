/// <reference types="react-scripts" />
import { Web3EthereumProvider } from "web3-providers";
declare global {
  const ethereum: Web3EthereumProvider & { enable(): Promise<string[]> };
}
