import React, { useEffect, useState } from "react";
import Icon from "../../ui/Icon";
import SystemButton from "../../ui/SystemButton";

interface AddContactProps {
  onSave: (name: string, address: string) => void;
  onCancel: () => void;
}

function AddContact({ onSave, onCancel }: AddContactProps) {
  const [contactName, setContactName] = useState("");
  const [contactAddress, setContactAddress] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [isTwoFocus, setIsTwoFocus] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (contactName && contactAddress) {
      if (contactAddress.length === 42) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    } else {
      setIsDisabled(true);
    }
  }, [contactAddress, contactName]);

  function handleContactName(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setContactName(value);
  }
  function handleContactAddress(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setContactAddress(value);
  }

  function handleFocus() {
    setIsFocus(true);
  }

  function handleBlur() {
    setIsFocus(false);
  }
  function handleTwoFocus() {
    setIsTwoFocus(true);
  }

  function handleTwoBlur() {
    setIsTwoFocus(false);
  }

  return (
    <div className="contact_form flex flex-col flex-nowrap w-full h-full p-0 pt-4 pb-0 ">
      <div className="flex-auto h-full pt-0">
        <div className="flex flex-col flex-nowrap px-6 pb-0 pt-0">
          <div className="mt-3 text-secondary-600 text-sm leading-[140%] font-normal">
            Username
          </div>
          <div className="inline-flex flex-col w-full min-w-0 mt-2 mb-1 m-0 p-0 relative border-0 align-top ">
            <div
              className={`flex items-center text-secondary-900 w-full h-[48px] px-4 relative bg-white rounded-lg text-sm border border-solid cursor-text box-border tracking-[0.00938em] leading-[1.1876em] hover:border-brand-500 ${
                isFocus ? "border-brand-500" : "border-[rgba(187,192,197,0.9)]"
              }`}
            >
              <input
                type="text"
                placeholder="Add alias"
                autoComplete="off"
                value={contactName}
                className="block w-full h-[1.1876em] min-w-0 m-0 pt-[3px] pb-[7px] px-0 box-content leading-6 text-ellipsis whitespace-nowrap border-none bg-none focus-visible:outline-none text-secondary-900"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleContactName}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-nowrap px-6 pb-0 pt-6">
          <div className="mt-3 text-secondary-600 text-sm leading-[140%] font-normal">
            Ethereum public address
          </div>
          <div className="flex flex-row flex-nowrap">
            <div
              className={`flex flex-row flex-nowrap flex-auto items-center w-0 p-3 bg-white rounded-lg border border-solid transition-[border-color] ease-in-out hover:border-brand-500 ${
                isTwoFocus
                  ? "border-brand-500"
                  : "border-[rgb(175,180,192,0.4)]"
              }`}
            >
              <input
                type="text"
                placeholder="Enter public address (0x) or domain name"
                dir="auto"
                spellCheck="false"
                value={contactAddress}
                className="flex-auto w-0 border-0 outline-none bg-white text-secondary-900 text-sm leading-[140%]"
                onFocus={handleTwoFocus}
                onBlur={handleTwoBlur}
                onChange={handleContactAddress}
              />
              <button
                aria-label="Scan QR code"
                className="flex justify-center items-center py-0 px-2 text-[16px] h-6 w-8 min-w-8 bg-none border-none rounded-lg text-brand-500 cursor-pointer"
              >
                <Icon imgUrl="src/assets/images/scan.svg" size="big" />
              </button>
            </div>
          </div>
          <div className="bg-white absolute top-[338px] w-[309px] max-h-[96px] box-border rounded-md overflow-y-auto z-10 shadow-[0_2px_8px_0_rgba(0,0,0,0.1)]"></div>
        </div>
      </div>
      <div className="flex justify-center flex-col flex-nowrap flex-[0_0_auto] w-full border-t border-solid border-[rgba(187,192,197,0.9)]">
        <footer className="flex flex-row justify-center p-4 flex-[0_0_auto]">
          <SystemButton
            label="Cancel"
            noHeight
            margin="mr-4"
            onClick={onCancel}
          />
          <SystemButton
            label="Save"
            noHeight
            type="primary"
            isDisabled={isDisabled}
            onClick={() => onSave(contactName, contactAddress)}
          />
        </footer>
      </div>
    </div>
  );
}

export default AddContact;
