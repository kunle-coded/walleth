import { useGlobal } from "../../contexts/GlobalContext";
import { AccountOverviewProps } from "../../types/assets";
import ActionButton from "../../ui/ActionButton";
import AccountOverviewTabs from "../homepage/AccountOverviewTabs";
import TokenOverview from "../asset/TokenOverview";
import NFTOverview from "../asset/NFTOverview";
import ActivityOverview from "../asset/ActivityOverview";
import Modal from "../modal/Modal";
import Icon from "../../ui/Icon";
import ReceiveQRCode from "../qrcodes/ReceiveQRCode";
import { writeClipboardText } from "../../helpers/writeClipboardText";
import changeLocation from "../../helpers/changeLocation";

function MainAssets({ filterRef, isTop }: AccountOverviewProps) {
  const { overviewActiveTab } = useGlobal();

  async function handleAddressCopy(address: string) {
    await writeClipboardText(address);
    // await readClipboardText();
  }

  return (
    <div className="flex flex-col flex-[1_1_66.5%] min-w-0 pt-2 bg-white">
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
                onClick={() => changeLocation("buy-sell")}
              />

              <ActionButton
                text="Swap"
                iconUrl="src/assets/images/swap.svg"
                onClick={() => changeLocation("swap")}
              />

              <ActionButton
                text="Bridge"
                iconUrl="src/assets/images/bridge.svg"
                onClick={() => changeLocation("bridge")}
              />

              <ActionButton
                text="Send"
                iconUrl="src/assets/images/send.svg"
                onClick={() => changeLocation("send")}
              />

              <Modal>
                <Modal.Open opens="receiver_barcode">
                  <ActionButton
                    text="Receive"
                    iconUrl="src/assets/images/scan-barcode.svg"
                  />
                </Modal.Open>
                <Modal.Window
                  name="receiver_barcode"
                  headerText="Receive"
                  noScroll
                >
                  <div className="flex flex-col items-center pe-4 ps-4">
                    <div className="flex flex-col justify-center items-center">
                      <div className="qr-code-wrapper inline-block relative mb-4">
                        <div className="qr-code-image inline-block relative mb-4">
                          <ReceiveQRCode />
                        </div>
                        <div className="qr-code-logo inline-block relative z-[1] border border-solid border-brand-400 rounded-2xl bg-white"></div>
                      </div>
                      <p className="mb-4 text-secondary-900 text-center leading-6 font-semibold md:text-[1.125rem] ">
                        Account 1
                      </p>
                      <p className="w-[240px] mb-4 text-secondary-900 text-sm leading-snug text-center break-all md:text-[1rem] md:leading-6">
                        0x2b5a
                        <span className="inline text-secondary-400 text-sm leading-snug md:text-[1rem] md:leading-6">
                          8cd7f3bf420619a68b46d9e5088ca63
                        </span>
                        f760f
                      </p>
                      <div
                        className="flex items-center gap-2 mb-4 text-brand-500 cursor-pointer"
                        onClick={() =>
                          handleAddressCopy(
                            "0x2b5a8cd7f3bf420619a68b46d9e5088ca63f760f"
                          )
                        }
                      >
                        <Icon imgUrl="src/assets/images/copy.svg" />
                        Copy address
                      </div>
                    </div>
                  </div>
                </Modal.Window>
              </Modal>
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
  );
}

export default MainAssets;
