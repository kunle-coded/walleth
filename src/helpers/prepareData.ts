import {
  AccountType,
  Address,
  AddressBook,
  Data,
  Network,
  Onboarding,
} from "../types/config";

export default function prepareData(
  address: string,
  seedBackupStatus: boolean
): Data {
  const account: AccountType = {
    address,
    id: crypto.randomUUID(),
    metadata: {
      importTime: Date.now(),
      keyring: "HD key tree",
      lastSelected: Date.now(),
      name: "Account 1",
      nameLastUpdated: Date.now().toLocaleString(),
    },
    methods: [],
    options: {},
    type: "eip155:eoa",
  };

  const onboarding: Onboarding = {
    completedOnboarding: true,
    firstTimeFlowType: "create",
    seedPhraseBackedUp: seedBackupStatus,
  };

  const mainnet: Network = {
    blockExplorerUrls: ["https://etherscan.io"],
    chainId: "0x1",
    defaultBlockExplorerUrlIndex: 0,
    defaultRpcEndpointIndex: 0,
    name: "Ethereum Mainnet",
    nativeCurrency: "ETH",
    rpcEndpoints: [
      {
        networkClientId: "mainnet",
        type: "infura",
        url: "https://mainnet.infura.io/v3/{infuraProjectId}",
      },
    ],
  };
  const sepolia: Network = {
    blockExplorerUrls: ["https://sepolia.etherscan.io"],
    chainId: "0xaa36a7",
    defaultBlockExplorerUrlIndex: 0,
    defaultRpcEndpointIndex: 0,
    name: "Sepolia",
    nativeCurrency: "SepoliaETH",
    rpcEndpoints: [
      {
        networkClientId: "sepolia",
        type: "infura",
        url: "https://sepolia.infura.io/v3/{infuraProjectId}",
      },
    ],
  };
  const lineaSepolia: Network = {
    blockExplorerUrls: ["https://sepolia.lineascan.build"],
    chainId: "0xe705",
    defaultBlockExplorerUrlIndex: 0,
    defaultRpcEndpointIndex: 0,
    name: "Linea Sepolia",
    nativeCurrency: "LineaETH",
    rpcEndpoints: [
      {
        networkClientId: "linea-sepolia",
        type: "infura",
        url: "https://linea-sepolia.infura.io/v3/{infuraProjectId}",
      },
    ],
  };
  const lineaMainnet: Network = {
    blockExplorerUrls: ["https://lineascan.build"],
    chainId: "0xe708",
    defaultBlockExplorerUrlIndex: 0,
    defaultRpcEndpointIndex: 0,
    name: "Linea Mainnet",
    nativeCurrency: "ETH",
    rpcEndpoints: [
      {
        networkClientId: "linea-mainnet",
        type: "infura",
        url: "https://linea-mainnet.infura.io/v3/{infuraProjectId}",
      },
    ],
  };

  const data: Data = {
    name: "data",
    AccountController: {
      internalAccount: {
        accounts: { [account.id]: account },
        selectedAccount: account.id,
      },
    },
    AccountTrackerController: [
      {
        id: account.id,
        name: account.metadata.name,
        createdAt: account.metadata.importTime,
        type: account.type,
      },
    ],
    AddressBookController: {
      addressBook: {
        ["*"]: {},
        [mainnet.chainId]: {},
        [sepolia.chainId]: {},
      },
    },
    AuthenticationController: {},
    CurrencyController: {},
    GasFeeController: {},
    LoggingController: {},
    MultichainBalancesController: {},
    MultichainRatesController: {},
    NetworkController: {
      networkConfigurationByChainId: {
        [mainnet.chainId]: mainnet,
        [sepolia.chainId]: sepolia,
        [lineaSepolia.chainId]: lineaSepolia,
        [lineaMainnet.chainId]: lineaMainnet,
      },
      networksMetadata: {},
      selectedNetwork: mainnet.rpcEndpoints[0].networkClientId,
    },
    NftController: {},
    NotificationServicesController: {},
    OnboardingController: onboarding,
    PermissionController: {},
    PreferencesController: {},
    SelectedNetworkController: {},
    TokenBalancesController: {},
    TokenListController: {},
    TokenRatesController: {},
    TokensController: {},
    TransactionController: {},
    firstTimeInfo: { date: Date.now(), version: "0.0.0" },
  };

  return data;
}
