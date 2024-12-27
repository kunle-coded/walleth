import { PropsWithChildren } from "react";

interface MenuItemProps {
  menuText: string;
  isNotification?: boolean;
  showNotification?: boolean;
  showSubmenu?: boolean;
}

function MenuItem({
  menuText,
  isNotification,
  showNotification,
  showSubmenu,
  children,
}: PropsWithChildren<MenuItemProps>) {
  return (
    <button className="grid grid-cols-[min-content_auto] items-center w-full py-3.5 px-4 text-start text-inherit font-medium bg-none border-none cursor-pointer hover:bg-primary-100">
      <span className="inline-block size-4 max-w-4 mr-2 text-inherit relative">
        {children}
      </span>

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
