import { useEffect, useState } from "react";
import AccountAvatar from "../icons/AccountAvatar";
import ArrowDown from "../icons/ArrowDown";
import Copy from "../icons/Copy";
import More from "../icons/More";
import CopySuccess from "../icons/CopySuccess";
import {
  readClipboardText,
  writeClipboardText,
} from "../../helpers/writeClipboardText";
import EthLogo from "../logos/EthLogo";

function Navigation() {
  const [isCopied, setIsCopied] = useState(false);
  const [isShowTooltip, setIsShowTooltip] = useState(false);
  const [isDelay, setIsDelay] = useState(false);

  const address = "0x2b5A8CD7f3bf420619a68B46d9e5088cA63f760F";
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
      if (clipboardText === address) {
        setIsCopied(true);
      } else {
        setIsCopied(false);
      }
    };

    // Set an interval to fetch the clipboard text periodically
    const intervalID = setInterval(fetchClipboardText, 30000); // Check every 3 seconds

    return () => clearInterval(intervalID);
  }, [address]);

  function onAddressEnter() {
    setIsShowTooltip(true);
  }
  function onAddressLeave() {
    if (isDelay) return;
    setIsShowTooltip(false);
  }

  async function handleCopyClipboard() {
    try {
      writeClipboardText(address);
      setIsCopied(true);
      setIsShowTooltip(true);
      setIsDelay(true);
    } catch (error) {
      setIsCopied(false);
      console.error(error);
    }
  }

  return (
    <nav className="w-full flex flex-col flex-nowrap items-center max-h-[68px] z-50">
      <div className="md:w-4/5 lg:w-[62%] h-[68px] p-2 pl-4 pr-4 grid grid-cols-[1fr_2fr_1fr] gap-2 items-center bg-white shadow-[0_2px_16px_0_rgba(0,0,0,0.1)]">
        <div>
          <button
            aria-label={`Network Menu ${network}`}
            className="flex items-center m-2 gap-2 h-8 max-w-[250px] pl-2 pr-4 bg-primary-100 border-none rounded-full cursor-pointer"
          >
            <div className="flex justify-center items-center size-4 max-w-4 flex-[0 0 16px] text-xs leading-5 text-primary-500 bg-primary-100 border border-solid border-transparent rounded-[50%] overflow-hidden uppercase">
              <div className="relative size-full">
                <EthLogo />
              </div>
            </div>
            <span className="text-sm leading-[1.375rem] text-primary-500 font-medium text-ellipsis whitespace-nowrap overflow-hidden">
              {network}
            </span>
            <span className="inline-block ml-auto size-3 max-w-3 flex-[0 0 12px]">
              <div className="relative size-full">
                <ArrowDown />
              </div>
            </span>
          </button>
          <div className="todo"></div>
          <div className="todo"></div>
          <div className="todo"></div>
        </div>
        <div className="flex flex-col items-center text-primary-500 text-ellipsis whitespace-nowrap ">
          <button className="inline-flex justify-center items-center h-8 px-2 max-w-full p-0 gap-2 rounded-lg relative text-ellipsis whitespace-nowrap overflow-hidden align-middle select-none bg-transparent hover:bg-secondary-200 hover:shadow-none">
            <span className="flex items-center gap-2 text-primary-500 text-ellipsis whitespace-nowrap overflow-hidden">
              <div className="flex justify-center items-center text-xs uppercase size-4 max-w-4 flex-[0 0 16px] overflow-hidden bg-white rounded-[50%]">
                <div className="flex">
                  <div className="inline-block size-4 m-0 p-0 overflow-hidden rounded-[50px] bg-[rgb(245,204,0)]">
                    <div className="size-full relative">
                      <AccountAvatar />
                    </div>
                  </div>
                </div>
              </div>
              <span className="font-bold text-ellipsis whitespace-nowrap overflow-hidden">
                Account 1
              </span>
            </span>
            <span className="inline-block ms-1 size-4 max-w-4 flex-[0 0 16px]">
              <div className="relative size-full">
                <ArrowDown />
              </div>
            </span>
          </button>
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
                    {`${address.slice(0, 7)}...${address.slice(
                      address.length - 5,
                      address.length
                    )}`}
                  </span>
                </span>
                <span className="inline-block ms-1 size-4 max-w-4 flex-[0 0 16px]">
                  <div className="relative size-full text-secondary-500">
                    {isCopied ? <CopySuccess /> : <Copy />}
                  </div>
                </span>
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
              >
                <span className="inline-block flex-[0 0 1em] size-4 max-w-4 bg-transparent relative">
                  <More />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
