import { useState } from "react";
import Icon from "../../ui/Icon";
import ToggleButton from "../../ui/ToggleButton";

function General() {
  const [isShowNativeToken, setIsShowNativeToken] = useState(false);
  const [isZeroBalance, setIsZeroBalance] = useState(false);
  const [isActiveIdenticon, setIsActiveIdenticon] = useState(0);

  function handleTokenToggle() {
    setIsShowNativeToken((prevState) => !prevState);
  }
  function toggleZeroBalance() {
    setIsZeroBalance((prevState) => !prevState);
  }

  function handleIdenticonSelection(index: number) {
    setIsActiveIdenticon(index);
  }

  return (
    <div className="settings-body p-4 pt-0">
      <div className="flex flex-col p-0 pt-4">
        <div className="flex flex-col min-w-0">
          <p className="text-secondary-900 text-sm leading-[22px] font-medium">
            Currency
          </p>
        </div>
        <div className="flex flex-col min-w-0">
          <div className="flex flex-col mt-2 max-w-[300px]">
            <div className="inline-block h-[48px] relative">
              <select
                name=""
                id=""
                className="w-full py-3 pr-[40px] pl-4 bg-white rounded-lg text-secondary-900 border border-solid appearance-none text-sm leading-[140%] border-[rgba(187,192,197,0.9)]"
              >
                <option value="">USD - United States Dollar</option>
                <option value="">EUR - Euro</option>
              </select>
              <div className="absolute top-[50%] right-4 translate-y-[-50%] pointer-events-none">
                <Icon imgUrl="src/assets/images/arrow-down.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center p-0 pt-4">
        <div className="flex flex-col min-w-0">
          <p className="text-secondary-900 text-sm leading-[22px] font-medium">
            Show native token as main balance
          </p>
        </div>
        <div className="flex flex-col max-w-[300px] mt-2">
          <ToggleButton
            isToggled={isShowNativeToken}
            onToggle={handleTokenToggle}
          />
        </div>
      </div>
      <div className="flex flex-col p-0 pt-4">
        <div className="flex flex-col min-w-0">
          <p className="text-secondary-900 text-sm leading-[22px] font-medium">
            Current language
          </p>
        </div>
        <div className="flex flex-col min-w-0">
          <div className="flex flex-col mt-2 max-w-[300px]">
            <div className="inline-block h-[48px] relative">
              <select
                name=""
                id=""
                className="w-full py-3 pr-[40px] pl-4 bg-white rounded-lg text-secondary-900 border border-solid appearance-none text-sm leading-[140%] border-[rgba(187,192,197,0.9)]"
              >
                <option value="">English</option>
                <option value="">German</option>
                <option value="">French</option>
                <option value="">Spanish</option>
                <option value="">Italian</option>
              </select>
              <div className="absolute top-[50%] right-4 translate-y-[-50%] pointer-events-none">
                <Icon imgUrl="src/assets/images/arrow-down.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-0 pt-4">
        <div className="flex flex-col min-w-0">
          <p className="text-secondary-900 text-sm leading-[22px] font-medium">
            Theme
          </p>
          <div className="text-secondary-600 text-sm leading-[22px]">
            Choose your preferred Walleth theme.
          </div>
        </div>
        <div className="flex flex-col min-w-0">
          <div className="flex flex-col mt-2 max-w-[300px]">
            <div className="inline-block h-[48px] relative">
              <select
                name=""
                id=""
                className="w-full py-3 pr-[40px] pl-4 bg-white rounded-lg text-secondary-900 border border-solid appearance-none text-sm leading-[140%] border-[rgba(187,192,197,0.9)]"
              >
                <option value="">Light</option>
                <option value="">Dark</option>
                <option value="">System</option>
              </select>
              <div className="absolute top-[50%] right-4 translate-y-[-50%] pointer-events-none">
                <Icon imgUrl="src/assets/images/arrow-down.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-0 pt-4">
        <div className="flex flex-col min-w-0">
          <p className="text-secondary-900 text-sm leading-[22px] font-medium">
            Account identicon
          </p>
          <p className="text-secondary-600 text-sm leading-[22px] mb-3">
            Jazzicons and Blockies are two different styles of unique icons that
            help you identify an account at a glance.
          </p>
          <div className="flex flex-row items-baseline">
            <button
              className="flex flex-row justify-between items-center bg-[unset] border border-solid border-transparent cursor-pointer"
              onClick={() => handleIdenticonSelection(0)}
            >
              <div
                className={`flex justify-center items-center w-[40px] h-[40px] rounded-[40px] ${
                  isActiveIdenticon === 0
                    ? "border-[2px] border-solid border-brand-500"
                    : "border-none"
                }`}
              >
                <div className="block w-[32px] h-[32px] rounded-2xl">
                  <div className="inline-block w-[32px] h-[32px] m-0 p-0 overflow-hidden rounded-[50px] bg-[rgb(245,204,0)]">
                    <svg x="0" y="0" width="32" height="32">
                      <rect
                        x="0"
                        y="0"
                        width="32"
                        height="32"
                        transform="translate(-0.035184136459420805 2.3797891171110326) rotate(128.5 16 16)"
                        fill="#1893F2"
                      ></rect>
                      <rect
                        x="0"
                        y="0"
                        width="32"
                        height="32"
                        transform="translate(-12.423438862341186 1.2328918067628662) rotate(244.6 16 16)"
                        fill="#FA7D00"
                      ></rect>
                      <rect
                        x="0"
                        y="0"
                        width="32"
                        height="32"
                        transform="translate(7.374821524232092 24.9931280713878) rotate(172.8 16 16)"
                        fill="#C81447"
                      ></rect>
                    </svg>
                  </div>
                </div>
              </div>
              <h6 className="mr-12 ml-3 my-0 text-secondary-900 text-xs leading-5 md:text-sm md:leading-snug">
                Jazzicons
              </h6>
            </button>
            <button
              className="flex flex-row justify-between items-center bg-[unset] border border-solid border-transparent cursor-pointer"
              onClick={() => handleIdenticonSelection(1)}
            >
              <div
                className={
                  isActiveIdenticon
                    ? "flex justify-center items-center w-[40px] h-[40px] rounded-[40px] border-[2px] border-solid border-brand-500"
                    : ""
                }
              >
                <img
                  src="src/assets/images/blockie.svg"
                  alt="Blockies identicon"
                  width="32px"
                  height="32px"
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <h6 className="mr-0 ml-3 my-3 text-secondary-900 text-xs leading-5 md:text-sm md:leading-snug">
                Blockies
              </h6>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center p-0 pt-4">
        <div className="flex flex-col min-w-0">
          <p className="text-secondary-900 text-sm leading-[22px] font-medium">
            Hide tokens without balance
          </p>
        </div>
        <div className="flex flex-col max-w-[300px] mt-2">
          <ToggleButton
            isToggled={isZeroBalance}
            onToggle={toggleZeroBalance}
          />
        </div>
      </div>
    </div>
  );
}

export default General;
