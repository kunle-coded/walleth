import React, { useEffect, useRef, useState } from "react";

function SwapSettingsPopup() {
  const [currentChecked, setCurrentChecked] = useState<number>(0);
  const [value, setValue] = useState("");
  const infoRef = useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement | null>(null);
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
  }, []);

  function onInfoEnter() {
    setIsInfoEnter(true);
  }

  function onInfoLeave() {
    setIsInfoEnter(false);
  }

  function handleButtonCheck(index: number) {
    // e.stopPropagation();
    if (index === currentChecked) return;
    if (value && currentChecked !== 2) setValue("");
    setCurrentChecked(index);
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
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
              role="radio"
              aria-checked={currentChecked === 0}
              tabIndex={0}
              className={`flex-[1] h-[25px] min-w-[48px] mr-2 p-0 border-l border-[rgb(175,180,192,0.4)] rounded-[4px_0px_0px_4px] text-xs leading-[140%] text-ellipsis whitespace-nowrap overflow-hidden hover:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.1)] ${
                currentChecked === 0
                  ? "bg-brand-500 text-white border-none"
                  : "bg-white border text-primary-400 "
              }`}
              onClick={() => handleButtonCheck(0)}
            >
              2%
            </button>
            <button
              role="radio"
              aria-checked={currentChecked === 1}
              tabIndex={1}
              className={`flex-[1] h-[25px] min-w-[48px] mr-2 p-0 border-[rgb(175,180,192,0.4)] rounded-[25px]  text-xs leading-[140%] text-ellipsis whitespace-nowrap overflow-hidden hover:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.1)] ${
                currentChecked === 1
                  ? "bg-brand-500 text-white border-none"
                  : "bg-white text-primary-400 border"
              }`}
              onClick={() => handleButtonCheck(1)}
            >
              3%
            </button>
            <button
              role="radio"
              aria-checked={currentChecked === 2}
              tabIndex={2}
              className={`flex justify-center items-center flex-[1] relative h-[25px] min-w-[72px] mr-0 p-0 border-[rgb(175,180,192,0.4)] rounded-[0px_4px_4px_0px] text-xs leading-[140%] text-ellipsis whitespace-nowrap overflow-hidden cursor-text hover:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.1)] outline-none focus:outline-none ${
                currentChecked === 2
                  ? "bg-brand-500 text-white border-none"
                  : "bg-white text-primary-400 border"
              }`}
              onClick={() => handleButtonCheck(2)}
            >
              {currentChecked === 2 ? (
                <div className="flex justify-center">
                  <input
                    ref={inputRef}
                    type="text"
                    value={value}
                    autoFocus={currentChecked === 2}
                    className="w-[64px] text-center bg-brand-500 text-white border-none outline-none focus:outline-none"
                    onChange={handleInput}
                  />
                </div>
              ) : (
                "custom"
              )}
              {currentChecked === 2 && (
                <div className="absolute right-[5px]">%</div>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="flex-row mt-5">
        <button
          disabled={
            (currentChecked === 2 && Number(value) <= 2) || currentChecked === 0
          }
          className="inline-flex justify-center items-center h-[40px] w-full p-0 px-4 relative text-sm leading-snug font-medium align-middle select-none cursor-pointer border-none rounded-full bg-brand-500 text-white md:text-[1rem] md:leading-6 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Update
        </button>
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
    </div>
  );
}

export default SwapSettingsPopup;
