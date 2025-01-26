import { useState } from "react";
import ToggleButton from "./ToggleButton";

interface SettingsItemToggleProps {
  title: string;
  details: string;
  linkUrl?: string;
  linkText?: string;
  showLink?: boolean;
  showPeriod?: boolean;
}

function SettingsItemToggle({
  title,
  details,
  linkUrl,
  linkText,
  showLink,
  showPeriod,
}: SettingsItemToggleProps) {
  const [isToggled, setIsToggled] = useState(false);

  function handleToggle() {
    setIsToggled((prevState) => !prevState);
  }

  return (
    <div className="flex flex-row justify-between gap-4 p-0 pt-4">
      <div className="flex flex-col min-w-0">
        {title && <span>{title}</span>}
        <div className="text-secondary-500 text-[0.895rem] leading-[140%]">
          {showLink ? (
            <span>
              {details}{" "}
              <a
                href={linkUrl}
                className="inline-flex justify-center items-center p-0 px-0 text-brand-500 h-auto decoration-[none] align-top bg-transparent relative cursor-pointer select-none break-words"
              >
                {linkText}
              </a>
              {showPeriod && "."}
            </span>
          ) : (
            details
          )}
        </div>
      </div>
      <div className="flex flex-col max-w-[300px] mt-2">
        <ToggleButton
          isToggled={isToggled}
          onToggle={handleToggle}
          toggleStatus
        />
      </div>
    </div>
  );
}

export default SettingsItemToggle;
