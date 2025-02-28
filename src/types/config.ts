interface AccountSetup {
  stepCounter: number;
  setupSteps: { previousStep: string; currentStep: string };
  stepRecord: string[];
  password: string;
  isSkipped: boolean;
  isSkipOptions: boolean;
  isImport: boolean;
}

interface Authentication {
  isSignedIn: boolean;
  sessionData: object;
  profile: object;
}

interface Onboarding {
  completedOnboarding: boolean;
  firstTimeFlowType: string;
  seedPhraseBackedUp: boolean;
}

// User info types

interface Data {
  name: string;
  AccountController: {
    internalAccount: {
      accounts: { [id: string]: AccountType };
      selectedAccount: string;
    };
    externalAccount?: {
      accounts: { [id: string]: AccountType };
    };
  };
  AccountTrackerController: object[];
  AddressBookController: {
    addressBook: AddressBook;
  };
  AuthenticationController: object;
  CurrencyController: object;
  GasFeeController: object;
  LoggingController: object;
  MultichainBalancesController: object;
  MultichainRatesController: object;
  NetworkController: NetworkType;
  NftController: object;
  NotificationServicesController: object;
  OnboardingController: Onboarding;
  PermissionController: object;
  PreferencesController: object;
  SelectedNetworkController: object;
  TokenBalancesController: object;
  TokenListController: object;
  TokenRatesController: object;
  TokensController: object;
  TransactionController: object;
  firstTimeInfo: object;
}

interface Metadata {
  identifierId: ArrayBuffer;
  profileId: ArrayBuffer;
}

interface Config {
  data: ArrayBuffer;
  id: string;
  metadata: Metadata;
}

interface Session {
  id: string;
  isFirstWallethSetup: boolean;
  timestamp: number;
}

// Account types
interface AccountMetadata {
  importTime: number;
  keyring: string;
  lastSelected: number;
  name: string;
  nameLastUpdated: string;
}

interface AccountType {
  address: string;
  id: string;
  metadata: AccountMetadata;
  methods: string[];
  options: object;
  type: string;
}

interface UserConfig {
  accounts: AccountType[];
  selectedAccount: AccountType;
  addressBook: Address[];
}

// Receiver account type
interface ReceipientAccount {
  id: string;
  address: string;
  name: string;
}

// Address Book type
interface Address {
  [address: string]: string;
  chainId: string;
  id: string;
  memo: string;
  name: string;
}

interface AddressBook {
  [chainId: string]: { [address: string]: Address };
}

// Network type
interface RpcEndpoint {
  networkClientId: string;
  type: string;
  url: string;
}

interface Network {
  blockExplorerUrls: string[];
  chainId: string;
  defaultBlockExplorerUrlIndex: number;
  defaultRpcEndpointIndex: number;
  name: string;
  nativeCurrency: string;
  rpcEndpoints: RpcEndpoint[];
}

interface NetworkType {
  networkConfigurationByChainId: {
    [chainId: string]: Network;
  };
  networksMetadata: object;
  selectedNetwork: string;
}

interface Global {
  loginStatus: string;
}

export type {
  AccountSetup,
  Config,
  Session,
  Data,
  AccountType,
  Onboarding,
  AddressBook,
  Address,
  UserConfig,
  ReceipientAccount,
  Network,
  Global,
};
