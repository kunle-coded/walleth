import NetworkAvatar from "../../ui/NetworkAvatar";
import { Open, Window } from "../modal/PopupModal";
import Icon from "../../ui/Icon";
import NetworkOption from "./NetworkOption";

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
              <Icon
                imgUrl="src/assets/images/arrow-down.svg"
                size="small"
                margin="ml-1"
              />
            </div>
          </div>

          <Open opens="network_menu">
            <button className="inline-flex justify-center items-center border-none rounded-lg bg-transparent text-primary-500 w-6 h-6 min-w-6 p-0 cursor-pointer hover:bg-secondary-200">
              <Icon imgUrl="src/assets/images/more.svg" />
            </button>
          </Open>
          <Window name="network_menu">
            <NetworkOption />
          </Window>
        </div>
      </div>
    </div>
  );
}

export default NetworkItem;
