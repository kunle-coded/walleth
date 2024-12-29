import EthLogo from "../logos/EthLogo";
import LineaLogo from "../logos/LineaLogo";
import NetworkItem from "./NetworkItem";

function Networks() {
  return (
    <div>
      <div className="flex justify-between p-4">
        <p className="text-secondary-600 font-medium leading-6">
          Enabled networks
        </p>
      </div>

      <NetworkItem
        current
        networkName="Ethereum Mainnet"
        networkLink="mainnet.infura.io"
      >
        <EthLogo />
      </NetworkItem>
      <NetworkItem
        networkName="Linea Mainnet"
        networkLink="linea-mainnet.infura.io"
      >
        <LineaLogo />
      </NetworkItem>
    </div>
  );
}

export default Networks;
