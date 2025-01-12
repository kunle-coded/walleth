// Swap assets

import Icon from "../../ui/Icon";

function Swap() {
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
              />
            </div>
          </div>
          <div className="flex flex-col flex-nowrap items-center relative w-full h-full">
            <div className="flex flex-col flex-nowrap flex[1] w-full">
              <div className="flex flex-col h-full swap-content"></div>
              <div className="swap-footer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Swap;
