import { useContext, useEffect, useRef, useState } from "react";
import EthLogo from "../logos/EthLogo";
import LineaLogo from "../logos/LineaLogo";
import NetworkItem from "./NetworkItem";
import { PopupContext } from "../../contexts/PopupContext";
import useDelayedHover from "../../hooks/useDelayedHover";

function Networks() {
  const [infoCordTop, setInfoCordTop] = useState(0);
  const [infoCordLeft, setInfoCordLeft] = useState(0);
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [isTooltipEnter, setIsTooltipEnter] = useState(false);

  const { handleInfoLeave, clearTimeoutOnUnmount } = useDelayedHover();

  const popupStyle: React.CSSProperties = {
    position: "absolute",
    inset: "auto auto 0px 0px",
    transform: `translate(${infoCordLeft}px, ${-infoCordTop - 135}px)`,
    width: "360px",
  };
  const tooltipStyle: React.CSSProperties = {
    transform: `translate(${159}px, 0px)`,
  };

  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (infoRef) {
      const elementTop = infoRef.current?.getBoundingClientRect().top as number;
      const elementLeft = infoRef.current?.getBoundingClientRect()
        .left as number;
      setInfoCordLeft(elementLeft);
      setInfoCordTop(elementTop);
    }
  }, []);

  useEffect(() => {
    return clearTimeoutOnUnmount;
  }, []);

  function handleTooltipLeave() {
    setIsMouseEnter(false);
    setIsTooltipEnter(false);
  }

  function handleMouseLeave() {
    handleInfoLeave(isTooltipEnter, setIsMouseEnter);
  }

  return (
    <div>
      <div className="flex justify-between p-4">
        <p className="text-secondary-600 font-medium leading-6">
          Enabled networks
        </p>
      </div>

      <NetworkItem
        current
        networkName="Ethereum Mainnet"
        networkLink="mainnet.infura.io"
      >
        <EthLogo />
      </NetworkItem>
      <NetworkItem
        networkName="Linea Mainnet"
        networkLink="linea-mainnet.infura.io"
      >
        <LineaLogo />
      </NetworkItem>

      <div className="networks_container">
        <div ref={infoRef} className="px-4 mt-4 mb-1">
          <div className="flex justify-between my-4">
            <div className="inline-flex">
              <p className="sm:text-sm md:text-[1rem] md:leading-6 font-medium text-secondary-500">
                Additional networks
              </p>
              <div className="mt-1">
                <span
                  className="inline-block w-4 h-4 max-w-4 ml-2 text-inherit bg-current text-secondary-400 relative"
                  style={{
                    maskImage: "url(./src/assets/images/info.svg)",
                    maskSize: "cover",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                  }}
                  onMouseEnter={() => setIsMouseEnter(true)}
                  onMouseLeave={handleMouseLeave}
                ></span>
                {isMouseEnter && (
                  <div
                    className="p-4 rounded-lg text-primary-500 bg-primary-100 border border-solid border-[rgba(164,_169,_183,_0.4)] shadow-[0_2px_16px_0_rgba(0,0,0,0.1)]"
                    role="tooltip"
                    data-popper-reference-hidden="false"
                    data-popper-escaped="false"
                    data-popper-placement="top"
                    style={popupStyle}
                    onMouseEnter={() => setIsTooltipEnter(true)}
                    onMouseLeave={handleTooltipLeave}
                  >
                    <span>
                      Some of these networks rely on third parties. The
                      connections may be less reliable or enable third-parties
                      to track activity.
                      <div>
                        <button className="inline-flex justify-center items-center h-auto p-0 align-top bg-transparent relative text-brand-500 border-none cursor-pointer select-none">
                          Learn more
                        </button>
                      </div>
                    </span>
                    <div
                      className="absolute left-0 -bottom-5 flex justify-center items-center w-[40px] h-[40px] border border-solid border-[rgba(164,_169,_183,_0.4)] bg-inherit invisible before:w-2 before:h-2 before:rotate-[-135deg] before:bg-inherit before:rounded-tl-sm before:border-l-inherit before:border-r-transparent before:block before:border before:border-solid before:visible before:absolute before:border-t-inherit before:border-b-transparent"
                      style={tooltipStyle}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper"></div>
      </div>
    </div>
  );
}

export default Networks;
