import React, { useEffect, useState } from "react";
import { addressFormatter } from "../../helpers/addressFormatter";
import Icon from "../../ui/Icon";
import AccountAvatar from "../../ui/AccountAvatar";
import Modal from "../modal/Modal";
import Account from "../popups/Account";
import AssetPicker from "../asset/AssetPicker";
import AddressPicker from "../asset/AddressPicker";
import Tabbed from "../../ui/Tabbed";
import { useSelector } from "react-redux";
import { getConfig } from "../../slices/configSlice";
import selectAccount from "../../db/selectAccount";
import { AccountType, Address } from "../../types/config";
import AccountPickerWindow from "../popups/AccountPickerWindow";
import ApiServes from "../../services/ApiServices";
import AddressListItem from "../lists/AddressListItem";

function Send() {
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [hasContact, setHasContact] = useState(true);
  const [isNegativeBalance, setIsNegativeBalance] = useState(false);
  const [isReceiverAddressSelected, setIsReceiverAddressSelected] =
    useState(false);
  const [isCurrencyToggle, setIsCurrencyToggle] = useState(false);
  const [sendValue, setSendValue] = useState<number | null>(null);
  const [receiveValue, setReceiveValue] = useState("0");
  const [accountBalance, setAccountBalance] = useState("");
  const [receiverAddressValue, setReceiverAddressValue] = useState("");
  const [isReceiverAddress, setIsReceiverAddress] = useState(false);

  const { selectedAccount, accounts, addressBook } = useSelector(getConfig);

  const [accountFrom, setAccountFrom] = useState(selectedAccount);
  const [accountTo, setAccountTo] = useState<AccountType>({} as AccountType);

  useEffect(() => {
    if (accountFrom.address) {
      async function fetchBalance() {
        const balance = new ApiServes();
        const accountBalance = await balance.getBalance(accountFrom.address);
        setAccountBalance(accountBalance);
      }

      fetchBalance();
    }
  }, [accountFrom.address]);

  useEffect(() => {
    if (accountBalance !== "" && sendValue !== null) {
      const balance = Number(accountBalance);

      if (balance - sendValue) {
        setIsNegativeBalance(true);
      } else {
        setIsNegativeBalance(false);
      }
    }
  }, [accountBalance, sendValue]);

  useEffect(() => {
    if (receiverAddressValue.length === 42) {
      setIsReceiverAddress(true);
    } else {
      setIsReceiverAddress(false);
    }
  }, [receiverAddressValue.length]);

  async function handleAccountFromSelection(account: AccountType) {
    // await selectAccount(accountId);
    // onCloseModal?.();
    setAccountFrom(account);
  }

  async function handleAccountToSelection(account: AccountType) {
    // await selectAccount(accountId);
    // onCloseModal?.();
    setAccountTo(account);
    setIsReceiverAddressSelected(true);
  }
  async function handleAddressToSelection(address: Address) {
    // await selectAccount(accountId);
    // onCloseModal?.();

    const receipient: AccountType = {
      address: address.address,
      id: address.id,
      metadata: {
        importTime: 0,
        keyring: "",
        lastSelected: 0,
        name: address.name,
        nameLastUpdated: "",
      },
      methods: [],
      options: {},
      type: "",
    };
    setAccountTo(receipient);
    setIsReceiverAddressSelected(true);
  }

  function handleFocus() {
    setIsInputFocus(true);
  }

  function handleTabSelect(index: number) {
    setActiveTab(index);
  }

  function handleBlur() {
    setIsInputFocus(false);
  }

  function toggleCurrency() {
    setIsCurrencyToggle((prevState) => !prevState);
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);
    setSendValue(value);
    setReceiveValue(value.toString());
  }

  function handleReceiverAddressInput(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setReceiverAddressValue(value);
  }

  function removeReceiverAddress() {
    if (isReceiverAddressSelected) {
      setIsReceiverAddressSelected(false);
      setAccountTo({} as AccountType);
      setSendValue(null);
      setIsNegativeBalance(false);
    } else if (isReceiverAddress) {
      setSendValue(null);
      setIsReceiverAddress(false);
      setReceiverAddressValue("");
      setIsNegativeBalance(false);
    }
  }

  function handleBack() {
    window.location.hash = "";
  }

  return (
    <div className="flex flex-row justify-center w-full h-full bg-primary-100">
      <div className="flex flex-col h-full w-[408px] bg-white">
        <div className="flex justify-center w-full p-4">
          <div className="min-w-6">
            <button
              className="inline-flex justify-center items-center w-6 h-6 min-w-6 p-0 bg-transparent text-secondary-600 cursor-pointer border-none rounded-lg hover:bg-secondary-200"
              onClick={handleBack}
            >
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
              <Modal.Open opens="account_selections">
                <div>
                  <AddressPicker
                    address={accountFrom.address}
                    account={accountFrom.metadata.name}
                  />
                </div>
              </Modal.Open>
              <Modal.Window
                name="account_selections"
                headerText="Select an account"
                buttonText="Add account or hardware wallet"
                iconUrl="src/assets/images/add.svg"
                isFullWidth
              >
                <AccountPickerWindow
                  accountFrom={accountFrom}
                  onSelect={handleAccountFromSelection}
                />
              </Modal.Window>
            </Modal>
          </div>
          {(isReceiverAddressSelected || isReceiverAddress) && (
            <AssetPicker
              isError={isNegativeBalance}
              onToggle={toggleCurrency}
              isCurrencyToggle={isCurrencyToggle}
              purpose="send"
              sendValue={sendValue}
              tokenBalance={Number(accountBalance)}
              onChange={handleInput}
            />
          )}
          <div className="mt-6">
            <div className="flex flex-col pb-4">
              <label className="inline-flex items-center pb-2 text-secondary-900 text-sm leading-snug font-medium md:text-[1rem] md:leading-6">
                To
              </label>
              {isReceiverAddressSelected || isReceiverAddress ? (
                <div className="flex flex-row flex-nowrap">
                  <div className="flex flex-row flex-nowrap flex-auto items-center h-[62px] w-0 py-0 px-3 bg-white border border-solid border-[rgb(175,180,192,0.4)] rounded-lg transition-[border-color] duration-150 ease-in-out">
                    <div className="flex flex-row flex-nowrap items-center flex-auto w-0 border-0 outline-none text-brand-500 text-xs leading-[140%]">
                      <AccountAvatar border margin="0" />
                      <div className="ml-3 text-start ps-1 text-secondary-900 text-sm leading-[140%] font-medium text-ellipsis whitespace-[inherit] break-words overflow-hidden">
                        {isReceiverAddressSelected
                          ? accountTo.metadata.name
                          : addressFormatter(receiverAddressValue)}
                        <p className="text-secondary-500 text-xs leading-5 md:text-sm md:leading-snug text-ellipsis whitespace-nowrap overflow-hidden">
                          {isReceiverAddressSelected
                            ? addressFormatter(accountTo.address)
                            : addressFormatter(receiverAddressValue)}
                        </p>
                      </div>
                    </div>
                    <button
                      className="flex justify-center items-center bg-none border-none py-0 px-2 w-6 min-w-6 h-6 text-[16px] text-secondary-900 rounded-lg cursor-pointer hover:bg-secondary-200"
                      onClick={removeReceiverAddress}
                    >
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
                      onChange={handleReceiverAddressInput}
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
            {(isReceiverAddressSelected || isReceiverAddress) && (
              <AssetPicker
                isCurrencyToggle={isCurrencyToggle}
                onToggle={toggleCurrency}
                purpose="receive"
                receiveValue={receiveValue}
              />
            )}
            {/* Tabs start */}
            {!isReceiverAddressSelected && !isReceiverAddress && (
              <div className="w-full pb-0">
                <div className="flex-row">
                  <Tabbed
                    tabOneText="Your accounts"
                    tabTwoText="Contacts"
                    activeTab={activeTab}
                    onTabClick={handleTabSelect}
                  />
                  <div className="flex-row">
                    {activeTab === 0 && (
                      <div className="flex flex-col pb-4">
                        {accounts.map((acount, i) => (
                          <Account
                            key={i}
                            account={acount}
                            isCurrent={acount.id === accountTo?.id}
                            index={i}
                            noEdit
                            onSelect={() => handleAccountToSelection(acount)}
                          />
                        ))}
                      </div>
                    )}
                    {activeTab === 1 &&
                      (hasContact ? (
                        <div className="flex flex-col pb-4">
                          <div className="">
                            <div className=""></div>
                            {addressBook.map((address, index) => (
                              <AddressListItem
                                key={address.id}
                                address={address}
                                index={index}
                                onClick={() =>
                                  handleAddressToSelection(address)
                                }
                              />
                            ))}
                            {/* NOTE will adjust address to contact address */}
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
              disabled={!isNegativeBalance || !isReceiverAddress}
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
