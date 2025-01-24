import { useState } from "react";
import Icon from "../../ui/Icon";
import SystemButton from "../../ui/SystemButton";
import AccountAvatar from "../../ui/AccountAvatar";

interface AddContactProps {
  onCancel: () => void;
}

function EditContact({ onCancel }: AddContactProps) {
  const [isFocus, setIsFocus] = useState(false);
  const [isTwoFocus, setIsTwoFocus] = useState(false);

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
    <div className="contact_form flex flex-col flex-nowrap h-full p-0 pt-4 pb-0 ">
      <div className="flex justify-between items-center w-full px-6">
        <div className="flex items-center pr-2 overflow-hidden">
          <AccountAvatar width="40" margin="m-0" />
          <p className="ms-4 text-left p-0 text-secondary-900 leading-6 md:text-[1.125rem] font-semibold text-ellipsis whitespace-nowrap overflow-hidden">
            Unknown address
          </p>
        </div>
        <div className="p-0 leading-[140%]">
          <a
            role="button"
            className="contents w-full py-3 px-4 bg-transparent rounded-md box-border cursor-pointer text-error-200 text-sm leading-[140%] transition-[border-color,_background-color] duration-[0.3s]"
          >
            Delete contact
          </a>
        </div>
      </div>

      <div className="flex-auto">
        <div className="flex flex-col flex-nowrap px-6 pb-0 pt-0">
          <div className="mt-3 text-secondary-600 text-sm leading-[140%] font-normal">
            Username
          </div>
          <div className="inline-flex flex-col w-full min-w-0 mt-2 mb-1 m-0 p-0 relative border-0 align-top">
            <div
              className={`flex items-center text-secondary-900 w-full h-[48px] px-4 relative bg-white rounded-lg text-sm border border-solid cursor-text box-border tracking-[0.00938em] leading-[1.1876em] hover:border-brand-500 ${
                isFocus ? "border-brand-500" : "border-[rgba(187,192,197,0.9)]"
              }`}
            >
              <input
                type="text"
                placeholder="Add alias"
                value="Unknown address"
                autoComplete="off"
                className="block w-full h-[1.1876em] min-w-0 m-0 pt-[3px] pb-[7px] px-0 box-content leading-6 text-ellipsis whitespace-nowrap border-none bg-none focus-visible:outline-none text-secondary-900"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-nowrap px-6 pb-0 pt-0">
          <div className="mt-3 text-secondary-600 text-sm leading-[140%] font-normal">
            Ethereum public address
          </div>
          <div className="inline-flex flex-col w-full min-w-0 mt-2 mb-1 m-0 p-0 relative border-0 align-top">
            <div
              className={`flex flex-row flex-nowrap flex-auto items-center w-full h-[90px] py-0 px-4 pt-[3px] text-secondary-900 bg-white text-sm relative cursor-text tracking-[0.00938em] leading-[1.1876em] rounded-lg border border-solid transition-[border-color] ease-in-out box-border hover:border-brand-500 ${
                isTwoFocus
                  ? "border-brand-500"
                  : "border-[rgb(175,180,192,0.4)]"
              }`}
            >
              <textarea
                name=""
                id="address"
                rows={4}
                dir="auto"
                className="block w-full min-w-0 h-auto pt-2.5 p-0 bg-none text-secondary-900 box-content resize-none focus:outline-0 border-0"
                value="0x2b5a8cd7f3bf420619a68b46d9e5088ca63f760f"
              ></textarea>
            </div>
          </div>
          <div className="bg-white absolute top-[338px] w-[309px] max-h-[96px] box-border rounded-md overflow-y-auto z-10 shadow-[0_2px_8px_0_rgba(0,0,0,0.1)]"></div>
        </div>
        <div className="flex flex-col flex-nowrap px-6 pb-0 pt-0">
          <div className="mt-3 text-secondary-600 text-sm leading-[140%] font-normal">
            Memo
          </div>
          <div className="inline-flex flex-col w-full min-w-0 mt-2 mb-1 m-0 p-0 relative border-0 align-top">
            <div
              className={`flex flex-row flex-nowrap flex-auto items-center w-full h-[96px] py-0 px-4 pt-[3px] text-secondary-900 bg-white text-sm relative cursor-text tracking-[0.00938em] leading-[1.1876em] rounded-lg border border-solid transition-[border-color] ease-in-out box-border hover:border-brand-500 ${
                isTwoFocus
                  ? "border-brand-500"
                  : "border-[rgb(175,180,192,0.4)]"
              }`}
            >
              <textarea
                name=""
                id="address"
                rows={3}
                dir="auto"
                className="block w-full min-w-0 h-auto pt-2.5 p-0 bg-none text-secondary-900 box-content resize-none focus:outline-0 border-0"
              ></textarea>
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
          <SystemButton label="Save" noHeight type="primary" isDisabled />
        </footer>
      </div>
    </div>
  );
}

export default EditContact;
