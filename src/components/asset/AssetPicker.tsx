import React, { useState } from "react";
import Icon from "../../ui/Icon";
import NetworkAvatar from "../../ui/NetworkAvatar";
import SearchInput from "../../ui/SearchInput";
import Tabbed from "../../ui/Tabbed";
import TokenSendListItem from "../lists/TokenSendListItem";
import Modal from "../modal/Modal";

interface AssetPickerProps {
  purpose: string;
  sendValue?: number | null;
  receiveValue?: string;
  tokenBalance?: number;
  isCurrencyToggle: boolean;
  isError?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggle: () => void;
}

function AssetPicker({
  purpose,
  sendValue,
  receiveValue,
  tokenBalance,
  isError,
  isCurrencyToggle,
  onChange,
  onToggle,
}: AssetPickerProps) {
  const [activeTab, setActiveTab] = useState(0);

  function handleTabSelect(index: number) {
    setActiveTab(index);
  }

  return (
    <div className="asset-picker-amount-input">
      <div
        className={`flex items-center mb-1 p-1 py-1 bg-white border rounded-lg border-solid ${
          isError ? "border-error-500" : "border-[rgb(175,180,192,0.4)]"
        }`}
      >
        <Modal>
          <Modal.Open opens="asset_selector">
            <button className="flex items-center flex-grow gap-2 p-2 h-[30px] min-w-[80px] px-2 bg-transparent text-secondary-900 text-sm leading-snug font-medium border-none rounded-full relative align-middle cursor-pointer select-none text-left md:text-[1rem] md:leading-6">
              <span className="text-secondary-900">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    <div className="inline-block self-start relative">
                      <NetworkAvatar
                        logoLink="src/assets/images/eth-logo.svg"
                        size="large"
                        networkName="Eth"
                      />
                      <div className="absolute top-[14%] right-[14%] scale-100 translate-x-[50%] translate-y-[-50%] origin-[100%_0%]">
                        <NetworkAvatar
                          logoLink="src/assets/images/eth-logo.svg"
                          networkName="Eth"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="inline">
                      <p className="max-w-[200px] text-secondary-900 text-sm leading-snug text-ellipsis whitespace-nowrap overflow-hidden md:text-[1rem] md:leading-6">
                        ETH
                      </p>
                    </div>
                  </div>
                </div>
              </span>
              <Icon imgUrl="src/assets/images/arrow-down.svg" margin="ms-1" />
            </button>
          </Modal.Open>
          <Modal.Window
            name="asset_selector"
            headerText={`Select asset to ${purpose}`}
            isFullWidth
          >
            <div className="flex flex-col gap-1">
              {purpose === "send" && (
                <div className="pe-4 ps-4">
                  <Tabbed
                    tabOneText="Tokens"
                    tabTwoText="NFTs"
                    activeTab={activeTab}
                    onTabClick={handleTabSelect}
                  />
                </div>
              )}
              {purpose === "receive" && (
                <div className="flex items-center gap-1 ms-auto me-auto">
                  <NetworkAvatar
                    logoLink="src/assets/images/eth-logo.svg"
                    networkName="Eth"
                  />
                  <p className="text-secondary-900 text-xs leading-5 md:text-sm md:leading-snug">
                    Sending ETH
                  </p>
                </div>
              )}
              <div className="max-h-full overflow-y-scroll">
                {activeTab === 0 && (
                  <div className="pt-4 px-4">
                    <SearchInput placeholderText="Search tokens" isBig />
                  </div>
                )}
                {activeTab === 0 && (
                  <div className="max-h-full">
                    <TokenSendListItem
                      tokenId={0}
                      tokenName="ETH"
                      tokenDescription="Ethereum"
                      tokenLogoUrl="0x6b175474e89094c44da98b954eedeac495271d0f.png"
                      isCurrent
                      isTokenOwned
                    />
                    <TokenSendListItem
                      tokenId={1}
                      tokenName="ETH"
                      tokenDescription="Ethereum"
                      tokenLogoUrl="0x6b175474e89094c44da98b954eedeac495271d0f.png"
                    />
                  </div>
                )}
                {activeTab === 1 && (
                  <div className="flex flex-col justify-center items-center px-12 py-8">
                    <div className="flex justify-center items-center w-[80px] h-[80px] p-4 bg-white   align-middle select-none relative border-[4px] border-solid border-secondary-300 rounded-[50%] overflow-hidden uppercase">
                      <img src="src/assets/images/no-nft.svg" alt="" />
                    </div>

                    <div className="flex flex-col justify-center items-center mb-8 mt-4">
                      <h4 className="text-secondary-400 leading-6 font-extrabold md:text-[1.25rem]">
                        No NFTs yet
                      </h4>
                      <a
                        href="/support/nfts"
                        className="inline-flex justify-center items-center p-0 pr-0 pl-0 h-[32px] text-sm leading-[1.375rem] font-semibold text-brand-500 bg-transparent align-middle select-none cursor-pointer relative md:leading-6 md:text-[1rem]"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Modal.Window>
        </Modal>
        <div className="float-right flex flex-row flex-nowrap items-center flex-grow min-h-[54px] p-2 relative border-none leading-[140%] rounded bg-white text-secondary-900 font-medium">
          <div className="flex flex-col flex-nowrap flex-[1_0_auto]">
            {purpose === "send" ? (
              <div
                title={sendValue !== null ? `${sendValue}` : undefined}
                className="items-center ml-auto pb-0.5 max-w-[138px] text-ellipsis whitespace-nowrap"
                style={{ display: "inherit" }}
              >
                <input
                  type="number"
                  placeholder="0"
                  dir="ltr"
                  min={0}
                  step="any"
                  value={sendValue ?? ""}
                  autoFocus={purpose === "send"}
                  className="max-w-[15ch] min-w-0 h-4 text-right text-sm leading-[140%] text-secondary-900 font-medium border-none bg-transparent text-ellipsis  outline-none appearance-none placeholder:text-secondary-600"
                  style={{
                    width: sendValue
                      ? `${sendValue.toString().length}ch`
                      : "1.5ch",
                  }}
                  onChange={onChange}
                />
                <div className="ml-1 text-secondary-900 text-sm leading-[140%] font-medium">
                  {isCurrencyToggle ? "USD" : "ETH"}
                </div>
              </div>
            ) : (
              <div
                title={`${receiveValue}`}
                className="items-center ml-auto pb-0.5 max-w-[138px] text-ellipsis whitespace-nowrap"
                style={{ display: "inherit" }}
              >
                <input
                  type="number"
                  dir="ltr"
                  min={0}
                  step="any"
                  value={receiveValue}
                  aria-disabled
                  disabled
                  className="max-w-[15ch] min-w-0 h-4 text-right text-sm leading-[140%] text-secondary-900 font-medium border-none bg-transparent text-ellipsis  outline-none appearance-none placeholder:text-secondary-600"
                  style={{
                    width: receiveValue ? `${receiveValue.length}ch` : "1.5ch",
                  }}
                />
                <div className="ml-1 text-secondary-900 text-sm leading-[140%] font-medium">
                  {isCurrencyToggle ? "USD" : "ETH"}
                </div>
              </div>
            )}
            <div className="flex items-center flex-nowrap ml-auto pl-px max-w-[138px] text-xs leading-[140%] text-ellipsis whitespace-nowrap overflow-hidden">
              <span className="w-max text-secondary-500 text-ellipsis whitespace-nowrap overflow-hidden">
                {isCurrencyToggle ? 0 : `$0.00`}
              </span>
              <span className="w-max text-secondary-500 ms-1">
                {isCurrencyToggle ? "ETH" : "USD"}
              </span>
            </div>
          </div>
          <button
            className="inline-flex justify-center items-center ml-1 p-0 w-6 h-6 min-w-6 rounded-lg border-none bg-transparent text-brand-500 hover:bg-secondary-200"
            onClick={onToggle}
          >
            <Icon
              imgUrl="src/assets/images/swap-vertical.svg"
              color="inherit"
            />
          </button>
        </div>
      </div>
      {isError && purpose === "send" && (
        <div className="flex">
          <div className="flex">
            <p className="mr-1 p-0 self-baseline text-error-500 text-xs leading-5 md:leading-snug">
              Balance:
            </p>
            <div className="flex items-center flex-wrap self-baseline text-xs">
              <span className="p-0 self-baseline text-error-500 text-xs leading-5 text-ellipsis whitespace-nowrap overflow-hidden md:leading-snug">
                {tokenBalance}
              </span>
            </div>
            <p className="p-0 self-baseline text-error-500 text-xs leading-5 md:leading-snug">
              . Insufficient funds for gas
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AssetPicker;
