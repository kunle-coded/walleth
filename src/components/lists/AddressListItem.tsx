import { addressFormatter } from "../../helpers/addressFormatter";
import { Address } from "../../types/config";
import AccountAvatar from "../../ui/AccountAvatar";
import AddressTooltip from "../../ui/AddressTooltip";
import { OpenTooltip, TooltipWindow } from "../modal/TooltipModal";

interface AddressListItemProps {
  address: Address;
  index: number;
  onClick?: () => void;
}

function AddressListItem({ address, index, onClick }: AddressListItemProps) {
  return (
    <button
      className="flex items-center w-full p-4 bg-transparent border-none cursor-pointer hover:bg-secondary-200"
      onClick={onClick}
    >
      <AccountAvatar />
      <div className="flex flex-col overflow-hidden">
        <p className="w-full text-left p-0 text-secondary-900 text-sm leading-snug md:text-[1rem] md:leading-6 font-medium text-ellipsis whitespace-nowrap overflow-hidden">
          {address.name}
        </p>
        <div className="flex text-secondary-500 text-xs leading-5 md:text-sm md:leading-snug text-ellipsis whitespace-nowrap overflow-hidden">
          <div>
            <OpenTooltip opens={`tooltip_addy-${index}`}>
              <div aria-describedby="tooltip_addy" className="inline">
                {addressFormatter(address.address)}
              </div>
            </OpenTooltip>
            <TooltipWindow name={`tooltip_addy-${index}`}>
              <AddressTooltip tooltipContent={address.address} />
            </TooltipWindow>
          </div>
        </div>
      </div>
    </button>
  );
}

export default AddressListItem;
