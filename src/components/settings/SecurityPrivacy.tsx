import { useState } from "react";
import SettingsItemToggle from "../../ui/SettingsItemToggle";
import ToggleButton from "../../ui/ToggleButton";
import SettingsNetworkItemToggle from "../../ui/SettingsNetworkItemToggle";
import NetworkAvatar from "../../ui/NetworkAvatar";

type NetworkType = {
  id: number;
  networkName: string;
  iconLink: string;
  website: string;
  url: string;
};

const networks: NetworkType[] = [
  {
    id: 0,
    networkName: "Ethereum Mainnet",
    iconLink: "src/assets/images/eth-logo.svg",
    website: "Etherscan.io",
    url: "https://etherscan.io/",
  },
  { id: 1, networkName: "Localhost 8545", iconLink: "", website: "", url: "" },
  {
    id: 2,
    networkName: "Sepolia",
    iconLink: "",
    website: "Etherscan.io",
    url: "https://etherscan.io/",
  },
  {
    id: 3,
    networkName: "Linea Sepolia",
    iconLink: "src/assets/images/linea-testnet-logo.png",
    website: "Lineascan.build",
    url: "https://lineascan.build/",
  },
  {
    id: 4,
    networkName: "Linea Mainnet",
    iconLink: "src/assets/images/linea-logo.svg",
    website: "Lineascan.build",
    url: "https://lineascan.build/",
  },
];

