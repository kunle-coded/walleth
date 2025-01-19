import { addressFormatter } from "../../helpers/addressFormatter";
import AccountAvatar from "../../ui/AccountAvatar";
import Icon from "../../ui/Icon";

interface AddressPickerProps {
  account: string;
  address: string;
}

function AddressPicker({ account, address }: AddressPickerProps) {
  return (
    <button className="inline-flex justify-start items-center gap-2 h-[62px] w-full max-w-full py-4 pr-4 pl-3 bg-transparent text-secondary-900 text-sm leading-snug font-medium border border-solid border-[rgb(175,180,192,0.4)] rounded-lg relative align-middle cursor-pointer select-none text-ellipsis whitespace-nowrap overflow-hidden md:text-[1rem] md:leading-6 hover:bg-secondary-200">
      <span className="flex items-center gap-2 w-full text-secondary-900 text-ellipsis whitespace-nowrap overflow-hidden">
        <AccountAvatar />
        <span className="flex-grow text-start ps-1 text-secondary-900 text-sm leading-[140%] font-medium text-ellipsis whitespace-nowrap overflow-hidden">
          {account}
          <p className="flex text-secondary-500 text-xs leading-5 md:text-sm md:leading-snug text-ellipsis whitespace-nowrap overflow-hidden">
            {addressFormatter(address)}
          </p>
        </span>
      </span>
      <Icon imgUrl="src/assets/images/arrow-down.svg" margin="ms-1" />
    </button>
  );
}

export default AddressPicker;
