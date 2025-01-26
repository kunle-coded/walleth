import { useState } from "react";
import ToggleButton from "./ToggleButton";
import NetworkAvatar from "./NetworkAvatar";

interface SettingsNetworkItemToggleProps {
  networkName: string;
  iconUrl: string;
  linkUrl?: string;
  linkText?: string;
}

function SettingsNetworkItemToggle({
  networkName,
  iconUrl,
  linkUrl,
  linkText,
}: SettingsNetworkItemToggleProps) {
  const [isToggled, setIsToggled] = useState(false);

  function handleToggle() {
    setIsToggled((prevState) => !prevState);
  }

  return (
    <div className="flex flex-row justify-between gap-4 my-6">
      <div className="flex items-center gap-4 w-full bg-transparent overflow-hidden">
        <NetworkAvatar
          logoLink={iconUrl}
          networkName={networkName}
          borderColor
          size="big"
        />
        <div className="flex flex-col overflow-hidden">
          <p className="text-secondary-900 bg-transparent text-sm leading-snug font-normal text-ellipsis whitespace-nowrap overflow-hidden md:text-[1rem] md:leading-6">
            {networkName}
          </p>
          <p className="text-brand-500 bg-transparent text-xs leading-5 md:text-sm md:leading-snug text-ellipsis whitespace-nowrap overflow-hidden">
            {linkUrl && <a href={linkUrl}>{linkText}</a>}
          </p>
        </div>
      </div>
      <div className="ml-auto">
        <ToggleButton
          isToggled={isToggled}
          onToggle={handleToggle}
          toggleStatus
        />
      </div>
    </div>
  );
}

export default SettingsNetworkItemToggle;
