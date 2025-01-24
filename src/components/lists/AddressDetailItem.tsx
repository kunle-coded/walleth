import AccountAvatar from "../../ui/AccountAvatar";
import Icon from "../../ui/Icon";
import SystemButton from "../../ui/SystemButton";

interface AddressDetailItemProps {
  onEdit: () => void;
}

function AddressDetailItem({ onEdit }: AddressDetailItemProps) {
  const address = "0x2b5A8CD7f3bf420619a68B46d9e5088cA63f760F";

  return (
    <div className="flex flex-col min-w-0">
      <div className="flex items-center px-6">
        <AccountAvatar width="40" margin="m-0" />
        <p className="ms-4 text-left p-0 text-secondary-900 leading-6 md:text-xl font-semibold text-ellipsis whitespace-nowrap overflow-hidden">
          Unknown address
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
            {address}
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
