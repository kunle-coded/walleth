import ActionButton from "../../ui/ActionButton";
import ArrowUp from "../icons/ArrowUp";
import Bridge from "../icons/Bridge";
import PlusMinus from "../icons/PlusMinus";
import Receive from "../icons/Receive";
import Send from "../icons/Send";
import Swap from "../icons/Swap";

function AccountOverview() {
  return (
    <section className="w-full flex flex-[1 0 auto] justify-center min-h-0">
      <div className="md:w-4/5 lg:w-[62vw] min-h-[82vh] shadow-[0_2px_4px_0_rgba(0,0,0,0.1)] z-20">
        <div className="flex min-h-full">
          <div className="flex flex-col flex-[1_1_66.5%] min-w-0 pt-2 bg-white">
            <div className="flex flex-col flex-[0 0 auto] justify-start items-center">
              <div className="w-full min-w-0 flex flex-col justify-between lg:items-center sm:items-start flex-1">
                <div className="w-full flex flex-col lg:items-center sm:items-start flex-1 gap-1">
                  <div>
                    <div className="inline">
                      <div className="flex flex-col min-w-0 max-w-[326px] items-start my-4 px-4 relative">
                        <div className="flex flex-nowrap justify-center items-center max-w-[inherit]">
                          <div className="contents">
                            <span className="text-ellipsis overflow-hidden whitespace-nowrap text-4xl font-bold text-secondary-900">
                              4.8729
                            </span>
                            <span className="text-4xl font-bold text-secondary-900 ms-2">
                              ETH
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-nowrap justify-center items-center w-full max-w-[inherit]">
                          <div className="contents">
                            <p className="text-ellipsis overflow-hidden whitespace-pre text-xl font-medium text-secondary-900">
                              $8,391.14
                            </p>
                            <p className="flex items-center text-xl font-medium text-success-500 ms-3">
                              <span className="relative w-[10px] h-[10px] text-inherit me-2 mt-1">
                                <ArrowUp />
                              </span>
                              9.97%
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row h-full mt-2 mb-4 px-4">
                  <div className="flex justify-evenly">
                    <ActionButton text="Buy & Sell">
                      <PlusMinus />
                    </ActionButton>
                    <ActionButton text="Swap">
                      <Swap />
                    </ActionButton>
                    <ActionButton text="Bridge">
                      <Bridge />
                    </ActionButton>
                    <ActionButton text="Send">
                      <Send />
                    </ActionButton>
                    <ActionButton text="Receive">
                      <Receive />
                    </ActionButton>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-grow">balance</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountOverview;
