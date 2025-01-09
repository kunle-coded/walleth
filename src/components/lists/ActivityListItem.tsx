import NetworkAvatar from "../../ui/NetworkAvatar";
import Modal from "../modal/Modal";
import TransactionDetails from "../popups/TransactionDetails";

function ActivityListItem() {
  return (
    <div className="flex flex-wrap gap w-full-4 p-4 bg-white border-t-[none] cursor-pointer relative">
      <div className="flex flex-row gap-4 w-full">
        <div className="inline-flex">
          <div className="block [align-self:start] relative">
            <div className="flex justify-center items-center w-[32px] h-[32px] max-w-[32px] flex-[0_0_32px] overflow-hidden text-xs leading-5 md:text-sm md:leading-[1.375rem] bg-[rgb(100,_108,_255,_0.15)] text-brand-500 border border-solid border-transparent rounded-[50%] uppercase">
              <span
                className="inline-block w-[1em] h-[1em] max-w-[1em] flex-[0_0_1em] text-[20px] text-inherit bg-current"
                style={{
                  maskImage: `url(src/assets/images/programming.svg)`,
                  maskSize: "cover",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                }}
              ></span>
            </div>
            <div className="absolute -top-1 -right-1">
              <NetworkAvatar
                logoLink="src/assets/images/eth-logo.svg"
                networkName="Eth"
              />
            </div>
          </div>
        </div>
        <div className="inline-flex w-full overflow-hidden">
          <div className="inline-flex flex-col w-[33.333333%] sm-width-576">
            <p className="text-left md:text-[1.125rem] leading-6 font-semibold text-ellipsis whitespace-nowrap overflow-hidden">
              Contract interaction
            </p>
            <div className="text-sm leading-[1.375rem] md:text-[1rem] md:leading-6 font-normal text-left text-ellipsis whitespace-nowrap overflow-hidden text-secondary-900">
              <div className="inline text-success-500">Confirmed</div>
            </div>
          </div>
          <div className="inline-flex flex-col items-end w-full h-min">
            <p className="max-w-[130px] leading-6 font-semibold text-right text-ellipsis whitespace-nowrap overflow-hidden sm-max-width-576 md:text-lg text-secondary-900">
              -0.002 ETH
            </p>
            <p className="leading-[1.375rem] text-sm font-medium text-right text-ellipsis whitespace-nowrap overflow-hidden md:text-[1rem] md:leading-6 text-secondary-500">
              -0.002 ETH
            </p>
          </div>
        </div>
      </div>
      <Modal>
        <Modal.Open opens="transaction_details">
          <button className="absolute inset-[1rem] bg-transparent border-none appearance-none"></button>
        </Modal.Open>
        <Modal.Window
          name="transaction_details"
          headerText="Contract interaction"
        >
          <TransactionDetails />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default ActivityListItem;
