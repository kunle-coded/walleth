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

interface Preference {
  general: string;
}

interface Message {
  general: string;
}

interface Contact extends BaseType {
  address: string;
}

interface Account {
  address: string;
  tokens: Token[];
  nfts: NFT[];
  transactions: Transaction[];
  backupStatus: boolean;
  contacts: Contact[];
  profileIcon: string;
}

interface User {
  password: string;
  mnemonic: string;
  accounts: Account[];
  preferences: Preference[];
  messages: Message[];
  networks: Network[];
  selectedNetwork: string; // NOTE: Might remove thid property
}

export type { AccountOverviewProps, TokenType, User };
