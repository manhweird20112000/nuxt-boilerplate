import type { Strategy } from '~/utils/wallet/strategies/strategy'
import type { WalletStrategy } from '~/utils/wallet/strategies/wallet'

import { MetamaskStrategy } from '~/utils/wallet/strategies/metamask-strategy'

export class Metamask implements Strategy {
  private ethereum : WalletStrategy = new MetamaskStrategy()

  getEthereum (): Promise<any> {
    return this.ethereum.getEthereum()
  }

  setConnectEthereumStrategy (strategy: WalletStrategy): void {
    this.ethereum = strategy
  }
}
