// Swap assets

import Icon from "../../ui/Icon";

function Swap() {
  return (
    <div className="flex justify-center w-full max-h-0 flex-[1_0_auto] mt-4">
      <div className="flex justify-center w-full swap-assets">
        <div className="flex flex-col items-center flex-nowrap overflow-x-hidden overflow-y-auto w-full h-full swap-container">
          <div className="flex flex-row flex-nowrap justify-center items-center w-full py-3 bg-primary-100 sticky top-0 z-[1] swap-header">
            <div className="flex flex-row justify-center w-1/12 ml-4">
              <Icon
                imgUrl="src/assets/images/arrow-two-left.svg"
                size="big"
                color="secondary-500"
              />
            </div>
            <div className="text-center flex-[1] -mt-[5px] font-extrabold leading-[140%] text-secondary-900 ">
              Swap
            </div>
            <div className="flex flex-row justify-center w-1/12 mr-4">
              <Icon
                imgUrl="src/assets/images/settings.svg"
                size="big"
                color="secondary-500"
              />
            </div>
          </div>
          <div className="flex flex-col flex-nowrap items-center relative w-full h-full">
            <div className="flex flex-col flex-nowrap flex[1] w-full">
              <div className="flex flex-col h-full mr-4 ml-4 swap-content">
                <div className="relative mt-4 pt-6 pb-5 px-4 rounded-tl-md rounded-tr-md rounded-br-none rounded-bl-none shadow-none border border-solid border-[rgb(175,_180,_192,_0.4)]">
                  <div className="flex flex-row justify-between items-center">
                    <div className="">
                      <div className="flex items-center relative bg-secondary-200 shadow-none ease-in-out duration-200 border-[0] rounded-[100px] max-h-8 max-w-[165px] w-auto rounded-tr-[100px] rounded-br-[100px]">
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
                  <div className="swap-footer">line</div>
                </div>
              </div>
              <div className="swap-footer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Swap;
