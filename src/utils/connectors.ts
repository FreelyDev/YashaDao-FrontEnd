import { InjectedConnector } from "@web3-react/injected-connector";
import { NetworkConnector } from "@web3-react/network-connector";
import { currentNetwork } from "./index"
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

export const networkConnector = new NetworkConnector({
  urls: {
    1: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    3: "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    4: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    42: "https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    250: "https://rpc.ftm.tools",
    137: "https://rpc-mainnet.maticvigil.com",
    56: "https://bscrpc.com",
  },
  defaultChainId: parseInt(currentNetwork)
})

export const injectedConnector = new InjectedConnector({
  supportedChainIds: [parseInt(currentNetwork)],
});

export const walletConnector = new WalletConnectConnector({
  rpc: {
    1: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    3: "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    4: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    42: "https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    250: "https://rpc.ftm.tools",
    137: "https://rpc-mainnet.maticvigil.com",
    56: "https://bscrpc.com",
  },
  chainId: parseInt(currentNetwork),
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true
})

