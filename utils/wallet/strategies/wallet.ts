// interface IAddToken{
//    'type': string,
//    'options': {
//       'address': string,
//       'symbol': string,
//       'decimals': number,
//       'image': string
//    }
// }
//
// interface IRequestSwitchChain{
//    'chainId': string
// }
//
// interface IAddChain{
//    'chainId': string,
//      'chainName': string,
//      'rpcUrls': string[],
//      'iconUrls': string[],
//      'nativeCurrency': {
//       'name': string,
//         'symbol': string,
//         'decimals': number
//    },
//    'blockExplorerUrls': string[]
// }
export interface WalletStrategy {
   getEthereum(): Promise<any>
   // getAccounts(): Promise<string[]>
   // requestAccounts(): Promise<void>
   // addToken(params: IAddToken): Promise<void>
   // addChain(params: IAddChain): Promise<void>
   // switchChain(params: IRequestSwitchChain) : Promise<void>
}
