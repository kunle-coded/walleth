import { useRef } from "react";
import ActionButton from "../../ui/ActionButton";
import Icon from "../../ui/Icon";
import IconButton from "../../ui/IconButton";
import TooltipPopup from "../../ui/TooltipPopup";
import { Window } from "../modal/PopupModal";
import AccountOption from "../popups/AccountOption";
import NetworkOption from "../popups/NetworkOption";
import AccountOverviewTabs from "./AccountOverviewTabs";
import usePopupCordinates from "../../hooks/usePopupCordinates";

function AccountOverview() {
  const filterRef = useRef(null);
  const { isTop } = usePopupCordinates(filterRef);

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
                              <span
                                className="inline-block w-[10px] h-[10px] text-inherit me-2 mt-1 bg-current"
                                style={{
                                  maskImage:
                                    "url(src/assets/images/arrow-increase.svg)",
                                  maskSize: "cover",
                                  maskRepeat: "no-repeat",
                                  maskPosition: "center",
                                }}
                              ></span>
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
                    <ActionButton
                      text="Buy & Sell"
                      iconUrl="src/assets/images/plus-minus.svg"
                    />

                    <ActionButton
                      text="Swap"
                      iconUrl="src/assets/images/swap.svg"
                    />

                    <ActionButton
                      text="Bridge"
                      iconUrl="src/assets/images/bridge.svg"
                    />

                    <ActionButton
                      text="Send"
                      iconUrl="src/assets/images/send.svg"
                    />

                    <ActionButton
                      text="Receive"
                      iconUrl="src/assets/images/scan-barcode.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex-row">
                <AccountOverviewTabs />
                <div className="flex-row">
                  <div className="mt-2">
                    <div className="py-1 mx-2">
                      <div className="flex justify-between">
                        <button className="inline-flex justify-between items-center w-auto min-w-[auto] max-w-full h-[32px] gap-1 rounded-lg py-0 px-2 mr-2 bg-white text-secondary-900 border-none text-ellipsis overflow-hidden whitespace-nowrap align-middle select-none cursor-pointer relative">
                          <span className="text-ellipsis overflow-hidden whitespace-nowrap">
                            Ethereum Mainnet
                          </span>
                          <Icon
                            imgUrl="src/assets/images/arrow-down.svg"
                            margin="ms-1"
                          />
                        </button>
                        <div className="flex justify-end">
                          <div ref={filterRef}>
                            <div className="inline">
                              <IconButton iconUrl="src/assets/images/filter.svg" />
                            </div>
                            <TooltipPopup isTop={isTop} />
                          </div>
                          <IconButton
                            iconUrl="src/assets/images/more.svg"
                            margin="me-0"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="h-[600px]">token</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Window name="network_menu">
            <NetworkOption />
          </Window>
          <Window name="account_menu">
            <AccountOption />
          </Window>
        </div>
      </div>
    </section>
  );
}

export default AccountOverview;
