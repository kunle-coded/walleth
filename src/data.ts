import { TokenType } from "./types/assetsTypes";

const networks = [
  {
    id: 0,
    name: "Arbitrum One",
    iconPath: "src/assets/images/arbitrum-logo.svg",
  },
  {
    id: 1,
    name: "Avalanche Network C-Chain",
    iconPath: "src/assets/images/avalanche-logo.svg",
  },
  {
    id: 2,
    name: "Base Mainnet",
    iconPath: "src/assets/images/base-logo.svg",
  },
  {
    id: 3,
    name: "Binance Smart Chain",
    iconPath: "src/assets/images/bnb-logo.svg",
  },
  {
    id: 4,
    name: "OP Mainnet",
    iconPath: "src/assets/images/optimism-logo.svg",
  },
  {
    id: 5,
    name: "Polygon Mainnet",
    iconPath: "src/assets/images/polygon-logo.svg",
  },
  {
    id: 6,
    name: "zkSync Era Mainnet",
    iconPath: "src/assets/images/zk-sync-logo.svg",
  },
];

const tokens: TokenType[] = [
  {
    id: 0,
    name: "DAI",
    description: "Dai Stablecoin",
    logoUrl: "0x6b175474e89094c44da98b954eedeac495271d0f.png",
  },
  {
    id: 1,
    name: "USDC",
    description: "USDC",
    logoUrl: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
  },
  {
    id: 2,
    name: "USDT",
    description: "Tether USD",
    logoUrl: "0xdac17f958d2ee523a2206206994597c13d831ec7.png",
  },
  {
    id: 3,
    name: "WBTC",
    description: "Wrapped BTC",
    logoUrl: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.png",
  },
  {
    id: 4,
    name: "WETH",
    description: "Wrapped Ether",
    logoUrl: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png",
  },
  {
    id: 5,
    name: "FDUSD",
    description: "First Digital USD",
    logoUrl: "0xc5f0f7b66764f6ec8c8dff7ba683102295e16409.png",
  },
  {
    id: 6,
    name: "PEPE",
    description: "Pepe",
    logoUrl: "0x6982508145454ce325ddbe47a25d4ec3d2311933.png",
  },
  {
    id: 7,
    name: "LINK",
    description: "Chainlink Token",
    logoUrl: "0x514910771af9ca656af840dff83e8264ecf986ca.png",
  },
  {
    id: 8,
    name: "BNB",
    description: "Binance Coin",
    logoUrl: "0xb8c77482e45f1f44de1745f52c74426c631bdd52.png",
  },
  {
    id: 9,
    name: "VIRTUAL",
    description: "Virtuals Protocol",
    logoUrl: "0x44ff8620b8ca30902395a7bd3f2407e1a091bf73.png",
  },
  {
    id: 10,
    name: "CBK",
    description: "Cobak",
    logoUrl: "0xd85a6ae55a7f33b0ee113c234d2ee308edeaf7fd.png",
  },
  {
    id: 11,
    name: "BGB",
    description: "Bitget Token",
    logoUrl: "0x54d2252757e1672eead234d27b1270728ff90581.png",
  },
  {
    id: 12,
    name: "AAVE",
    description: "Aave",
    logoUrl: "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9.png",
  },
  {
    id: 13,
    name: "ENA",
    description: "Ethena",
    logoUrl: "0x57e114b691db790c35207b2e685d4a43181e6061.png",
  },
  {
    id: 14,
    name: "AQT",
    description: "Alpha Quark",
    logoUrl: "0x2a9bdcff37ab68b95a53435adfd8892e86084f93.png",
  },
  {
    id: 15,
    name: "SHIB",
    description: "Shiba Inu",
    logoUrl: "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce.png",
  },
  {
    id: 16,
    name: "CBBTC",
    description: "Coinbase Wrapped BTC",
    logoUrl: "0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf.png",
  },
  {
    id: 17,
    name: "MOC",
    description: "Mossland",
    logoUrl: "0x865ec58b06bf6305b886793aa20a2da31d034e68.png",
  },
  {
    id: 18,
    name: "WLD",
    description: "Worldcoin",
    logoUrl: "0x163f8c2467924be0ae7b5347228cabf260318753.png",
  },
  {
    id: 19,
    name: "ARB",
    description: "Arbitrum",
    logoUrl: "0xb50721bcf8d664c30412cfbc6cf7a15145234ad1.png",
  },
  {
    id: 20,
    name: "CGPT",
    description: "ChainGPT",
    logoUrl: "0x25931894a86d47441213199621f1f2994e1c39aa.png",
  },
  {
    id: 21,
    name: "GALA",
    description: "GALA",
    logoUrl: "0xd1d2eb1b1e90b638588728b4130137d262c87cae.png",
  },
  {
    id: 22,
    name: "NEAR",
    description: "NEAR",
    logoUrl: "0x85f17cf997934a597031b2e18a9ab6ebd4b9f6a4.png",
  },
  {
    id: 23,
    name: "UNI",
    description: "Uniswap",
    logoUrl: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.png",
  },
  {
    id: 24,
    name: "CRV",
    description: "Curve DAO Token",
    logoUrl: "0xd533a949740bb3306d119cc777fa900ba034cd52.png",
  },
  {
    id: 25,
    name: "BIO",
    description: "Bio Protocol",
    logoUrl: "0xcb1592591996765ec0efc1f92599a19767ee5ffa.png",
  },
  {
    id: 26,
    name: "FET",
    description: "Fetch",
    logoUrl: "0xaea46a60368a7bd060eec7df8cba43b7ef41ad85.png",
  },
  {
    id: 27,
    name: "TON",
    description: "TON Community",
    logoUrl: "0x6a6c2ada3ce053561c2fbc3ee211f23d9b8c520a.png",
  },
  {
    id: 28,
    name: "ONDO",
    description: "Ondo",
    logoUrl: "0xfaba6f8e4a5e8ab82f62fe7c39859fa577269be3.png",
  },
  {
    id: 29,
    name: "LDO",
    description: "Lido DAO Token",
    logoUrl: "0x5a98fcbea516cf06857215779fd812ca3bef1b32.png",
  },
];

export { networks, tokens };
