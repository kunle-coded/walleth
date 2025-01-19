import NetworkAvatar from "../../ui/NetworkAvatar";
import { Open, Window } from "../modal/PopupModal";
import Icon from "../../ui/Icon";
import AccountOption from "./AccountOption";
import AccountAvatar from "../../ui/AccountAvatar";

interface AccountProps {
  current: boolean;
  index: number;
  noEdit?: boolean;
  onSelect?: () => void;
}

function Account({ current, index, noEdit, onSelect }: AccountProps) {
  return (
    <div className="block">
      <div
        className={`flex justify-center w-full p-4 relative text-primary-500 cursor-pointer transition-[background-color] ease-linear ${
          current ? "bg-brand-100" : "bg-transparent hover:bg-secondary-200"
        }`}
        onClick={onSelect}
      >
        {current && (
          <div className="absolute left-1 top-1 w-1 h-[calc(100%_-_8px)] bg-brand-500 rounded-[9999px]"></div>
        )}
        <div className="hidden"></div>
        <div className="hidden sm:flex">
          <AccountAvatar />
        </div>
        <div className="flex flex-col flex-[1] overflow-hidden">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div className="flex items-center gap-2 me-2 min-w-20 max-w-40">
                <button className="w-full p-0 text-sm font-semibold text-left text-inherit text-ellipsis whitespace-nowrap overflow-hidden bg-transparent border-none cursor-pointer">
                  Account {index + 1}
                </button>
              </div>
              <div className="flex flex-row justify-end items-center self-end min-w-[60px] max-w-[130px] text-inherit text-end text-sm text-ellipsis whitespace-nowrap overflow-hidden">
                <div className="inline text-ellipsis overflow-hidden">
                  <span className="text-ellipsis whitespace-nowrap overflow-hidden text-inherit">
                    $0.00
                  </span>
                  <span className="ms-1 text-ellipsis whitespace-nowrap overflow-hidden text-xs text-inherit">
                    USD
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <p className="text-xs font-medium text-secondary-500 md:text-sm">
                0x2b5A8...f760F
              </p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <NetworkAvatar
                networkName="Ethereum"
                logoLink="src/assets/images/eth-logo.svg"
              />

              <div className="text-xs text-end md:text-sm">
                <div className="inline text-ellipsis overflow-hidden">
                  <span className="text-ellipsis whitespace-nowrap overflow-hidden text-inherit">
                    0
                  </span>
                  <span className="ms-1 text-xs text-ellipsis whitespace-nowrap overflow-hidden text-inherit">
                    ETH
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {!noEdit && (
          <div>
            <Open opens="account_menu">
              <button
                aria-label="Account options"
                tabIndex={index}
                className="inline-flex justify-center items-center border-none rounded-lg bg-transparent text-primary-500 w-6 h-6 min-w-6 p-0 cursor-pointer hover:bg-secondary-200"
              >
                <Icon imgUrl="src/assets/images/more.svg" />
              </button>
            </Open>
            <Window name="account_menu">
              <AccountOption />
            </Window>
          </div>
        )}
      </div>
    </div>
  );
}

export default Account;
