import React, { useContext } from "react";
import { PopupContext } from "../contexts/PopupContext";

interface AddressTooltipProps {
  tooltipContent: string;
}

function AddressTooltip({ tooltipContent }: AddressTooltipProps) {
  const { windowCord } = useContext(PopupContext);

  const tooltipStyle: React.CSSProperties = {
    position: "absolute",
    top: "0px",
    left: "0px",
    perspective: "800px",
    transform: `translate(${windowCord.left - 50}px, ${windowCord.top + 20}px)`,
    transitionDuration: "350ms",
    transitionTimingFunction: "cubic-bezier(0.165, 0.84, 0.44, 1)",
    visibility: "visible",
    willChange: "transform",
    zIndex: 9999,
  };

  return (
    <div
      role="tooltip"
      className=" max-w-[400px] outline-0 pointer-events-none "
      style={tooltipStyle}
    >
      <div className="transition-none will-change-transform text-center relative text-[0.8rem] rounded bg-white text-primary-500 px-4 py-3 pb-[11px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.1)] opacity-100 bottom-[10px] translate-y-[10px]">
        <div
          className="absolute w-0 h-0 my-0 mx-[9px] border-r-[7px] border-l-[7px] border-b-[7px] border-r-transparent border-l-transparent border-b-white border-solid -top-[7px]"
          style={{ left: "87px" }}
        ></div>
        <div className="text-xs leading-[140%] text-secondary-600 text-left font-normal">
          {tooltipContent}
        </div>
      </div>
    </div>
  );
}

export default AddressTooltip;
