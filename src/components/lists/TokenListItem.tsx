import NetworkAvatar from "../../ui/NetworkAvatar";

interface TokenListItemProps {
  tokenName: string;
  tokenLogoUrl: string;
}

function TokenListItem({ tokenName, tokenLogoUrl }: TokenListItemProps) {
  return (
    <a href="#" className="flex flex-row px-4 py-2">
      <div className="inline-block self-center mr-4 relative">
        <div className="flex justify-center items-center w-[32px] h-[32px] max-w-[32px] flex-[0_0_32px] overflow-hidden text-xs leading-5 md:text-sm md:leading-[1.375rem] bg-secondary-200 text-primary-500 rounded-[50%]">
          <img src={tokenLogoUrl} alt="Eth logo" className="w-full" />
        </div>
        <div className="absolute top-[14%] right-[14%] scale-100 translate-x-1/2 -translate-y-1/2 origin-[100%_0%]">
          <NetworkAvatar logoLink={tokenLogoUrl} networkName="Eth" />
        </div>
      </div>
      <div className="flex flex-col w-full flex-grow overflow-hidden">
        <div className="flex flex-row justify-between gap-1">
          <div className="inline-block w-1/2">
            <span className="text-secondary-900 text-sm leading-[1.375rem] md:text-[1rem] md:leading-6 md:font-semibold text-ellipsis whitespace-nowrap overflow-hidden">
              <div className="inline-block">{tokenName}</div>
            </span>
            <div className="flex">
              <p className="text-error-500 text-xs leading-5 font-semibold text-ellipsis whitespace-nowrap overflow-hidden md:text-sm md:leading-[1.375rem]">
                -6.42%
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end w-1/2">
            <p className="text-secondary-900 text-sm leading-[1.375rem] text-end text-ellipsis whitespace-nowrap overflow-hidden font-semibold md:text-[1rem] md:leading-6">
              $0.00
            </p>
            <p className="text-secondary-600 text-xs leading-5 text-end text-ellipsis whitespace-nowrap overflow-hidden font-semibold md:text-sm md:leading-[1.375rem]">
              0 ETH
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default TokenListItem;
