import { useState } from "react";
import ButtonWithIcon from "../../ui/ButtonWithIcon";
import Link from "../../ui/Link";
import ToggleButton from "../../ui/ToggleButton";

function Notification() {
  const [isToggled, setIsToggled] = useState(false);

  function handleToggle() {
    setIsToggled((prevState) => !prevState);
  }

  function handleBack() {
    window.location.hash = "settings";
  }

  return (
    <div className="flex flex-row justify-center w-full h-full bg-primary-100">
      <div className="flex flex-col w-full h-full bg-white">
        <div className="flex justify-center w-full p-4">
          <div className="min-w-6">
            <ButtonWithIcon
              iconUrl="src/assets/images/arrow-left.svg"
              onClick={handleBack}
            />
          </div>
          <div className="w-[calc(100%_-_48px)] mr-6">
            <p className="block text-secondary-900 text-sm leading-snug font-bold text-center pe-8 ps-8 text-ellipsis whitespace-nowrap overflow-hidden md:text-[1rem] md:leading-6">
              Notifications
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full h-full p-0 overflow-auto">
          <div className="flex flex-col justify-start items-start gap-4 px-8 pb-8">
            <div className="w-full">
              <div className="flex flex-row justify-between items-center gap-4 w-full">
                <div className="flex flex-row items-center gap-4">
                  <div className="flex flex-col justify-between items-stretch w-full">
                    <p className="text-left leading-6 text-secondary-900 font-semibold md:text-lg">
                      Allow Notifications
                    </p>
                  </div>
                </div>
                <div className="w-10">
                  <ToggleButton isToggled={isToggled} onToggle={handleToggle} />
                </div>
              </div>
            </div>
            <p className="text-sm leading-snug text-secondary-600 decoration-[none] md:text-[1rem] md:leading-6">
              <span>
                Stay in the loop on what’s happening in your wallet with
                notifications. To use notifications, we use a profile to sync
                some settings across your devices.{" "}
                <Link
                  label="Learn how we protect your privacy while using this feature."
                  href=""
                />
              </span>
            </p>
          </div>
          <div className="h-px w-full border border-solid border-b-0 border-[rgb(175,180,192,0.4)]"></div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
