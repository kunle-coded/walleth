import NetworkAvatar from "../../ui/NetworkAvatar";

interface NetworkItemProps {
  networkName: string;
  iconLink: string;
}

function NetworkItemAdd({ networkName, iconLink }: NetworkItemProps) {
  return (
    <div className="flex justify-between items-center py-4">
      <div className="flex items-center">
        <NetworkAvatar
          size="big"
          networkName={networkName}
          logoLink={iconLink}
        />

        <div className="ml-4">
          <p className="bg-transparent text-secondary-900 text-ellipsis whitespace-nowrap overflow-hidden text-sm md:text-[1rem]">
            {networkName}
          </p>
        </div>
      </div>
      <div className="flex items-center ml-1">
        <button className="inline-flex justify-center items-center text-brand-500 font-medium bg-transparent p-0 px-0 h-auto relative border-none cursor-pointer align-middle select-none sm:text-sm md:text-[1rem] hover:underline hover:underline-offset-4 hover:decoration-2">
          Add
        </button>
      </div>
    </div>
  );
}

export default NetworkItemAdd;
