import { tokens } from "../../data";
import SearchInput from "../../ui/SearchInput";
import TokenSwapListItem from "../lists/TokenSwapListItem";

interface TokensProps {
  onCloseModal?: () => void;
}

function Tokens({ onCloseModal }: TokensProps) {
  return (
    <div className="">
      <div className="w-full">
        <SearchInput placeholderText="Enter token name or paste address" />
        <div className="bg-white relative w-full">
          <div className="flex flex-col token-list-max-h overflow-y-auto scrollbar-custom bg-white token-list-item-1st-bt-0">
            {tokens.map((token) => (
              <TokenSwapListItem
                key={token.id}
                tokenId={token.id}
                tokenName={token.name}
                tokenDescription={token.description}
                tokenLogoUrl={token.logoUrl}
                isNoBorderTop={token.id === 0}
                onCloseModal={onCloseModal}
              />
            ))}
            <div className="flex flex-row flex-nowrap items-center py-2 pb-4 px-4 min-h-[auto] opacity-100 pointer-events-none relative cursor-pointer box-border ease-in-out duration-200 transition-all border-b-[none] border-t border-solid border-[rgb(175,180,192,0.4)]">
              <div className="flex flex-col items-center p-4 m-0 bg-white text-secondary-900 relative text-xs leading-[140%] border border-solid border-brand-500 rounded-lg before:absolute before:rounded-lg before:inset-0 before:bg-brand-100">
                <div className="w-full text-left text-secondary-900 z-[1]">
                  <span>
                    Can’t find a token? You can manually add any token by
                    pasting its address. Token contract addresses can be found
                    on{" "}
                    <a
                      href="etherscan.io"
                      className="text-brand-500 cursor-pointer pointer-events-auto"
                    >
                      etherscan.io
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tokens;
