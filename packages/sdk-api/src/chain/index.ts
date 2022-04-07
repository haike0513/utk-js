export enum DexType {
  EVM = 'evm',
  ModuleB = 'moduleB'
}

export interface ChainOptions {
  chainName: string;
  dexType: string;
  chainId: number;
  networkId: number;
}

export interface ModuleBChainOption extends ChainOptions {
  wss: string[];

}

export interface EvmChainOption extends ChainOptions {
  factoryAddress: string;
  initCodeHash: string;
  multicall2: string;
  routerAddress: string;
  routerV1Address: string;
  rpcUrls: string[];
}
