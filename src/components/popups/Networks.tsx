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

      <div className="networks_container">
        <div className="px-4 mt-4 mb-1">
          <div className="flex justify-between my-4">
            <div className="inline-flex">
              <p className="sm:text-sm md:text-[1rem] md:leading-6 font-medium text-secondary-500">
                Additional networks
              </p>
              <div className="mt-1">
                <span
                  className="inline-block w-4 h-4 max-w-4 ml-2 text-inherit bg-current text-secondary-400 relative"
                  style={{
                    maskImage: "url(./src/assets/images/info.svg)",
                    maskSize: "cover",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                  }}
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper"></div>
        <div className="wrapper"></div>
      </div>
    </div>
  );
}

export default Networks;
