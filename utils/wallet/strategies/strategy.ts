import type { WalletStrategy } from '~/utils/wallet/strategies/wallet'

export interface Strategy{
  getEthereum(): Promise<any>
  setConnectEthereumStrategy(strategy: WalletStrategy): void
}
