import { useState } from "react";
import { addressFormatter } from "../../helpers/addressFormatter";
import Icon from "../../ui/Icon";
import AccountAvatar from "../../ui/AccountAvatar";
import Modal from "../modal/Modal";
import Account from "../popups/Account";
import NetworkAvatar from "../../ui/NetworkAvatar";
import AssetPicker from "../asset/AssetPicker";
import AddressPicker from "../asset/AddressPicker";

function Send() {
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [hasContact, setHasContact] = useState(false);
  const [isPositiveBalance, setIsPositiveBalance] = useState(false);
  const [isReceiverAddressSelected, setIsReceiverAddressSelected] =
    useState(true);
  const [isCurrencyToggle, setIsCurrencyToggle] = useState(false);

  const address = "0x2b5A8CD7f3bf420619a68B46d9e5088cA63f760F";

  function handleFocus() {
    setIsInputFocus(true);
  }

  function handleBlur() {
    setIsInputFocus(false);
  }

  function handleTabSelect(index: number) {
    setActiveTab(index);
  }

  function toggleCurrency() {
    setIsCurrencyToggle((prevState) => !prevState);
  }

  return (
    <div className="flex flex-row justify-center w-full h-full bg-primary-100">
      <div className="flex flex-col h-full w-[408px] bg-white">
        <div className="flex justify-center w-full p-4">
          <div className="min-w-6">
            <button className="inline-flex justify-center items-center w-6 h-6 min-w-6 p-0 bg-transparent text-secondary-600 cursor-pointer border-none rounded-lg hover:bg-secondary-200">
              <Icon imgUrl="src/assets/images/arrow-left.svg" />
            </button>
          </div>
          <div className="mr-6 w-[calc(100%_-_48px)]">
            <h4 className="block pe-8 ps-8 text-secondary-900 leading-6 font-bold text-center text-ellipsis whitespace-nowrap overflow-hidden md:text-lg">
              Send
            </h4>
          </div>
        </div>
        <div className="flex flex-col w-full h-full p-4 overflow-auto">
          <div className="flex flex-col pb-4">
            <label
              htmlFor=""
              className="inline-flex items-center pb-2 text-secondary-900 text-sm leading-snug font-medium md:text-[1rem] md:leading-6"
            >
              From
            </label>
            <Modal>
              <Modal.Open opens="account_options">
                <AddressPicker address={address} account="Account 1" />
              </Modal.Open>
              <Modal.Window
                name="account_options"
                headerText="Select an account"
                showButton
                isAccount
                buttonText="Add account or hardware wallet"
                iconUrl="src/assets/images/add.svg"
              >
                <div className="overflow-auto scrollbar-custom">
                  <Account current index={0} />
                  <Account current={false} index={1} />
                  <Account current={false} index={2} />
                  <Account current={false} index={3} />
                </div>
              </Modal.Window>
            </Modal>
          </div>
          <AssetPicker
            isError={isPositiveBalance}
            onToggle={toggleCurrency}
            isCurrencyToggle={isCurrencyToggle}
            purpose="send"
          />
          <div className="mt-6">
            <div className="flex flex-col pb-4">
              <label className="inline-flex items-center pb-2 text-secondary-900 text-sm leading-snug font-medium md:text-[1rem] md:leading-6">
                To
              </label>
              {isReceiverAddressSelected ? (
                <div className="flex flex-row flex-nowrap">
                  <div className="flex flex-row flex-nowrap flex-auto items-center h-[62px] w-0 py-0 px-3 bg-white border border-solid border-[rgb(175,180,192,0.4)] rounded-lg transition-[border-color] duration-150 ease-in-out">
                    <div className="flex flex-row flex-nowrap items-center flex-auto w-0 border-0 outline-none text-brand-500 text-xs leading-[140%]">
                      <AccountAvatar border margin="0" />
                      <div className="ml-3 text-start ps-1 text-secondary-900 text-sm leading-[140%] font-medium text-ellipsis whitespace-[inherit] break-words overflow-hidden">
                        Account 2
                        <p className="text-secondary-500 text-xs leading-5 md:text-sm md:leading-snug text-ellipsis whitespace-nowrap overflow-hidden">
                          {addressFormatter(address)}
                        </p>
                      </div>
                    </div>
                    <button className="flex justify-center items-center bg-none border-none py-0 px-2 w-6 min-w-6 h-6 text-[16px] text-secondary-900 rounded-lg cursor-pointer hover:bg-secondary-200">
                      <Icon imgUrl="src/assets/images/close.svg" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-row flex-nowrap">
                  <div
                    className={`flex flex-row flex-nowrap flex-auto items-center w-0 p-3 bg-white rounded-lg border border-solid transition-[border-color] ease-in-out hover:border-[rgb(175,180,192,1)] ${
                      isInputFocus
                        ? "border-[rgb(175,180,192,1)]"
                        : "border-[rgb(175,180,192,0.4)]"
                    }`}
                  >
                    <input
                      type="text"
                      placeholder="Enter public address (0x) or domain name"
                      dir="auto"
                      spellCheck="false"
                      className="flex-auto w-0 border-0 outline-none bg-white text-secondary-900 text-sm leading-[140%]"
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                    <button
                      aria-label="Scan QR code"
                      className="flex justify-center items-center py-0 px-2 text-[16px] h-6 w-8 min-w-8 bg-none border-none rounded-lg text-brand-500 cursor-pointer"
                    >
                      <Icon imgUrl="src/assets/images/scan.svg" size="big" />
                    </button>
                  </div>
                </div>
              )}
            </div>
            <AssetPicker
              isCurrencyToggle={isCurrencyToggle}
              onToggle={toggleCurrency}
              purpose="receive"
            />
            {/* Tabs start */}
            {!isReceiverAddressSelected && (
              <div className="w-full pb-0">
                <div className="flex-row">
                  <ul className="flex flex-row justify-start gap-1 top-0 border-b-0 relative bg-transparent text-sm z-[2] list-none">
                    <li
                      className={`flex-row w-6/12 transition-[color,_border-color] ease-linear ${
                        activeTab === 0
                          ? "text-brand-500 border-b-2 border-solid border-b-brand-500"
                          : ""
                      }`}
                      onClick={() => handleTabSelect(0)}
                    >
                      <button className="block w-full min-w-[50px] p-2 border-none text-sm leading-snug font-medium md:text-[1rem] md:leading-6 text-center bg-[unset] text-[unset] cursor-pointer ">
                        Your accounts
                      </button>
                    </li>
                    <li
                      className={`flex-row w-6/12 transition-[color,_border-color] ease-linear ${
                        activeTab === 1
                          ? "text-brand-500 border-b-2 border-solid border-b-brand-500"
                          : ""
                      }`}
                      onClick={() => handleTabSelect(1)}
                    >
                      {" "}
                      <button className="block w-full min-w-[50px] p-2 border-none text-sm leading-snug font-medium md:text-[1rem] md:leading-6 text-center bg-[unset] text-[unset] cursor-pointer ">
                        Contacts
                      </button>
                    </li>
                  </ul>
                  <div className="flex-row">
                    {activeTab === 0 && (
                      <div className="flex flex-col pb-4">
                        <Account current index={0} noEdit />
                        <Account current={false} index={1} noEdit />
                        <Account current={false} index={2} noEdit />
                        <Account current={false} index={3} noEdit />
                      </div>
                    )}
                    {activeTab === 1 &&
                      (hasContact ? (
                        <div className="flex flex-col pb-4">
                          <div className="">
                            <div className=""></div>
                            <button className="flex items-center w-full p-4 cursor-pointer border-none bg-transparent hover:bg-secondary-200">
                              <AccountAvatar />
                              <div className="flex flex-col overflow-hidden">
                                <p className="w-full p-0 text-secondary-900 text-left text-sm leading-snug font-medium md:text-[14px] md:leading-6 text-ellipsis whitespace-nowrap overflow-hidden">
                                  Ade
                                </p>
                                <div className="flex text-secondary-500 text-xs leading-5 md:text-sm md:leading-snug text-ellipsis whitespace-nowrap overflow-hidden">
                                  <div>
                                    <div className="inline">
                                      {addressFormatter(address)}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col pb-4">
                          <div className="p-6 text-center">
                            <p className="mb-4 text-secondary-900 text-sm leading-snug font-bold md:text-[1rem] md:leading-6">
                              You don't have any contacts yet
                            </p>
                            <p className="mb-4 text-secondary-500 text-sm leading-snug md:text-[1rem] md:leading-6">
                              <span>
                                Contacts allow you to safely send transactions
                                to another account multiple times. To create a
                                contact,{" "}
                                <a
                                  href="#settings"
                                  className="text-brand-500 text-sm leading-snug underline-offset-2 transition-[underline] hover:underline md:text-[1rem] md:leading-6"
                                >
                                  click here
                                </a>
                              </span>
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex w-full p-4 gap-4">
          <button className="inline-flex justify-center items-center basis-6/12 w-full h-[48px] p-0 px-4 relative align-middle select-none cursor-pointer text-brand-500 bg-transparent text-sm leading-snug font-medium md:text-[1rem] md:leading-6 border border-solid border-brand-500 rounded-full hover:bg-brand-100 hover:shadow-[0_2px_8px_0_rgba(100,108,255,0.2)]">
            Cancel
          </button>
          <div className="inline-flex basis-6/12">
            <button
              disabled
              className="inline-flex justify-center items-center w-full h-[48px] p-0 px-4 relative align-middle select-none cursor-pointer text-white bg-brand-500 text-sm leading-snug font-medium md:text-[1rem] md:leading-6 border-none rounded-full hover:shadow-[0_2px_8px_0_rgba(100,108,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Send;
