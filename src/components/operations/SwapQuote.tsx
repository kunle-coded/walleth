import Icon from "../../ui/Icon";
import SwapFooter from "./SwapFooter";

function SwapQuote() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col items-center flex-1 w-full">
        <div className="flex bg-brand-100 p-3 pl-2 mt-2 gap-2 rounded border-l-4 border-solid border-brand-500">
          <Icon
            imgUrl="src/assets/images/info.svg"
            size="big"
            color="brand-500"
          />
          <div className="min-w-0">
            <p className="text-secondary-900 leading-6 font-semibold md:text-lg">
              Insufficient balance
            </p>
            <p className="text-secondary-900 text-sm leading-snug md:leading-6 md:text-[1rem]">
              <span>
                {" "}
                You need <span>4</span> more ETH to complete this swap{" "}
              </span>
            </p>
            <p className="text-secondary-900 text-sm leading-snug md:leading-6 md:text-[1rem]"></p>
            <button className="inline-flex justify-center items-center h-auto pr-0 pl-0 p-0 border-none bg-transparent  text-brand-500 text-sm leading-snug font-semibold relative select-none align-middle cursor-pointer md:leading-6 md:text-[1rem]">
              Buy more ETH
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <div className="flex justify-center countdown-m-0 text-xs leading-[140%]">
            <div className="flex items-center pr-[3px] text-secondary-600">
              <span>New quotes in </span>
              <div className="flex items-center w-6 ml-1 mr-0.5 text-error-500 text-xs leading-[140%] font-bold">
                0:00
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mt-1">
          <div className="flex flex-row justify-between items-center">
            <p className="mr-1 text-secondary-900 text-sm leading-snug font-medium md:leading-6 md:text-[1rem]">
              Quote rate *
            </p>
            <div className="flex justify-center items-end flex-wrap w-auto text-secondary-900 text-sm leading-[140%]">
              <div className="flex flex-row justify-center items-center gap-1">
                <span>1</span>
                <span>ETH</span>
                <span>=</span>
                <span>3153.81725</span>
                <span>DAI</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-stretch">
            <div className="flex flex-row items-center w-6/12">
              <h6 className="mr-1 text-secondary-900 text-sm leading-snug font-medium md:leading-6 md:text-[1rem]">
                Estimated gas fee
              </h6>
              <div className="info-tooltip">
                <div className="flex items-center mr-1">
                  <div className="inline text-secondary-500">
                    <svg
                      viewBox="0 0 10 10"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        position: "static",
                        width: "12px",
                        height: "12px",
                      }}
                    >
                      <path
                        d="M5 0C2.2 0 0 2.2 0 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 2c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.2-.7-.6.3-.8.7-.8zm.7 6H4.3V4.3h1.5V8z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-end w-6/12">
              <h6 className="w-8/12 mr-1 text-right text-secondary-900 text-sm leading-snug font-medium md:leading-6 md:text-[1rem]">
                0.00248 ETH
              </h6>
              <h6 className="w-4/12 text-right text-secondary-900 text-sm leading-snug font-bold md:leading-6 md:text-[1rem]">
                $7.52
              </h6>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-row w-6/12"></div>
            <div className="flex flex-row justify-end w-6/12">
              <p className="w-8/12 pr-1 text-right text-secondary-900 text-xs leading-5 md:text-sm md:leading-snug ">
                Max fee:{" "}
              </p>
              <p className="w-4/12 text-right text-secondary-900 text-xs leading-5 md:text-sm md:leading-snug ">
                $12.92
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center mt-3">
            <p className="text-right text-secondary-500 text-xs leading-5 md:text-sm md:leading-snug ">
              *
              <span>
                Includes a 0.875% Walleth fee –{" "}
                <button className="inline-flex justify-center items-center h-auto p-0 px-0 border-none text-brand-500 bg-transparent cursor-pointer font-medium select-none relative align-top">
                  view all quotes
                </button>
              </span>
            </p>
          </div>
        </div>
      </div>
      <SwapFooter />
    </div>
  );
}

export default SwapQuote;
