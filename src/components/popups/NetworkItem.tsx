import NetworkAvatar from "../../ui/NetworkAvatar";
import More from "../icons/More";
import ArrowDown from "../icons/ArrowDown";
import { Open } from "../modal/PopupModal";

interface NetworkItemProps {
  current?: boolean;
  networkName: string;
  networkLink: string;
  networkIconLink: string;
}

function NetworkItem({
  current,
  networkLink,
  networkName,
  networkIconLink,
}: NetworkItemProps) {
  return (
    <div
      data-rbd-droppable-id="characters"
      data-rbd-droppable-context-id="0"
      role="button"
      draggable="false"
      className="draggable"
    >
      <div className="cursor-grab touch-manipulation">
        <div
          className={`flex justify-between items-center w-full px-4 py-2 gap-4 relative text-primary-500 cursor-pointer transition-[background-color] ease-linear ${
            current ? "bg-brand-100" : "bg-transparent hover:bg-secondary-200"
          }`}
        >
          {current && (
            <div className="absolute left-1 top-1 w-1 h-[calc(100%_-_8px)] bg-brand-500 rounded-[9999px]"></div>
          )}

          <NetworkAvatar
            size="big"
            networkName={networkName}
            logoLink={networkIconLink}
          />
          <div className="flex flex-col justify-start items-start w-full overflow-hidden">
            <div className="flex items-center w-full">
              <p className="bg-transparent text-secondary-900 text-ellipsis whitespace-nowrap overflow-hidden text-sm md:text-[1rem]">
                {networkName}
              </p>
            </div>
            <div className="flex items-center max-w-full">
              <button className="text-xs md:text-sm md:font-medium text-secondary-600 text-ellipsis whitespace-nowrap overflow-hidden p-0 border-none">
                {networkLink}
              </button>
              <span className="inline-block text-xs w-[1em] h-[1em] max-w-[1em] ml-1 flex-[0_0_1em] text-secondary-600 relative">
                <ArrowDown />
              </span>
            </div>
          </div>

          <Open opens="network_menu">
            <button className="inline-flex justify-center items-center border-none rounded-lg bg-transparent text-primary-500 w-6 h-6 min-w-6 p-0 cursor-pointer hover:bg-secondary-200">
              <span className="inline-block text-[16px] flex-[0 0 1em] size-4 max-w-4 bg-transparent relative">
                <More />
              </span>
            </button>
          </Open>
        </div>
      </div>
    </div>
  );
}

export default NetworkItem;
