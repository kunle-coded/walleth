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

// User info types

interface Data {
  name: string;
  AccountController: {
    internalAccount: {
      accounts: { [id: string]: Account };
      selectedAccount: string;
    };
    externalAccount?: {
      accounts: { [id: string]: Account };
    };
  };
  AccountTrackerController: object[];
  AddressBookController: object;
  AuthenticationController: object;
  CurrencyController: object;
  GasFeeController: object;
  LoggingController: object;
  MultichainBalancesController: object;
  MultichainRatesController: object;
  NetworkController: object;
  NftController: object;
  NotificationServicesController: object;
  OnboardingController: object;
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

interface Account {
  address: string;
  id: string;
  metadata: AccountMetadata;
  methods: string[];
  options: object;
  type: string;
}

interface Global {
  loginStatus: string;
}

export type { AccountSetup, Config, Session, Data, Account, Global };
