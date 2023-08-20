import type { WalletFactory } from '~/utils/wallet/factories/wallet-factory'
import type { Strategy } from '~/utils/wallet/strategies/strategy'

import { Metamask } from '~/utils/wallet/models/metamask'

export class MetamaskFactory implements WalletFactory {
  createWallet (): Strategy {
    return new Metamask()
  }
}
