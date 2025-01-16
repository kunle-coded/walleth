import { useEffect, useRef, useState } from "react";

function SwapSettingsPopup() {
  const infoRef = useRef<HTMLDivElement>(null);
  const top = infoRef.current ? infoRef.current.getBoundingClientRect().top : 0;
  const left = infoRef.current
    ? infoRef.current.getBoundingClientRect().left
    : 0;

  const [infoCoord, setInfoCoord] = useState({ top, left });
  const [isInfoEnter, setIsInfoEnter] = useState(false);

  useEffect(() => {
    if (!infoRef.current) return;

    const top = infoRef.current.getBoundingClientRect().top;
    const left = infoRef.current.getBoundingClientRect().left;

    setInfoCoord({ top, left });

    console.log(top, left);
  }, []);

  function onInfoEnter() {
    setIsInfoEnter(true);
  }
  function onInfoLeave() {
    setIsInfoEnter(false);
  }

  const infoStyle: React.CSSProperties = {
    transform: `translate3d(${infoCoord.left - infoCoord.left + 35}px, ${
      infoCoord.top - infoCoord.top + 59
    }px, 0px)`,
    visibility: isInfoEnter ? "visible" : "hidden",
  };

  const infoInnerStyle: React.CSSProperties = {
    opacity: isInfoEnter ? 1 : 0,
    transform: isInfoEnter ? "translateY(10px)" : "translateY(0px)",
    transition: "opacity 250ms ease, transform 250ms ease",
  };

  const arrowStyle: React.CSSProperties = {
    borderBottom: "7px solid #333",
    borderRight: "7px solid transparent",
    borderLeft: "7px solid transparent",
    top: "-7px",
    margin: "0 9px",
    borderBottomColor: "#fff",
  };

  return (
    <div className="flex flex-col justify-between items-stretch">
      <div className="flex-row my-5">
        <div className="flex flex-row items-center">
          <h6 className="my-1 pr-2 text-secondary-900 text-sm leading-[140%]">
            Slippage tolerance
          </h6>
          <div className="info-tooltip">
            <div className="flex items-center mr-1">
              <div
                ref={infoRef}
                className="inline"
                onMouseEnter={onInfoEnter}
                onMouseLeave={onInfoLeave}
              >
                <svg
                  viewBox="0 0 10 10"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: "static",
                    height: "12px",
                    width: "12px",
                  }}
                >
                  <path
                    d="M5 0C2.2 0 0 2.2 0 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 2c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.2-.7-.6.3-.8.7-.8zm.7 6H4.3V4.3h1.5V8z"
                    fill="#AFB4C0"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex justify-center items-center">
            <button
              aria-checked="false"
              className="flex-[1] h-[25px] min-w-[48px] mr-2 p-0 border-l border border-[rgb(175,180,192,0.4)] rounded-[4px_0px_0px_4px] bg-white text-xs leading-[140%] text-primary-400 text-ellipsis whitespace-nowrap overflow-hidden"
            >
              2%
            </button>
            <button className="flex justify-center items-center"></button>
            <button className="flex justify-center items-center"></button>
          </div>
        </div>
      </div>
      <div
        role="tooltip"
        className="absolute max-w-[400px] perspective-midrange outline-none pointer-events-none ease-[cubic-bezier(0.165,_0.84,_0.44,_1)] duration-[350ms] z-[9999]"
        style={infoStyle}
      >
        <div
          className="max-w-[200px] py-3 px-4 pb-[11px] text-primary-500 bg-white bottom-[10px] pointer-events-auto will-change-transform text-center rounded relative text-[0.8rem] transition-none shadow-[0_2px_16px_0_rgba(0,0,0,0.1)]"
          style={infoInnerStyle}
        >
          <div
            className="absolute w-0 h-0 left-[84px]"
            style={arrowStyle}
          ></div>
          <div className="text-xs leading-[140%] text-secondary-600 text-left">
            If the price changes between the time your order is placed and
            confirmed it’s called “slippage”. Your swap will automatically
            cancel if slippage exceeds your “slippage tolerance” setting.
          </div>
        </div>
      </div>
      <div className="flex-row mt-5">Settings for swap</div>
    </div>
  );
}

export default SwapSettingsPopup;
