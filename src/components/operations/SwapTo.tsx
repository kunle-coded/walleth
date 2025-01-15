import Icon from "../../ui/Icon";
import SearchInput from "../../ui/SearchInput";
import TokenSwapListItem from "../lists/TokenSwapListItem";
import Modal from "../modal/Modal";
import { tokens } from "../../data";

interface SwapFromProps {
  isSwap: boolean;
}

function SwapTo({ isSwap }: SwapFromProps) {
  return (
    <div className="pt-7 pb-5 px-4 rounded-tl-none rounded-tr-none rounded-br-md rounded-bl-md shadow-none border border-solid border-[rgb(175,_180,_192,_0.4)] border-t-0">
      {isSwap ? (
        <div className="flex flex-row justify-between items-center">
          <div className="">
            <div className="flex items-center relative bg-[rgb(175,_180,_192,_0.3)] shadow-none ease-in-out duration-200 border-[0] rounded-[100px] max-h-8 max-w-[165px] w-auto rounded-tr-[100px] rounded-br-[100px] hover:bg-secondary-200">
              <div className="flex flex-row flex-nowrap items-center flex-[1] py-4 px-3 relative box-border cursor-pointer h-8 max-w-[140px] ">
                <div className="flex">
                  <img
                    src="src/assets/images/eth-logo.svg"
                    alt="Eth"
                    className="mr-2 w-6 h-6 flex-[0_0_auto] bg-center rounded-[50%] bg-white shadow-[0_2px_4px_0,_rgb(0,0,0,0.1)]"
                  />
                </div>
                <div className="flex flex-auto justify-between w-full max-w-[95px]">
                  <div className="flex flex-col justify-center ml-2">
                    <span className="text-lg leading-[140%] text-secondary-900 font-semibold max-w-full text-ellipsis whitespace-nowrap overflow-hidden">
                      ETH
                    </span>
                  </div>
                </div>
              </div>
              <Icon
                imgUrl="src/assets/images/arrow-down.svg"
                margin="mr-3"
                size="small"
                color="secondary-600"
              />
            </div>
          </div>
          <div className="flex flex-row items-center ml-2 overflow-hidden">
            <h6 className="text-primary-500 text-2xl font-bold text-ellipsis overflow-hidden">
              4
            </h6>
          </div>
        </div>
      ) : (
        <div className="flex flex-row justify-between items-center">
          <div className="select">
            <div className="flex items-center relative w-auto max-w-[165px] h-[60px] max-h-[32px] transition-all duration-200 ease-in-out shadow-none border-0 rounded-[100px] rounded-tr-[100px] rounded-br-[100px] bg-[rgb(175,_180,_192,_0.3)] hover:bg-secondary-200">
              <Modal>
                <Modal.Open opens="token_selection">
                  <div className="flex flex-row flex-nowrap flex-[1] items-center h-[32px] min-w-[140px] py-4 px-3 relative box-border cursor-pointer">
                    <div className="flex justify-between flex-auto w-full min-w-[110px]">
                      <div className="flex flex-col justify-center ml-2">
                        <span className="max-w-full text-primary-500 text-lg leading-[140%] font-medium text-ellipsis whitespace-nowrap overflow-hidden">
                          Select token
                        </span>
                      </div>
                    </div>
                  </div>
                </Modal.Open>
                <Modal.Window name="token_selection" headerText="Swap to">
                  <div className="">
                    <div className="w-full">
                      <SearchInput placeholderText="Enter token name or paste address" />
                      <div className="bg-white relative w-full">
                        <div className="flex flex-col token-list-max-h overflow-y-auto scrollbar-custom bg-white token-list-item-1st-bt-0">
                          {tokens.map((token) => (
                            <TokenSwapListItem
                              key={token.id}
                              tokenName={token.name}
                              tokenDescription={token.description}
                              tokenLogoUrl={token.logoUrl}
                              isNoBorderTop={token.id === 0}
                            />
                          ))}
                          <div className="flex flex-row flex-nowrap items-center py-2 pb-4 px-4 min-h-[auto] opacity-100 pointer-events-none relative cursor-pointer box-border ease-in-out duration-200 transition-all border-b-[none] border-t border-solid border-[rgb(175,180,192,0.4)]">
                            <div className="flex flex-col items-center p-4 m-0 bg-white text-secondary-900 relative text-xs leading-[140%] border border-solid border-brand-500 rounded-lg before:absolute before:rounded-lg before:inset-0 before:bg-brand-100">
                              <div className="w-full text-left text-secondary-900 z-[1]">
                                <span>
                                  Can’t find a token? You can manually add any
                                  token by pasting its address. Token contract
                                  addresses can be found on{" "}
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
                </Modal.Window>
              </Modal>
              <Icon
                imgUrl="src/assets/images/arrow-down.svg"
                margin="mr-3"
                size="small"
              />
            </div>
          </div>
          <div className="flex flex-row items-center ml-2 overflow-hidden">
            <h6 className="text-primary-500 text-2xl font-bold text-ellipsis overflow-hidden">
              4
            </h6>
          </div>
        </div>
      )}
      <div className="flex flex-row justify-between items-stretch">
        <div className="flex flex-row w-full h-[18px] mt-1 text-xs leading-[140%] text-secondary-600 font-medium">
          Balance: 0
        </div>
      </div>
      <div className="flex flex-row justify-between items-stretch">
        <div className="flex flex-row w-full h-[18px] mt-1 text-xs leading-[140%] text-secondary-600 font-medium">
          <span>
            Confirmed by 16 sources. Verify on{" "}
            <a
              className="text-brand-500 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Etherscan
            </a>
            .
          </span>
        </div>
      </div>
    </div>
  );
}

export default SwapTo;
