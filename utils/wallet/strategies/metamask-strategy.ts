import detectEthereumProvider from '@metamask/detect-provider'

import type { WalletStrategy } from '~/utils/wallet/strategies/wallet'

export class MetamaskStrategy implements WalletStrategy {
  getEthereum (): Promise<any> {
    return detectEthereumProvider({
      mustBeMetaMask: true,
      silent: true,
      timeout: 10000
    })
  }
}
