import ActionButton from "../../ui/ActionButton";
import ButtonWithIcon from "../../ui/ButtonWithIcon";
import NetworkAvatar from "../../ui/NetworkAvatar";
import ActivityListItem from "../lists/ActivityListItem";
import { Open, Window } from "../modal/PopupModal";
import AssetOption from "../popups/AssetOption";

function SingleAsset() {
  // Go back to main assets
  function handleBack() {
    window.location.hash = "";
  }

  // handle action button click
  function handleAction(link: string) {
    window.location.hash = link;
  }

  return (
    <div className="mx-auto mt-4 max-w-[650px]">
      <div className="flex flex-row justify-between pb-1 pr-4 pl-2">
        <div className="flex">
          <ButtonWithIcon
            iconUrl="src/assets/images/arrow-left.svg"
            margin="mr-1"
            onClick={handleBack}
          />
          <p className="text-primary-500 text-sm leading-[1.375rem] md:text-[1rem] md:leading-6">
            ETH
          </p>
        </div>
        <Open opens="asset_view_options">
          <div className="">
            <ButtonWithIcon
              iconUrl="src/assets/images/more.svg"
              color="text-secondary-900"
            />
          </div>
        </Open>
      </div>
      <div className="mt-5">
        <div className="flex justify-evenly">
          <ActionButton
            text="Buy & Sell"
            iconUrl="src/assets/images/plus-minus.svg"
            isDisabled
            onClick={() => handleAction("buy-sell")}
          />

          <ActionButton
            text="Swap"
            iconUrl="src/assets/images/swap.svg"
            isDisabled
            onClick={() => handleAction("swap")}
          />

          <ActionButton
            text="Bridge"
            iconUrl="src/assets/images/bridge.svg"
            isDisabled
            onClick={() => handleAction("bridge")}
          />

          <ActionButton
            text="Send"
            iconUrl="src/assets/images/send.svg"
            onClick={() => handleAction("send")}
          />

          <ActionButton
            text="Receive"
            iconUrl="src/assets/images/scan-barcode.svg"
            onClick={() => handleAction("receive")}
          />
        </div>
      </div>
      <div className="flex flex-col pt-5">
        <h3 className="pl-4 pb-2 text-primary-400 text-lg leading-6 font-bold md:text-2xl">
          Your balance
        </h3>
        <div className="flex flex-col gap-4">
          <a
            href="#"
            className="flex flex-row px-4 py-2 hover:bg-secondary-200 focus-within:bg-secondary-200"
          >
            <div className="inline-block self-center mr-4 relative">
              <div className="flex justify-center items-center w-[32px] h-[32px] max-w-[32px] flex-[0_0_32px] overflow-hidden text-xs leading-5 md:text-sm md:leading-[1.375rem] bg-secondary-200 text-primary-500 rounded-[50%]">
                <img
                  src="src/assets/images/eth-logo.svg"
                  alt="Eth logo"
                  className="w-full"
                />
              </div>
              <div className="absolute top-[14%] right-[14%] scale-100 translate-x-1/2 -translate-y-1/2 origin-[100%_0%]">
                <NetworkAvatar
                  logoLink="src/assets/images/eth-logo.svg"
                  networkName="Eth"
                />
              </div>
            </div>
            <div className="flex flex-col flex-grow w-full overflow-hidden">
              <div className="flex flex-row justify-between gap-1">
                <div className="inline-block w-1/3">
                  <span className="text-sm leading-[1.375rem] font-semibold text-secondary-900 text-ellipsis whitespace-nowrap overflow-hidden md:text-[1rem] md:leading-6">
                    ETH
                  </span>
                  <div className="flex">
                    <p className="text-error-500 text-xs leading-5 font-semibold text-ellipsis whitespace-nowrap overflow-hidden md:text-sm md:leading-[1.375rem] hidden">
                      -6.42%
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end w-2/3">
                  <p className="w-2/3 text-sm leading-[1.375rem] font-medium text-secondary-900 text-end text-ellipsis whitespace-nowrap overflow-hidden md:text-[1rem] md:leading-6"></p>
                  <p className="text-xs leading-[1.25rem] font-semibold text-secondary-600 text-end text-ellipsis whitespace-nowrap overflow-hidden md:text-sm md:leading-[1.375rem]">
                    0.0129 ETH
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-between gap-1"></div>
            </div>
          </a>
        </div>
        <div className="flex flex-col gap-7 mt-2">
          <div className="flex flex-col px-4">
            <h3 className="pb-4 text-primary-400 text-lg leading-6 font-bold md:text-2xl">
              Token details
            </h3>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <p className="text-secondary-600 text-sm leading-[1.375rem] font-semibold md:text-[1rem] md:leading-6">
                  Spending caps
                </p>
                <a
                  href=""
                  className="inline-flex justify-center items-center h-auto p-0 px-0 relative bg-transparent text-brand-500 text-sm leading-[1.375rem] font-semibold md:text-[1rem] md:leading-6 align-middle select-none cursor-pointer"
                >
                  Edit in Portfolio
                </a>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="pl-4 text-primary-400 text-lg leading-6 font-bold md:text-2xl">
              Your activity
            </h3>
            <div className="flex flex-col flex-[1]">
              <div className="flex-[1]">
                <div className="flex flex-col flex-[1]">
                  <p className="pe-4 ps-4 pt-4 text-primary-900 text-sm leading-[1.375rem] font-medium md:text-[1rem] md:leading-6">
                    Nov 30
                  </p>
                  <ActivityListItem
                    iconUrl="src/assets/images/programming.svg"
                    status="confirmed"
                  />
                  <p className="pe-4 ps-4 pt-4 text-primary-900 text-sm leading-[1.375rem] font-medium md:text-[1rem] md:leading-6">
                    Nov 29
                  </p>
                  <ActivityListItem
                    iconUrl="src/assets/images/programming.svg"
                    status="confirmed"
                  />
                  <ActivityListItem
                    iconUrl="src/assets/images/send.svg"
                    status="failed"
                  />
                  <ActivityListItem
                    iconUrl="src/assets/images/programming.svg"
                    status="confirmed"
                  />
                  <ActivityListItem
                    iconUrl="src/assets/images/received.svg"
                    status="confirmed"
                  />
                  <ActivityListItem
                    iconUrl="src/assets/images/programming.svg"
                    status="confirmed"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Window name="asset_view_options">
        <AssetOption />
      </Window>
    </div>
  );
}

export default SingleAsset;
