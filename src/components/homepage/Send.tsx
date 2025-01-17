import { addressFormatter } from "../../helpers/addressFormatter";
import Icon from "../../ui/Icon";
import AccountAvatar from "../icons/AccountAvatar";
import Modal from "../modal/Modal";
import Account from "../popups/Account";

function Send() {
  const address = "0x2b5A8CD7f3bf420619a68B46d9e5088cA63f760F";

  return (
    <div className="flex flex-row justify-center w-full h-full bg-primary-100 ">
      <div className="flex flex-col h-full w-[408px] bg-white">
        <div className="flex justify-center w-full p-4">
          <div className="min-w-6">
            <button className="inline-flex justify-center items-center w-6 h-6 min-w-6 p-0 bg-transparent text-secondary-600 cursor-pointer border-none rounded-lg hover:bg-secondary-200">
              <Icon imgUrl="src/assets/images/arrow-left.svg" />
            </button>
          </div>
          <div className="mr-6 w-[calc(100%_-_48px)]">
            <h4 className="block pe-8 ps-8 text-secondary-900 leading-6 font-bold text-center text-ellipsis whitespace-nowrap overflow-hidden md:text-lg">
              Send
            </h4>
          </div>
        </div>
        <div className="flex flex-col w-full h-full p-4 overflow-auto">
          <div className="flex flex-col pb-4">
            <label
              htmlFor=""
              className="inline-flex items-center pb-2 text-secondary-900 text-sm leading-snug font-medium md:text-[1rem] md:leading-6"
            >
              From
            </label>
            <Modal>
              <Modal.Open opens="account_options">
                <button className="inline-flex justify-start items-center gap-2 h-[62px] w-full max-w-full py-4 pr-4 pl-3 bg-transparent text-secondary-900 text-sm leading-snug font-medium border border-solid border-[rgb(175,180,192,0.4)] rounded-lg relative align-middle cursor-pointer select-none text-ellipsis whitespace-nowrap overflow-hidden md:text-[1rem] md:leading-6 hover:bg-secondary-200">
                  <span className="flex items-center gap-2 w-full text-secondary-900 text-ellipsis whitespace-nowrap overflow-hidden">
                    <AccountAvatar />
                    <span className="flex-grow text-start ps-1 text-secondary-900 text-sm leading-[140%] font-medium text-ellipsis whitespace-nowrap overflow-hidden">
                      Account 1
                      <p className="flex text-secondary-600 text-xs leading-5 md:text-sm md:leading-snug text-ellipsis whitespace-nowrap overflow-hidden">
                        {addressFormatter(address)}
                      </p>
                    </span>
                  </span>
                  <Icon
                    imgUrl="src/assets/images/arrow-down.svg"
                    margin="ms-1"
                  />
                </button>
              </Modal.Open>
              <Modal.Window
                name="account_options"
                headerText="Select an account"
                showButton
                isAccount
                buttonText="Add account or hardware wallet"
                iconUrl="src/assets/images/add.svg"
              >
                <div className="overflow-auto scrollbar-custom">
                  <Account current index={0} />
                  <Account current={false} index={1} />
                  <Account current={false} index={2} />
                  <Account current={false} index={3} />
                </div>
              </Modal.Window>
            </Modal>
          </div>
          <div className="mt-6">
            <div className="flex flex-col pb-4">
              <label className="inline-flex items-center pb-2 text-secondary-900 text-sm leading-snug font-medium md:text-[1rem] md:leading-6">
                To
              </label>
              <div className="flex flex-row flex-nowrap">
                <div className="flex flex-row flex-nowrap flex-auto items-center w-0 p-3 bg-white rounded-lg border border-solid border-[rgb(175,180,192,0.4)] transition-[border-color] ease-in-out">
                  <input
                    type="text"
                    placeholder="Enter public address (0x) or domain name"
                    dir="auto"
                    spellCheck="false"
                    className="flex-auto w-0 border-0 outline-none bg-white text-secondary-900 text-sm leading-[140%]"
                  />
                  <button
                    aria-label="Scan QR code"
                    className="flex justify-center items-center py-0 px-2 text-[16px] h-6 w-8 min-w-8 bg-none border-none rounded-lg text-brand-500 cursor-pointer"
                  >
                    <Icon imgUrl="src/assets/images/scan.svg" size="big" />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full pb-0"></div>
          </div>
        </div>
        <div className="flex w-full p-4 gap-4">button</div>
      </div>
    </div>
  );
}

export default Send;
