import ActionButton from "../../ui/ActionButton";
import { Window } from "../modal/PopupModal";
import AccountOption from "../popups/AccountOption";
import NetworkOption from "../popups/NetworkOption";
import AccountOverviewTabs from "../homepage/AccountOverviewTabs";
import { AccountOverviewProps } from "../../types/assetsTypes";
import TokenOverview from "../asset/TokenOverview";
import { useGlobal } from "../../contexts/GlobalContext";
import NFTOverview from "../asset/NFTOverview";
import ActivityOverview from "../asset/ActivityOverview";

function MainAssets({ filterRef, isTop }: AccountOverviewProps) {
  const { overviewActiveTab } = useGlobal();

  return (
    <div className="flex min-h-full">
      <div className="flex flex-col flex-[1_1_66.5%] min-w-0 pt-2">
        <div className="flex flex-col flex-[0_0_auto] justify-start items-center">
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
            {overviewActiveTab === 0 && (
              <TokenOverview filterRef={filterRef} isTop={isTop} />
            )}
            {overviewActiveTab === 1 && <NFTOverview />}
            {overviewActiveTab === 2 && <ActivityOverview />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainAssets;