function SecurityPrivacy() {
  const [isToggled, setIsToggled] = useState(false);
  const [isInputFocus, setIsInputFocus] = useState(false);

  function handleFocus() {
    setIsInputFocus(true);
  }

  function handleBlur() {
    setIsInputFocus(false);
  }
  function handleToggle() {
    setIsToggled((prevState) => !prevState);
  }

  return (
    <div className="p-4 pt-0">
      <SettingsItemToggle
        title="Basic functionality"
        details="Walleth offers basic features like token details and gas settings through internet services. When you use internet services, your IP address is shared, in this case with Wallet. This is just like when you visit any website. Walleth uses this data temporarily and never sells your data. You can use a VPN or turn off these services, but it may affect your Wallet experience. To learn more read our"
        showLink
        linkUrl=""
        linkText="Learn more"
      />

      <div className="mt-4">
        <span className=" text-lg font-bold text-secondary-900">Security</span>
      </div>
      <div className="font-semibold text-secondary-600">
        Secret Recovery Phrase
      </div>

      <div className="p-4">
        <button className="inline-flex justify-center items-center h-[48px] px-4 p-0 relative align-middle select-none box-border text-sm leading-snug md:text-[1rem] md:leading-6 font-semibold rounded-full border-none appearance-none bg-brand-500 text-white cursor-pointer hover:shadow-[0_2px_8px_0_rgba(100,108,255,0.2)]">
          Reveal Secret Recovery Phrase
        </button>
      </div>

      <div className="mt-4">
        <span className="font-semibold text-secondary-600">
          Security alerts
        </span>
      </div>
      <div className="p-4 pt-0">
        <SettingsItemToggle
          title=""
          details="This feature alerts you to malicious or unusual activity by actively reviewing transaction and signature requests."
          showLink
          linkUrl=""
          linkText="Learn more"
        />
      </div>
      <div className="mt-4">
        <span className=" text-lg font-bold text-secondary-900">Privacy</span>
      </div>
      <div className="p-4 pt-0">
        <div>
          <SettingsItemToggle
            title="Profile Sync"
            details="Creates a profile that Walleth uses to sync some settings among your devices. This is required to get notifications."
            showLink
            linkUrl=""
            linkText="Learn how we protect your privacy"
            showPeriod
          />
        </div>
      </div>
      <div className="">
        <span className="font-semibold text-secondary-600">Alerts</span>
      </div>
      <div className="p-4 pt-0">
        <SettingsItemToggle
          title="Use phishing detection"
          details="Display a warning for phishing domains targeting Ethereum users"
        />
      </div>
      <div className="">
        <span className="font-semibold text-secondary-600">
          Smart contracts
        </span>
      </div>
      <div className="p-4 pt-0">
        <SettingsItemToggle
          title="Decode smart contracts"
          details="To improve user experience, we customize the activity tab with messages based on the smart contracts you interact with. Walleth uses a service called 4byte.directory to decode data and show you a version of a smart contract that's easier to read. This helps reduce your chances of approving malicious smart contract actions, but can result in your IP address being shared."
        />
      </div>
      <span className="font-semibold text-secondary-600">Transactions</span>

      <div className="p-4">
        <div className="flex flex-row justify-between gap-4 p-0 pt-4">
          <div className="flex flex-col min-w-0">
            <span>Show balance and token price checker</span>
            <div className="text-secondary-500 text-[0.895rem] leading-[140%]">
              <span>
                We use{" "}
                <a
                  href=""
                  className="inline-flex justify-center items-center p-0 px-0 text-brand-500 h-auto decoration-[none] align-top bg-transparent relative cursor-pointer select-none break-words"
                >
                  CoinGecko
                </a>{" "}
                and{" "}
                <a
                  href=""
                  className="inline-flex justify-center items-center p-0 px-0 text-brand-500 h-auto decoration-[none] align-top bg-transparent relative cursor-pointer select-none break-words"
                >
                  CryptoCompare
                </a>{" "}
                APIs to display your balance and token price.
                <a
                  href=""
                  className="inline-flex justify-center items-center p-0 px-0 text-brand-500 h-auto decoration-[none] align-top bg-transparent relative cursor-pointer select-none break-words"
                >
                  Privacy policy
                </a>
              </span>
            </div>
          </div>
          <div className="flex flex-col max-w-[300px] mt-2">
            <ToggleButton
              isToggled={isToggled}
              onToggle={handleToggle}
              toggleStatus
            />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-secondary-900 text-sm leading-snug font-semibold md:text-[1rem] md:leading-6">
            Show incoming transactions
          </p>
          <p className="text-secondary-500 text-[0.895rem] leading-[140%]">
            This relies on different third-party APIs for each network, which
            expose your Ethereum address and your IP address.
          </p>
          {/* network items */}
          {networks.map((network) => (
            <SettingsNetworkItemToggle
              key={network.id}
              networkName={network.networkName}
              iconUrl={network.iconLink}
              linkText={network.website}
              linkUrl={network.url}
            />
          ))}
        </div>
        <SettingsItemToggle
          title="Estimate balance changes"
          details="Turn this on to estimate balance changes of transactions and signatures before you confirm them. This doesn't guarantee their final outcome."
          showLink
          linkUrl=""
          linkText="Learn more"
        />
      </div>

      <span className="font-semibold text-secondary-600">Network provider</span>

      <div className="p-4">
        <div className="flex flex-col gap-4 p-0 pt-4">
          <div className="flex flex-col min-w-0">
            <span>Choose your network</span>
            <div className="text-secondary-500 text-[0.895rem] leading-[140%]">
              <span>
                We use Infura as our remote procedure call (RPC) provider to
                offer the most reliable and private access to Ethereum data we
                can. You can choose your own RPC, but remember that any RPC will
                receive your IP address and Ethereum wallet to make
                transactions. Read our{" "}
                <a
                  href=""
                  className="inline-flex justify-center items-center p-0 px-0 text-brand-500 h-auto decoration-[none] align-top bg-transparent relative cursor-pointer select-none break-words"
                >
                  Privacy policy
                </a>{" "}
                to learn more about how Infura handles data.
              </span>
            </div>
          </div>
          <div className="flex flex-col max-w-[300px] mt-4">
            <button className="inline-flex justify-center items-center h-[40px] px-4 p-0 relative align-middle select-none box-border text-sm leading-snug md:text-[1rem] md:leading-6 font-semibold rounded-full border-none appearance-none bg-brand-500 text-white cursor-pointer hover:shadow-[0_2px_8px_0_rgba(100,108,255,0.2)]">
              Add custom network
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-0 pt-4">
          <SettingsItemToggle
            title="Network details check"
            details="Walleth uses a third-party service called chainid.network to show accurate and standardized network details. This reduces your chances of connecting to malicious or incorrect network. When using this feature, your IP address is exposed to chainid.network."
          />
        </div>
        <div className="flex flex-col gap-4 p-0 pt-4">
          <SettingsItemToggle
            title="IPFS gateway"
            details="Walleth uses third-party services to show images of your NFTs stored on IPFS, display information related to ENS addresses entered in your browser's address bar, and fetch icons for different tokens. Your IP address may be exposed to these services when you’re using them."
          />

          <div className="flex flex-col min-w-0">
            <span>Add your preferred IPFS gateway</span>

            <div className="flex flex-col max-w-[300px] mt-2">
              <div className="inline-flex flex-col w-full min-w-0 m-0 mt-2 mb-1 p-0 border-0 relative align-top">
                <div
                  className={`flex items-center text-secondary-900 w-full h-[48px] py-0 px-4 bg-white rounded-lg text-sm border border-solid cursor-text relative box-border tracking-[0.00938em] leading-[1.1876em] hover:border-brand-500 ${
                    isInputFocus
                      ? "border-brand-500"
                      : "border-[rgba(187,192,197,0.9)]"
                  }`}
                >
                  <input
                    type="text"
                    placeholder="dweb.link"
                    dir="auto"
                    className="block w-full min-w-0 h-[1.1876em] m-0 pb-[7px] pt-[3px] bg-none box-content text-secondary-900 focus:outline-none placeholder:text-secondary-900"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* next */}
          <div className="flex flex-row justify-between gap-4 p-0 pt-4">
            <div>
              Show ENS domains in address bar
              <div className="text-secondary-500 text-[0.895rem] leading-[140%]">
                <span>
                  Walleth lets you see ENS domains right in your browser's
                  address bar. Here's how it works:
                </span>
                <ul
                  className="ps-4 my-4 list-none"
                  style={{ listStyle: "circle" }}
                >
                  <li className="text-inherit">
                    Walleth checks with Ethereum's ENS contract to find the code
                    connected to the ENS name.
                  </li>
                  <li className="text-inherit">
                    If the code links to IPFS, you can see the content
                    associated with it (usually a website).
                  </li>
                </ul>
                <span>
                  Keep in mind that using this feature exposes your IP address
                  to IPFS third-party services.
                </span>
              </div>
            </div>
            <div className="flex flex-col max-w-[300px] mt-2">
              <ToggleButton
                isToggled={isToggled}
                onToggle={handleToggle}
                toggleStatus
              />
            </div>
          </div>
        </div>
      </div>
      {/* next */}
      <span className="font-semibold text-secondary-600">
        Token autodetection
      </span>

      <div className="p-4">
        <SettingsItemToggle
          title="Autodetect tokens"
          details="We use third-party APIs to detect and display new tokens sent to your wallet. Turn off if you don’t want the app to automatically pull data from those services."
          showLink
          linkUrl=""
          linkText="Learn more"
        />
        <SettingsItemToggle
          title="Batch account balance requests"
          details="Get faster balance updates by batching account balance requests. This lets us fetch your account balances together, so you get quicker updates for an improved experience. When this feature is off, third parties may be less likely to associate your accounts with each other."
        />
        <SettingsItemToggle
          title="Display NFT media"
          details="Displaying NFT media and data exposes your IP address to OpenSea or other third parties. This can allow attackers to associate your IP address with your Ethereum address. NFT autodetection relies on this setting, and won't be available when this is turned off."
        />
        <SettingsItemToggle
          title="Autodetect NFTs"
          details="Let Walleth add NFTs you own using third-party services. Autodetecting NFTs exposes your IP and account address to these services. Enabling this feature could associate your IP address with your Ethereum address and display fake NFTs airdropped by scammers. You can add tokens manually to avoid this risk."
        />
      </div>
      <span className="font-semibold text-secondary-600">
        Signature and transaction requests
      </span>

      <div className="p-4">
        <SettingsItemToggle
          title="Proposed nicknames"
          details="Let Walleth add NFTs you own using third-party services. Autodetecting NFTs exposes your IP and account address to these services. Enabling this feature could associate your IP address with your Ethereum address and display fake NFTs airdropped by scammers. You can add tokens manually to avoid this risk."
        />
      </div>
      <span className="font-semibold text-secondary-600">Metrics</span>
      <div className="p-4">
        <div>
          <SettingsItemToggle
            title="Participate in WallethMetrics"
            details="Participate in WallethMetrics to help us make Walleth better"
          />
        </div>
        <SettingsItemToggle
          title="Data collection for marketing"
          details="We'll use WallethMetrics to learn how you interact with our marketing communications. We may share relevant news (like product features and other materials)."
        />
        <div className="flex flex-col gap-4 p-0 pt-4">
          <div className="flex flex-col min-w-0">
            <span>Delete WallethMetrics data</span>
            <div className="text-secondary-500 text-[0.895rem] leading-[140%]">
              <span>
                This will delete historical WallethMetrics data associated with
                your use on this device. Your wallet and accounts will remain
                exactly as they are now after this data has been deleted. This
                process may take up to 30 days. View our{" "}
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center p-0 px-0 text-brand-500 h-auto decoration-[none] align-top bg-transparent relative cursor-pointer select-none break-words"
                >
                  Privacy policy
                </a>
                .
              </span>
            </div>
          </div>
          <div className="flex flex-col max-w-[300px] mt-4">
            <button className="inline-flex justify-center items-center h-[40px] px-4 p-0 relative align-middle select-none box-border text-sm leading-snug md:text-[1rem] md:leading-6 font-semibold rounded-full border-none appearance-none bg-brand-500 text-white cursor-pointer hover:shadow-[0_2px_8px_0_rgba(100,108,255,0.2)]">
              Delete WallethMetrics data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecurityPrivacy;
