import React, { useEffect, useState } from "react";
import {
  readClipboardText,
  writeClipboardText,
} from "../../helpers/writeClipboardText";
import Modal from "../modal/Modal";
import NetworkAvatar from "../../ui/NetworkAvatar";
import SearchInput from "../../ui/SearchInput";
import Networks from "../popups/Networks";
import Icon from "../../ui/Icon";
import MenuItem from "../../ui/MenuItem";
import { addressFormatter } from "../../helpers/addressFormatter";
import AccountAvatarOne from "../icons/AccountAvatarOne";
import { useGlobal } from "../../contexts/GlobalContext";
import changeUrlLocation from "../../helpers/changeUrlLocation";
import { useSelector } from "react-redux";
import { getConfig } from "../../slices/configSlice";
import AccountWindow from "../popups/AccountWindow";

function Navigation() {
  const [isCopied, setIsCopied] = useState(false);
  const [isShowTooltip, setIsShowTooltip] = useState(false);
  const [isDelay, setIsDelay] = useState(false);
  const [isNotification, setIsNotification] = useState(true);
  const [isSingle, setIsSingle] = useState(false);

  const { selectedAccount } = useSelector(getConfig);
  const { isShowGlobalMenu, showMenu } = useGlobal();

  const network = "Ethereum Mainnet";

  useEffect(() => {
    if (isCopied) {
      const timeoutID = setTimeout(() => {
        setIsShowTooltip(false);
        setIsDelay(false);
      }, 2000);

      return () => {
        clearTimeout(timeoutID);
      };
    }
  }, [isCopied]);

  useEffect(() => {
    const fetchClipboardText = async () => {
      const clipboardText = await readClipboardText();
      if (clipboardText === selectedAccount?.address) {
        setIsCopied(true);
      } else {
        setIsCopied(false);
      }
    };

    // Set an interval to fetch the clipboard text periodically
    const intervalID = setInterval(fetchClipboardText, 30000);

    return () => clearInterval(intervalID);
  }, [selectedAccount?.address]);

  function onAddressEnter() {
    setIsShowTooltip(true);
  }

  function onAddressLeave() {
    if (isDelay) return;
    setIsShowTooltip(false);
  }

  async function handleCopyClipboard() {
    try {
      writeClipboardText(selectedAccount?.address);
      setIsCopied(true);
      setIsShowTooltip(true);
      setIsDelay(true);
    } catch (error) {
      setIsCopied(false);
      console.error(error);
    }
  }

  function handleMainMenu(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    showMenu();
  }

  return (
    <nav
      className={`flex flex-col flex-nowrap items-center w-full min-h-[68px] bg-primary-100 z-[55] ${
        isSingle ? "mb-4" : "mb-0"
      }`}
    >
      <div className="app-header-contents h-[68px] p-2 pl-4 pr-4 grid grid-cols-[1fr_2fr_1fr] gap-2 items-center bg-white shadow-[0_2px_16px_0_rgba(0,0,0,0.1)] ">
        <div>
          <Modal>
            <Modal.Open opens="network_options">
              <button
                aria-label={`Network Menu ${network}`}
                className="flex items-center m-2 gap-2 h-8 max-w-[250px] pl-2 pr-4 bg-primary-100 border-none rounded-full cursor-pointer"
              >
                <NetworkAvatar
                  networkName={network}
                  logoLink="src/assets/images/eth-logo.svg"
                />

                <span className="text-sm leading-[1.375rem] text-primary-500 font-medium text-ellipsis whitespace-nowrap overflow-hidden">
                  {network}
                </span>

                <Icon
                  imgUrl="src/assets/images/arrow-down.svg"
                  margin="ml-auto"
                  size="small"
                />
              </button>
            </Modal.Open>
            <Modal.Window
              name="network_options"
              headerText="Select a network"
              showButton
              buttonText="Add a custom network"
              fullHeight
              isFullWidth
              iconUrl="src/assets/images/add.svg"
            >
              <div className="overflow-auto h-full scrollbar-custom">
                <SearchInput placeholderText="Search" padding />
                <Networks />
              </div>
            </Modal.Window>
          </Modal>
        </div>
        <div className="flex flex-col items-center text-primary-500 text-ellipsis whitespace-nowrap">
          <Modal>
            <Modal.Open opens="account_options">
              <button className="inline-flex justify-center items-center h-8 px-2 max-w-full p-0 gap-2 rounded-lg relative text-ellipsis whitespace-nowrap overflow-hidden align-middle select-none bg-transparent hover:bg-secondary-200 hover:shadow-none">
                <span className="flex items-center gap-2 text-primary-500 text-ellipsis whitespace-nowrap overflow-hidden">
                  <div className="flex justify-center items-center text-xs uppercase size-4 max-w-4 flex-[0_0_16px] overflow-hidden bg-white rounded-[50%]">
                    <div className="flex">
                      <AccountAvatarOne />
                    </div>
                  </div>
                  <span className="font-bold text-ellipsis whitespace-nowrap overflow-hidden">
                    {selectedAccount.metadata.name}
                  </span>
                </span>
                <Icon imgUrl="src/assets/images/arrow-down.svg" margin="ms-1" />
              </button>
            </Modal.Open>
            <Modal.Window
              name="account_options"
              headerText="Select an account"
              showButton
              isFullWidth
              buttonText="Add account or hardware wallet"
              iconUrl="src/assets/images/add.svg"
            >
              <AccountWindow />
            </Modal.Window>
          </Modal>
          <div className="flex items-center relative">
            <div
              className={`flex absolute -left-[70%] -top-1 py-2 px-4 bg-white shadow-[0_1px_8px_0_rgba(0,0,0,0.2)] rounded z-[60] transition-all after:absolute after:top-[35%] after:-right-[3%] after:w-3 after:h-3 after:-z-10 after:bg-white after:block after:rotate-45 ${
                isShowTooltip ? "opacity-100 -left-[75%]" : "opacity-0"
              }`}
            >
              <p className="text-xs text-secondary-600 font-light">
                {isCopied ? "Address copied!" : "Copy to clipboard"}
              </p>
            </div>

            <div
              tabIndex={0}
              data-tooltipped
              data-original-title="Copy to clipboard"
              className="inline"
            >
              <button
                className="inline-flex justify-center items-center h-auto px-4 max-w-full p-0 rounded-lg relative font-medium text-ellipsis whitespace-nowrap overflow-hidden align-middle select-none text-primary-500 bg-transparent hover:bg-secondary-200 hover:shadow-none"
                onClick={handleCopyClipboard}
                onMouseEnter={onAddressEnter}
                onMouseLeave={onAddressLeave}
              >
                <span className="flex items-center gap-2 text-primary-500 text-ellipsis whitespace-nowrap overflow-hidden">
                  <span className="text-sm leading-6 font-medium text-secondary-500 text-ellipsis whitespace-nowrap overflow-hidden">
                    {addressFormatter(selectedAccount.address)}
                  </span>
                </span>
                {isCopied ? (
                  <Icon
                    imgUrl="src/assets/images/copy-success.svg"
                    margin="ms-1"
                    color="secondary-500"
                  />
                ) : (
                  <Icon
                    imgUrl="src/assets/images/copy.svg"
                    margin="ms-1"
                    color="secondary-500"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end ml-auto">
          <div className="flex gap-4">
            <div className="flex justify-end w-full">
              <div className="relative"></div>
              <button
                aria-label="Account options"
                className="inline-flex justify-center items-center border-none rounded-lg bg-transparent text-primary-500 w-6 h-6 min-w-6 p-0 cursor-pointer hover:bg-secondary-200"
                onClick={handleMainMenu}
              >
                <Icon imgUrl="src/assets/images/more.svg" />
              </button>
              {isShowGlobalMenu && (
                <div className="absolute top-0 bottom-auto right-auto left-0 w-auto min-w-56 overflow-hidden translate-x-[925px] translate-y-[145px] p-0 bg-white border rounded-lg border-none border-[rgba(187,192,197,0.4)] shadow-[0_2px_16px_0_rgba(0,0,0,0.1)]">
                  <MenuItem
                    menuText="Notifications"
                    showNotification
                    isNotification={isNotification}
                    iconUrl="src/assets/images/notification.svg"
                  />
                  <div className="h-[1px] w-full border border-b-0 border-solid border-secondary-300 opacity-50 "></div>
                  <MenuItem
                    menuText="Account details"
                    iconUrl="src/assets/images/scan-barcode.svg"
                  />

                  <MenuItem
                    menuText="View on explorer"
                    iconUrl="src/assets/images/export.svg"
                    showSubmenu
                  />

                  <div className="h-[1px] w-full border border-b-0 border-solid border-secondary-300 opacity-50 "></div>
                  <MenuItem
                    menuText="All Permissions"
                    iconUrl="src/assets/images/security-check.svg"
                  />

                  <MenuItem
                    menuText="Snaps"
                    iconUrl="src/assets/images/snaps.svg"
                  />

                  <MenuItem
                    menuText="Support"
                    iconUrl="src/assets/images/message-question.svg"
                  />

                  <MenuItem
                    menuText="Settings"
                    iconUrl="src/assets/images/settings.svg"
                    onClick={() => changeUrlLocation("settings")}
                  />

                  <MenuItem
                    menuText="Lock Walleth"
                    iconUrl="src/assets/images/lock.svg"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
