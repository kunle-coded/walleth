// Swap assets

import { useState } from "react";
import Icon from "../../ui/Icon";
import SwapQuote from "./SwapQuote";
import SwapFooter from "./SwapFooter";
import SwapTo from "./swapTo";
import SwapFrom from "./SwapFrom";

function Swap() {
  const [isSwapValid, setIsSwapValid] = useState(false);
  const [isSwapRotate, setIsSwapRotate] = useState(false);

  function handleSwapRotate() {
    setIsSwapRotate((prevState) => !prevState);
  }

  return (
    <div className="flex justify-center w-full max-h-0 flex-[1_0_auto] mt-4">
      <div className="flex justify-center w-full swap-assets">
        <div className="flex flex-col items-center flex-nowrap overflow-x-hidden overflow-y-auto w-full h-full swap-container">
          <div className="flex flex-row flex-nowrap justify-center items-center w-full py-3 bg-primary-100 sticky top-0 z-[1] swap-header">
            <div className="flex flex-row justify-center w-1/12 ml-4">
              <Icon
                imgUrl="src/assets/images/arrow-two-left.svg"
                size="big"
                color="secondary-500"
                cursor
              />
            </div>
            <div className="text-center flex-[1] -mt-[5px] font-extrabold leading-[140%] text-secondary-900 ">
              Swap
            </div>
            <div className="flex flex-row justify-center w-1/12 mr-4">
              <Icon
                imgUrl="src/assets/images/settings.svg"
                size="big"
                color="secondary-500"
                cursor
              />
            </div>
          </div>
          {/* start of content */}
          <div className="flex flex-col flex-nowrap items-center relative w-full h-full">
            {/* start of content inner */}
            <div className="flex flex-col flex-nowrap flex-[1] w-full">
              {/* start of content inner first */}
              <div className="flex flex-col h-full mr-4 ml-4 swap-content">
                {/* Everything goes here - quote details, footer */}
                {/* Start of swap from */}

                <SwapFrom isSwap={isSwapRotate} onSwap={handleSwapRotate} />

                {/* End of swap from */}

                <SwapTo isSwap={isSwapRotate} />

                {/* Swap to */}
                <button className="info"></button>

                {/* quote details */}
                {isSwapValid && <SwapQuote />}
              </div>

              {/* footer here if no quote */}
              {!isSwapValid && <SwapFooter />}
            </div>
            {/* end of content inner div */}
          </div>
          {/* end of content div */}
        </div>
      </div>
    </div>
  );
}

export default Swap;
