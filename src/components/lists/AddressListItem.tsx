import { addressFormatter } from "../../helpers/addressFormatter";
import AccountAvatar from "../../ui/AccountAvatar";

interface AddressListItemProps {
  onClick: () => void;
}

function AddressListItem({ onClick }: AddressListItemProps) {
  const address = "0x2b5A8CD7f3bf420619a68B46d9e5088cA63f760F";

  return (
    <button
      className="flex items-center w-full p-4 bg-transparent border-none cursor-pointer hover:bg-secondary-200"
      onClick={onClick}
    >
      <AccountAvatar />
      <div className="flex flex-col overflow-hidden">
        <p className="w-full text-left p-0 text-secondary-900 text-sm leading-snug md:text-[1rem] md:leading-6 font-medium text-ellipsis whitespace-nowrap overflow-hidden">
          Unknown address
        </p>
        <div className="flex text-secondary-500 text-xs leading-5 md:text-sm md:leading-snug text-ellipsis whitespace-nowrap overflow-hidden">
          <div>
            <div aria-describedby="tooltip_5" className="inline">
              {addressFormatter(address)}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

export default AddressListItem;
