import { tokens } from "../../data";
import Icon from "../../ui/Icon";
import Modal from "../modal/Modal";
import Tokens from "../popups/Tokens";
import { useGlobal } from "../../contexts/GlobalContext";

interface SwapFromProps {
  isSwap: boolean;
  onSwap: () => void;
}

function SwapFrom({ isSwap, onSwap }: SwapFromProps) {
  const { selectedToken } = useGlobal();

  return (
    <div className="relative mt-4 pt-6 pb-5 px-4 rounded-tl-md rounded-tr-md rounded-br-none rounded-bl-none shadow-none border border-solid border-[rgb(175,_180,_192,_0.4)]">
      {/* swap start */}
      {isSwap ? (
        <div className="flex flex-row justify-between items-center">
          <div className="select">
            <div className="flex items-center relative w-auto max-w-[165px] h-[60px] max-h-[32px] transition-all duration-200 ease-in-out shadow-none border-0 rounded-[100px] rounded-tr-[100px] rounded-br-[100px] bg-[rgb(175,_180,_192,_0.3)] hover:bg-secondary-200">
              <Modal>
                <Modal.Open opens="token_selection">
                  <div>
                    {selectedToken === null ? (
                      <div className="flex flex-row flex-nowrap flex-[1] items-center h-[32px] min-w-[140px] py-4 px-3 relative box-border cursor-pointer">
                        <div className="flex justify-between flex-auto w-full min-w-[110px]">
                          <div className="flex flex-col justify-center ml-2">
                            <span className="max-w-full text-primary-500 text-lg leading-[140%] font-medium text-ellipsis whitespace-nowrap overflow-hidden">
                              Select token
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      tokens.map(
                        (token) =>
                          token.id === selectedToken && (
                            <div
                              key={token.id}
                              className="flex flex-row flex-nowrap items-center flex-[1] py-4 pl-3 pr-1 relative box-border cursor-pointer h-8 max-w-[140px]"
                            >
                              <div className="flex">
                                <img
                                  src={`src/assets/tokenIcons/${token.logoUrl}`}
                                  alt={`${token.name} logo`}
                                  className="mr-2 w-5 h-5 flex-[0_0_auto] bg-center rounded-[50%] bg-white shadow-[0_2px_4px_0,_rgb(0,0,0,0.1)]"
                                />
                              </div>
                              <div className="flex flex-auto justify-between w-full max-w-[95px]">
                                <div className="flex flex-col justify-center ml-2">
                                  <span className="text-lg leading-[140%] text-secondary-900 font-semibold max-w-full text-ellipsis whitespace-nowrap overflow-hidden">
                                    {token.name}
                                  </span>
                                </div>
                              </div>
                            </div>
                          )
                      )
                    )}
                  </div>
                </Modal.Open>
                <Modal.Window name="token_selection" headerText="Swap to">
                  <Tokens />
                </Modal.Window>
              </Modal>
              <Icon
                imgUrl="src/assets/images/arrow-down.svg"
                margin="mr-3"
                size="small"
              />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="inline-flex items-center px-0 border-[0] outline-none h-[32px] bg-white rounded">
              <input
                type="text"
                placeholder="0"
                autoComplete="off"
                className="pr-0 pl-4 p-0 m-0 w-full flex-grow box-content text-right font-bold text-2xl text-ellipsis text-secondary-900 bg-transparent border-none focus:outline-none"
              />
            </div>
          </div>
        </div>
      ) : (
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
          <div className="flex flex-row items-center">
            <div className="inline-flex items-center px-0 border-[0] outline-none h-[32px] bg-white rounded">
              <input
                type="text"
                placeholder="0"
                autoComplete="off"
                className="pr-0 pl-4 p-0 m-0 w-full flex-grow box-content text-right font-bold text-2xl text-ellipsis text-secondary-900 bg-transparent border-none focus:outline-none"
              />
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-row justify-between items-stretch">
        <div className="flex flex-row w-full h-[18px] mt-1 text-xs leading-[140%] text-secondary-600 font-medium">
          Balance: 0
        </div>
        <div className="flex flex-row justify-end items-end">
          <p className="text-secondary-600 text-xs leading-5 font-medium md:text-sm md:leading-snug">
            $12,329.12
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-start">
        <p className="mt-0 text-secondary-600 text-xs leading-5 font-bold md:text-sm md:leading-snug">
          Not enough ETH
        </p>
      </div>
      <div className="flex flex-row justify-center">
        <div
          className={`flex justify-center items-center absolute p-[7px] bg-white border border-solid border-[rgb(175,_180,_192,_0.4)] rounded-[50%] transition-all duration-[0.3s] ease-in-out cursor-pointer hover:bg-primary-100 ${
            isSwap ? "rotate-[360deg]" : ""
          }`}
          onClick={onSwap}
        >
          <Icon
            imgUrl="src/assets/images/arrow-two-down.svg"
            size="big"
            color="secondary-600"
          />
        </div>
      </div>
    </div>
  );
}

export default SwapFrom;
