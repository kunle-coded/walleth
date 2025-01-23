// Swap assets

import { useState } from "react";
import Icon from "../../ui/Icon";
import SwapQuote from "./SwapQuote";
import SwapFooter from "./SwapFooter";
import SwapTo from "./SwapTo";
import SwapFrom from "./SwapFrom";
import Modal from "../modal/Modal";
import SwapInfoPopup from "../popups/SwapSettingsPopup";

function Swap() {
  const [isSwapValid, setIsSwapValid] = useState(false);
  const [isSwapRotate, setIsSwapRotate] = useState(false);

  function handleSwapRotate() {
    setIsSwapRotate((prevState) => !prevState);
  }

  function handleBack() {
    window.location.hash = "";
  }

  return (
    <div className="flex justify-center w-full swap-assets">
      <div className="flex flex-col items-center flex-nowrap overflow-x-hidden overflow-y-auto w-full h-full swap-container">
        <div className="flex flex-row flex-nowrap justify-center items-center w-full py-3 bg-primary-100 sticky top-0 z-[1] swap-header">
          <div className="flex flex-row justify-center w-1/12 ml-4">
            <Icon
              imgUrl="src/assets/images/arrow-two-left.svg"
              size="big"
              color="secondary-500"
              cursor
              onClick={handleBack}
            />
          </div>
          <div className="text-center flex-[1] -mt-[5px] font-extrabold leading-[140%] text-secondary-900 ">
            Swap
          </div>
          <div className="flex flex-row justify-center w-1/12 mr-4">
            <Modal>
              <Modal.Open opens="swap_settings">
                <Icon
                  imgUrl="src/assets/images/settings.svg"
                  size="big"
                  color="secondary-500"
                  cursor
                />
              </Modal.Open>
              <Modal.Window
                name="swap_settings"
                headerText="Transaction settings"
              >
                <SwapInfoPopup />
              </Modal.Window>
            </Modal>
          </div>
        </div>
        <div className="flex flex-col flex-nowrap items-center relative w-full h-full">
          <div className="flex flex-col flex-nowrap flex-[1] w-full">
            <div className="flex flex-col h-full mr-4 ml-4 swap-content">
              <SwapFrom isSwap={isSwapRotate} onSwap={handleSwapRotate} />

              <SwapTo isSwap={isSwapRotate} />
              <button className="info"></button>
              {isSwapValid && <SwapQuote />}
            </div>
            {!isSwapValid && <SwapFooter />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Swap;
