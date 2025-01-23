import { useState } from "react";

interface ToggleButtonProps {
  isToggled: boolean;
  toggleStatus?: boolean;
  onToggle: () => void;
}

function ToggleButton({
  isToggled,
  toggleStatus,
  onToggle,
}: ToggleButtonProps) {
  return (
    <label className="flex toggle-direction-ltr cursor-pointer">
      <div className="flex justify-start items-center w-[52px] bg-transparent p-0 border-0 relative cursor-pointer select-none">
        <div
          className={`w-[40px] h-[24px] p-0 flex justify-center items-center border-none rounded-[26px] ${
            isToggled ? "bg-brand-500" : "bg-secondary-500"
          } `}
        >
          <div
            className={`flex justify-center items-center relative font-[Helvetica Neue,_Helvetica,_sans-serif] mt-auto mb-auto leading-[0] w-[26px] h-[20px] left-1 ${
              isToggled ? "opacity-100" : "opacity-0"
            }`}
          ></div>
          <div
            className={`flex justify-center items-center relative font-[Helvetica Neue,_Helvetica,_sans-serif] mt-auto mb-auto pr-[5px] leading-[0] w-[26px] h-[20px] bottom-0 text-[rgba(255,_255,_255,_0.6)] ${
              isToggled ? "opacity-0" : "opacity-100"
            }`}
          ></div>
        </div>
        <div className="absolute top-0 left-0 h-full flex justify-start items-center self-stretch flex-1">
          <div
            className={`w-[18px] h-[18px] flex self-center shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] rounded-[50%] box-border relative bg-white transition-[left_250ms_linear] ${
              isToggled ? "left-[18px]" : "left-[3px]"
            }`}
          ></div>
        </div>
        <input
          type="checkbox"
          value={isToggled ? "true" : "false"}
          className="w-px h-px absolute p-0 -m-[1px] overflow-hidden"
          style={{ clip: "rect(0px, 0px, 0px, 0px)" }}
          onClick={onToggle}
        />
      </div>
      {toggleStatus && (
        <div className="grid items-center uppercase text-[1rem]">
          <span
            className={`toggle-button-status-grid-area ${
              isToggled ? "visible" : "hidden"
            }`}
          >
            On
          </span>
          <span
            className={`toggle-button-status-grid-area ${
              isToggled ? "hidden" : "visible"
            }`}
          >
            Off
          </span>
        </div>
      )}
    </label>
  );
}

export default ToggleButton;
