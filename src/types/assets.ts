import React from "react";

interface AccountOverviewProps {
  filterRef: React.RefObject<HTMLDivElement>;
  isTop: boolean;
}

interface BaseType {
  name: string;
}

type TokenType = {
  id: number;
  name: string;
  description: string;
  logoUrl: string;
};

interface NFT extends BaseType {
  name: string;
}
interface Token extends BaseType {
  id: number;
  description: string;
  iconUrl: string;
}

interface Network extends BaseType {
  id: string;
  selected: boolean;
}
interface Transaction extends BaseType {
  status: string;
}

interface Preferences {
  general: object;
  advanced: object;
  security: object;
  notifications: boolean;
  experimental: object;
}

interface Message {
  general: string;
}

interface Address extends BaseType {
  "": string;
  chainId: string;
  memo: string;
}

interface AddressBook {
  "*": Address;
  0x1: Address;
  0xaa367: Address;
}

interface Metadata {
  importTime: number;
  keyring: string;
  lastSelected: number;
  name: string;
  nameLastUpdated: string;
  methods: string[];
}

interface Account {
  "": string;
  address: string;
  tokens: Token[];
  nfts: NFT[];
  transactions: Transaction[];
  backupStatus: boolean;
  addressBooks: AddressBook[];
  profileIcon: string; // NOTE might remove
}

interface User {
  name: string;
  isLogin: boolean;
  mnemonic: string;
  accounts: Account[];
  preferences: Preferences[];
  messages: Message[];
  networks: Network[];
  selectedNetwork: string; // NOTE: Might remove this property
}

// {
//   "0x805F713677b5752f5Cd2A42bE9e97f977B022B05": {
//       "address": "0x805F713677b5752f5Cd2A42bE9e97f977B022B05",
//       "chainId": "0xaa36a7",
//       "isEns": false,
//       "memo": "",
//       "name": ""
//   }
// }

export type { AccountOverviewProps, TokenType, User, Address, AddressBook };
