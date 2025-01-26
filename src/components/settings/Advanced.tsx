import { useState } from "react";
import SystemButton from "../../ui/SystemButton";
import SettingsItemToggle from "../../ui/SettingsItemToggle";

function Advanced() {
  const [isInputFocus, setIsInputFocus] = useState(false);
  // const [isActiveIdenticon, setIsActiveIdenticon] = useState(0);

  function handleFocus() {
    setIsInputFocus(true);
  }

  function handleBlur() {
    setIsInputFocus(false);
  }

  return (
    <div className="settings-body p-4 pt-0">
      <div className="flex flex-col p-0 pt-4">
        <div className="flex flex-col min-w-0">
          <span>State logs</span>
          <span className="text-secondary-500 text-[0.895rem] leading-[140%] font-medium">
            State logs contain your public account addresses and sent
            transactions.
          </span>
        </div>
        <div className="flex flex-col min-w-0">
          <div className="flex flex-col mt-2 max-w-[300px]">
            <SystemButton label="Download state logs" />
          </div>
        </div>
      </div>
      <div className="flex flex-col p-0 pt-4">
        <div className="flex flex-col min-w-0">
          <span>Clear activity and nonce data</span>
          <span className="text-secondary-500 text-[0.895rem] leading-[140%] font-medium">
            This resets the account's nonce and erases data from the activity
            tab in your wallet. Only the current account and network will be
            affected. Your balances and incoming transactions won't change.
          </span>
        </div>
        <div className="flex flex-col min-w-0">
          <div className="flex flex-col mt-2 max-w-[300px]">
            <SystemButton label="Clear activity tab data" type="danger" />
          </div>
        </div>
      </div>

      <SettingsItemToggle
        title="Smart Transactions"
        details="Turn on Smart Transactions for more reliable and secure
              transactions on Ethereum Mainnet."
        showLink
        linkUrl=""
        linkText="Learn more"
      />
      <SettingsItemToggle
        title="Show hex data"
        details="Select this to show the hex data field on the send screen."
      />
      <SettingsItemToggle
        title="Show conversion on test networks"
        details="Select this to show fiat conversion on test networks."
      />
      <SettingsItemToggle
        title="Show test networks"
        details="Select this to show test networks in network list."
      />
      <SettingsItemToggle
        title="Show extension in full-size view"
        details="Turn this on to make full-size view your default when you click the extension icon."
      />
      <SettingsItemToggle
        title="Customize transaction nonce"
        details="Turn this on to change the nonce (transaction number) when sending assets. This is an advanced feature, use cautiously."
      />

      <div className="flex flex-col p-0 pt-4">
        <div className="flex flex-col min-w-0">
          <span>Auto-lock timer (minutes)</span>
          <div className="text-secondary-500 text-[0.895rem] leading-[140%]">
            Set the idle time in minutes before Walleth will become locked.
          </div>
        </div>
        <div className="flex flex-col min-w-0">
          <div className="flex flex-col max-w-[300px] mt-2">
            <div className="inline-flex flex-col m-0 py-0 w-full min-w-0 mt-2 mb-1 border-0 relative align-top">
              <div
                className={`flex items-center text-secondary-900 h-[48px] px-4 bg-white rounded-lg text-sm border border-solid cursor-text box-border tracking-[0.00938em] leading-[1.1876em] hover:border-brand-500 ${
                  isInputFocus
                    ? "border-brand-500"
                    : "border-[rgba(187,192,197,0.9)]"
                }`}
              >
                <input
                  type="text"
                  placeholder="0"
                  dir="auto"
                  className="block w-full min-w-0 h-[1.1876em] m-0 pb-[7px] pt-[3px] bg-none box-content text-secondary-900 focus:outline-none placeholder:text-secondary-600"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <button className="flex justify-center items-center self-end w-1/4 p-[5px] box-border text-sm leading-[140%] font-semibold bg-brand-500 text-white border border-solid border-brand-500 cursor-pointer rounded-[100px] appearance-none will-change-[box-shadow] transition-[box-shadow] ease-[cubic-bezier(0.6,_-0.28,_0.735,_0.045)] hover:shadow-[0_2px_8px_0_rgba(100,108,255,0.4)]">
              Save
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-0 pt-4">
        <div className="flex flex-col min-w-0">
          <span>Export your data</span>
          <span className="text-secondary-500 text-[0.895rem] leading-[140%] font-medium">
            You can export data like your contacts and preferences.
          </span>
        </div>
        <div className="flex flex-col min-w-0">
          <div className="flex flex-col mt-2 max-w-[300px]">
            <SystemButton label="Download" />
          </div>
        </div>
      </div>
      <SettingsItemToggle
        title="Dismiss Secret Recovery Phrase backup reminder"
        details="Turn this on to dismiss the Secret Recovery Phrase backup reminder message. We highly recommend that you back up your Secret Recovery Phrase to avoid loss of funds."
      />
    </div>
  );
}

export default Advanced;
