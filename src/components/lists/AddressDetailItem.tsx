import { Address } from "../../types/config";
import AccountAvatar from "../../ui/AccountAvatar";
import Icon from "../../ui/Icon";
import SystemButton from "../../ui/SystemButton";

interface AddressDetailItemProps {
  address: Address;
  onEdit: () => void;
}

function AddressDetailItem({ address, onEdit }: AddressDetailItemProps) {
  return (
    <div className="flex flex-col min-w-0">
      <div className="flex items-center px-6">
        <AccountAvatar width="40" margin="m-0" />
        <p className="ms-4 text-left p-0 text-secondary-900 leading-6 md:text-xl font-semibold text-ellipsis whitespace-nowrap overflow-hidden">
          {address.name ? address.name : "Unknown address"}
        </p>
      </div>
      <div className="flex flex-col flex-nowrap px-6 pt-6 pb-0">
        <SystemButton label="Edit" noHeight onClick={onEdit} />
      </div>
      <div className="flex flex-col flex-nowrap px-6 pt-6 pb-0">
        <div className="mt-3 text-secondary-600 text-xs leading-[140%]">
          Ethereum public address
        </div>
        <div className="flex flex-row flex-nowrap text-secondary-500 text-lg leading-[140%] break-words">
          <div className="flex flex-row flex-nowrap text-secondary-500 text-sm leading-[140%] break-words">
            {address.address}
          </div>
          <div>
            <div className="inline">
              <button className="inline-block ml-2.5 pl-0 p-0 h-5 w-5 min-w-8 text-brand-500 bg-none rounded-lg border-none cursor-pointer">
                <Icon imgUrl="src/assets/images/copy.svg" size="big" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressDetailItem;
