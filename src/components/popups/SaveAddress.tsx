import React, { useState } from "react";
import Icon from "../../ui/Icon";
import UnknownAddress from "../../ui/UnknownAddress";

function SaveAddress() {
  const [isFocused, setIsFocused] = useState(false);
  const [nickname, setNickname] = useState("");

  const address = "0x2b5A8CD7f3bf420619a68B46d9e5088cA63f760F";

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  function handleNickname(e: React.ChangeEvent<HTMLInputElement>) {
    setNickname(e.target.value);
  }

  return (
    <div className="px-4 overflow-y-visible max-h-full relative">
      <div className="text-center mb-4 mt-2">
        <UnknownAddress address={address} isFull />
      </div>
      <p className="mb-4 text-secondary-900 text-sm leading-[1.375rem] md:leading-6 md:text-[1rem] ">
        If you know this address, give it a nickname to recognize it in the
        future.
      </p>
      <div className="flex flex-col mb-4">
        <label
          htmlFor=""
          className="inline-flex items-center text-primary-500 text-sm leading-[1.375rem] font-medium md:text-[1rem] md:leading-6 cursor-default opacity-50 "
        >
          Address
        </label>
        <div className="inline-flex items-center pr-[5px] pl-0 border border-solid rounded opacity-50 border-secondary-500 h-[40px] bg-white ">
          <input
            type="text"
            value={address}
            disabled
            className="w-full flex-grow pl-4 pr-2 p-0 m-0 border-none bg-transparent text-inherit text-sm leading-[1.375rem] md:text-[1rem] md:leading-6 box-content opacity-50 text-ellipsis whitespace-nowrap"
          />
          <button className="flex justify-center items-center w-6 h-6 min-w-6 p-0 cursor-pointer bg-transparent text-secondary-500 rounded hover:bg-secondary-200">
            <Icon imgUrl="src/assets/images/copy.svg" />
          </button>
        </div>
      </div>
      <label className="inline-flex flex-col items-start w-full mb-4 text-primary-500 font-medium text-sm leading-[1.375rem] md:text-[1rem] md:leading-6">
        Nickname
        <div className="w-full">
          <div>
            <div className="flex flex-col">
              <div
                className={`inline-flex items-center w-full h-[40px] pl-0 pr-4 bg-white outline-0 border border-solid rounded transition-all ${
                  isFocused ? "border-secondary-500" : "border-secondary-300"
                }`}
              >
                <input
                  type="text"
                  placeholder="Choose a nickname"
                  value={nickname}
                  className="w-full flex-grow pl-4 pr-2 p-0 m-0 border-none bg-transparent text-inherit text-sm leading-[1.375rem] md:text-[1rem] md:leading-6 box-content opacity-100 text-ellipsis whitespace-nowrap focus:outline-none"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onChange={handleNickname}
                />
                <button
                  className="flex justify-center items-center w-6 h-6 min-w-6 p-0 cursor-pointer bg-transparent text-secondary-500 rounded hover:bg-secondary-200"
                  onClick={() => setNickname("")}
                >
                  <Icon imgUrl="src/assets/images/close.svg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </label>
      <div className=""></div>
    </div>
  );
}

export default SaveAddress;
