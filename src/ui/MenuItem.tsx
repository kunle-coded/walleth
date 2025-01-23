import Icon from "./Icon";

interface MenuItemProps {
  menuText: string;
  isNotification?: boolean;
  showNotification?: boolean;
  showSubmenu?: boolean;
  iconUrl: string;
  onClick?: () => void;
}

function MenuItem({
  menuText,
  isNotification,
  showNotification,
  showSubmenu,
  iconUrl,
  onClick,
}: MenuItemProps) {
  return (
    <button
      className="grid grid-cols-[min-content_auto] items-center w-full py-3.5 px-4 text-start text-inherit font-medium bg-none border-none cursor-pointer hover:bg-primary-100"
      onClick={onClick}
    >
      <Icon imgUrl={iconUrl} margin="mr-2" />

      <div>
        <div className="flex flex-row justify-between items-center">
          {menuText}
          {isNotification && showNotification && (
            <div className="flex items-center gap-1 h-auto w-max py-[1px] px-2 text-brand-500 bg-brand-100 rounded-md border-none border border-secondary-200">
              New!
            </div>
          )}
        </div>
        {showSubmenu && <p className="text-xs">etherscan.io</p>}
      </div>
    </button>
  );
}

export default MenuItem;
