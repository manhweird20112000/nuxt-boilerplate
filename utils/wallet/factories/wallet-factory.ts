import type { Wallet } from '~/utils/wallet/strategies/wallet'

export interface WalletFactory{
  createWallet() : Wallet
}
