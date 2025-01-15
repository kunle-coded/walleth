import NetworkAvatar from "../../ui/NetworkAvatar";

interface TokenSwapListItemProps {
  tokenName: string;
  tokenDescription: string;
  tokenLogoUrl: string;
  isNoBorderTop?: boolean;
}

function TokenSwapListItem({
  tokenName,
  tokenDescription,
  tokenLogoUrl,
  isNoBorderTop,
}: TokenSwapListItemProps) {
  return (
    <div
      className={`flex flex-row flex-nowrap items-center py-2 px-4 relative min-h-[50px] cursor-pointer box-border ease-in-out duration-200 transition-all border-solid border-[rgb(175,180,192,0.4)] ${
        isNoBorderTop ? "" : "border-t"
      }`}
    >
      <div>
        <NetworkAvatar
          logoLink={`src/assets/tokenIcons/${tokenLogoUrl}`}
          networkName={tokenName}
          size="big"
        />
      </div>
      <div className="flex justify-between flex-[1]">
        <div className="flex flex-col justify-center ml-3">
          <span className="flex flex-row items-center min-w-0 pt-1 pb-[3px] text-sm leading-[100%] font-bold">
            {tokenName}
          </span>
          <span className="text-xs text-secondary-600 leading-[100%] text-ellipsis whitespace-nowrap overflow-hidden pb-1">
            {tokenDescription}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TokenSwapListItem;
