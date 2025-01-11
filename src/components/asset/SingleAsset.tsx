import ActionButton from "../../ui/ActionButton";
import ButtonWithIcon from "../../ui/ButtonWithIcon";
import NetworkAvatar from "../../ui/NetworkAvatar";
import TokenListItem from "../lists/TokenListItem";

function SingleAsset() {
  // flex min-h-full - flex flex-col flex-[1_1_66.5%] min-w-0 pt-2 bg-white

  return (
    <div className="mx-auto mt-4 max-w-[650px]">
      <div className="flex flex-row justify-between pb-1 pr-4 pl-2">
        <div className="flex">
          <ButtonWithIcon
            iconUrl="src/assets/images/arrow-left.svg"
            margin="mr-1"
          />
          <p className="text-primary-500 text-sm leading-[1.375rem] md:text-[1rem] md:leading-6">
            ETH
          </p>
        </div>
        <div className="">
          <ButtonWithIcon
            iconUrl="src/assets/images/more.svg"
            color="text-secondary-900"
          />
        </div>
      </div>
      <div className="mt-5">
        <div className="flex justify-evenly">
          <ActionButton
            text="Buy & Sell"
            iconUrl="src/assets/images/plus-minus.svg"
            isDisabled
          />

          <ActionButton
            text="Swap"
            iconUrl="src/assets/images/swap.svg"
            isDisabled
          />

          <ActionButton
            text="Bridge"
            iconUrl="src/assets/images/bridge.svg"
            isDisabled
          />

          <ActionButton text="Send" iconUrl="src/assets/images/send.svg" />

          <ActionButton
            text="Receive"
            iconUrl="src/assets/images/scan-barcode.svg"
          />
        </div>
      </div>
      <div className="flex flex-col pt-5">
        <h3 className="pl-4 pb-2 text-secondary-900 text-lg leading-6 font-bold md:text-2xl">
          Your balance
        </h3>
        <div className="flex flex-col gap-4">
          <a href="#" className="flex flex-row px-4 py-2">
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
                  <span className="text-sm leading-[1.375rem] font-medium text-secondary-900 text-ellipsis whitespace-nowrap overflow-hidden md:text-[1rem] md:leading-6">
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
                  <p className="text-xs leading-[1.25rem] font-medium text-secondary-600 text-end text-ellipsis whitespace-nowrap overflow-hidden md:text-sm md:leading-[1.375rem]">
                    0.0129 Eth
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-between gap-1"></div>
            </div>
          </a>
        </div>
        <div className="flex flex-col gap-7 mt-2">
          <div className="flex">Token details</div>
          <div className="flex">Your activity</div>
        </div>
      </div>
    </div>
  );
}

export default SingleAsset;
