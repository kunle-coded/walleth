import { useGlobal } from "../../contexts/GlobalContext";

interface TokenSendListItemProps {
  tokenId: number;
  tokenName: string;
  tokenDescription: string;
  tokenLogoUrl: string;
  isCurrent?: boolean;
  isTokenOwned?: boolean;
  onCloseModal?: () => void;
}

function TokenSendListItem({
  tokenId,
  tokenName,
  tokenDescription,
  tokenLogoUrl,
  isCurrent,
  isTokenOwned,
  onCloseModal,
}: TokenSendListItemProps) {
  const { onTokenSelect } = useGlobal();

  function handleTokenItem() {
    onTokenSelect(tokenId);
    onCloseModal?.();
  }

  return (
    <div
      className={`relative max-h-[50vh] m-0 p-0 overflow-y-auto cursor-pointer ${
        isCurrent ? "bg-brand-100" : "bg-transparent hover:bg-secondary-200"
      }`}
      onClick={handleTokenItem}
    >
      {isCurrent && (
        <div className="absolute left-1 top-1 w-1 h-[calc(100%_-_8px)] bg-brand-500 rounded-[9999px]"></div>
      )}

      <div className="block items-center flex-nowrap p-0">
        <div className="ms-2">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row py-2 px-4">
              <div className="inline-block self-center mr-4 relative">
                <div className="flex justify-center items-center w-[32px] h-[32px] max-w-[32px] flex-[0_0_32px] text-primary-500 bg-secondary-200 rounded-[50%] overflow-hidden uppercase text-xs leading-5 md:text-sm md:leading-snug">
                  <img
                    src={`src/assets/tokenIcons/${tokenLogoUrl}`}
                    alt={`${tokenName} logo`}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col flex-grow w-full overflow-hidden">
                <div className="flex flex-row justify-between gap-1">
                  <div className="inline-block w-2/6">
                    <span className="font-semibold text-secondary-900 text-sm leading-snug overflow-hidden whitespace-nowrap text-ellipsis md:text-[1rem] md:leading-6">
                      {tokenName}
                    </span>
                    <p className="text-sm leading-snug text-secondary-600 md:text-[1rem] md:leading-6 text-ellipsis whitespace-nowrap overflow-hidden">
                      {tokenDescription}
                    </p>
                  </div>
                  <div className="flex flex-col items-end w-2/3">
                    <p className="text-end w-2/3 text-secondary-900 text-sm leading-snug font-semibold md:text-[1rem] md:leading-6">
                      {isTokenOwned ? "0 ETH" : ""}
                    </p>
                    <p className="text-end w-2/3 text-secondary-600 text-xs leading-5 font-semibold md:text-sm md:leading-snug">
                      {isTokenOwned ? "$0.00" : ""}
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-between gap-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TokenSendListItem;
