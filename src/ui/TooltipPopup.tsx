import React from "react";

interface TooltipPopupProps {
  isTop: boolean;
  targetRef: React.RefObject<HTMLDivElement>;
  coord: object;
}

function TooltipPopup({ isTop, targetRef, coord }: TooltipPopupProps) {
  const left = targetRef.current?.getBoundingClientRect().left as number;
  console.log("filter top", targetRef.current?.getBoundingClientRect().y);

  const TooltipStyle: React.CSSProperties = {
    zIndex: 9999,
    transitionDuration: "350ms",
    transitionTimingFunction: "cubic-bezier(0.165, 0.84, 0.44, 1)",
    position: "absolute",
    visibility: "visible",
    willChange: "transform",
    top: "0px",
    left: "0px",
    perspective: "800px",
    transform: `translate3d(${left - 20}px, ${isTop ? "368px" : "429px"}, 0px)`,
  };

  console.log(coord);

  return (
    <div
      className=" max-w-[400px] outline-0 pointer-events-none"
      style={TooltipStyle}
    >
      <div
        className={`transition-none will-change-transform text-center relative text-[0.8rem] rounded bg-white text-primary-500 px-4 py-3 pb-[11px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.1)] opacity-100 ${
          isTop
            ? "-top-2.5 translate-y-[-10px]"
            : "-bottom-2.5 translate-y-[10px]"
        }`}
      >
        <div
          className={`absolute w-0 h-0 left-[20px] my-0 mx-[9px] border-r-[7px] border-l-[7px] border-r-transparent border-l-transparent border-solid ${
            isTop
              ? "-bottom-[7px] border-t-white border-t-[7px]"
              : "-top-[7px] border-b-white border-b-[7px]"
          }`}
          style={{ left: "20px" }}
        ></div>
        <div className="text-xs leading-[140%] text-secondary-600 text-left">
          Sort by
        </div>
      </div>
    </div>
  );
}

export default TooltipPopup;
