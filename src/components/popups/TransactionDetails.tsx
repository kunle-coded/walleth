import { addressFormatter } from "../../helpers/addressFormatter";
import AccountAvatar from "../icons/AccountAvatar";
import { TransactionType } from "../../types/transactionType";
import TransactionDetailItem from "../../ui/TransactionDetailItem";
import Icon from "../../ui/Icon";
import Modal from "../modal/Modal";
import SaveAddress from "./SaveAddress";
import UnknownAddress from "../../ui/UnknownAddress";

function TransactionDetails() {
  const address = "0x2b5A8CD7f3bf420619a68B46d9e5088cA63f760F";

  const transaction: TransactionType = {
    id: 0,
    nonce: 14,
    amount: -0.002,
    currency: "Eth",
    gasLimit: 164260,
    gasUsed: 108494,
    baseFee: 0.857471765,
    priorityFee: 1.5,
    totalGasFee: 0.000256,
    maxFeeGas: 0.000000005,
    total: 0.00225577,
  };

  function handleSave(value: string) {
    console.log(value);
  }

  return (
    <div className="flex flex-col justify-start items-stretch flex-1 rounded-xl overflow-y-auto relative">
      <div>
        <div className="flex justify-end mt-0 mr-0 mb-4 ml-4">
          <div className="flex flex-row"></div>
        </div>

        <div className="flex justify-between items-center my-2 mx-4 text-xs">
          <div className="flex flex-col justify-between items-start h-[44px]">
            <div className="">Status</div>
            <div className="font-bold">
              <div className="inline text-success-500">Confirmed</div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="pb-4">
              <a
                href=""
                role="button"
                className="flex justify-center items-center w-full p-0 text-xs leading-[100%] rounded-md bg-transparent text-brand-500 decoration-[none] box-border"
              >
                View on block explorer
              </a>
            </div>
            <div>
              <div>
                <a
                  href=""
                  role="button"
                  className="flex justify-center items-center w-full p-0 text-xs leading-[100%] rounded-md bg-transparent text-brand-500 decoration-[none] box-border"
                >
                  Copy transaction ID
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-2 px-4">
          <div className="flex pb-[7px] text-sm font-bold text-secondary-900">
            <div className="flex-1">From</div>
            <div>To</div>
          </div>
          <div className="mb-2">
            <div className="flex flex-row justify-center relative w-full h-[42px]">
              <div className="flex flex-row items-center flex-[1] py-0 pl-0 pr-[30px] border-none text-ellipsis whitespace-nowrap overflow-hidden cursor-pointer">
                <div>
                  <div className="">
                    <AccountAvatar />
                  </div>
                </div>
                <div className="min-w-0">
                  <div className="inline max-w-full">
                    <div className="pl-[14px] text-xs leading-[140%] text-ellipsis whitespace-nowrap overflow-hidden">
                      <span>{addressFormatter(address)}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-center items-center h-full">
                <div className="flex justify-center items-center w-8 h-8 p-[5px] bg-white rounded-3xl border border-solid border-[rgba(175,_180,_192,_0.4)]">
                  <div className="flex justify-center items-center w-full h-full">
                    <span
                      className="inline-block text-[20px] w-[1em] h-[1em] max-w-[1em] flex-[0_0_1em] text-secondary-500 bg-current"
                      style={{
                        maskImage: "url(src/assets/images/arrow-right.svg)",
                        maskSize: "cover",
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                      }}
                    ></span>
                  </div>
                </div>
              </div>
              <Modal>
                <Modal.Open opens="save_address">
                  <div className="flex flex-row items-center flex-[1] py-0 pr-0 pl-[30px] border-solid border-l border-l-[rgba(175,_180,_192,_0.4)] text-ellipsis whitespace-nowrap overflow-hidden cursor-pointer">
                    <div className="min-w-0">
                      <div className="inline max-w-full">
                        <UnknownAddress address={address} />
                      </div>
                    </div>
                  </div>
                </Modal.Open>
                <Modal.Window
                  name="save_address"
                  headerText="Unknown address"
                  showButton
                  buttonText="Save"
                  buttonType="primary"
                  iconUrl="src/assets/images/save.svg"
                >
                  <SaveAddress />
                </Modal.Window>
              </Modal>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mt-0 mr-0 mb-2 ml-0 min-w-0 flex-[1]">
              <div className="pt-2 pb-1 text-sm text-secondary-900 font-bold capitalize">
                transaction
              </div>
              <TransactionDetailItem item="Nonce" value={transaction.nonce} />
              <TransactionDetailItem
                item="Amount"
                value={`${transaction.amount} ${transaction.currency}`}
                weight="bold"
              />
              <TransactionDetailItem
                item="Gas limit (units)"
                value={transaction.gasLimit}
              />
              <TransactionDetailItem
                item="Gas used (units)"
                value={transaction.gasUsed}
              />
              <TransactionDetailItem
                item="Base fee (GWEI)"
                value={transaction.baseFee}
                weight="medium"
              />
              <TransactionDetailItem
                item="Priority fee (GWEI)"
                value={transaction.priorityFee}
                weight="medium"
              />
              <TransactionDetailItem
                item="Total gas fee"
                value={`${transaction.totalGasFee} ${transaction.currency}`}
                weight="medium"
              />
              <TransactionDetailItem
                item="Max fee per gas"
                value={`${transaction.maxFeeGas.toFixed(9)} ${
                  transaction.currency
                }`}
                weight="medium"
              />
              <TransactionDetailItem
                item="Total"
                value={`${transaction.total} ${transaction.currency}`}
                weight="bold"
              />
            </div>
            <div className="my-3">
              <div className="text-sm">
                <details className="">
                  <summary className="flex relative font-extrabold cursor-pointer">
                    <Icon imgUrl="src/assets/images/add.svg" margin="me-2" />
                    Activity log
                  </summary>
                  <div className="pt-[10px] ms-3 text-xs">
                    <div className="min-w-0 flex-[2]">
                      <div className="hidden pb-1 capitalize border-b border-solid border-[rgb(187,192,197,0.4)]">
                        Activity log
                      </div>
                      <div className="pt-0">
                        <div className="flex flex-row items-center relative py-1 px-0 after:w-[8px] after:absolute after:h-[50%] after:top-[50%] after:left-0 after:border-r after:border-solid after:border-r-[rgba(175,_180,_192,_0.4)]">
                          <div className="flex justify-center items-center flex-[0_0_auto] w-[15px] h-[15px] mr-[6px] z-[1] rounded-[50%]">
                            <Icon imgUrl="src/assets/images/add.svg" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs leading-[140%] cursor-pointer">
                              Transaction created with a value of 0.002 ETH at
                              00:00 on 11/30/2024.
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-center relative py-1 px-0 after:w-[8px] after:absolute after:h-[100%] after:top-0 after:left-0 after:border-r after:border-solid after:border-r-[rgba(175,_180,_192,_0.4)]">
                          <div className="flex justify-center items-center flex-[0_0_auto] w-[15px] h-[15px] mr-[6px] z-[1] rounded-[50%]">
                            <Icon imgUrl="src/assets/images/arrow-up.svg" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs leading-[140%] cursor-pointer">
                              Transaction submitted with estimated gas fee of 0
                              ETH at 00:00 on 11/30/2024.
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-center relative py-1 px-0 after:w-[8px] after:absolute after:h-[50%] after:top-0 after:left-0 after:border-r after:border-solid after:border-r-[rgba(175,_180,_192,_0.4)]">
                          <div className="flex justify-center items-center flex-[0_0_auto] w-[15px] h-[15px] mr-[6px] z-[1] rounded-[50%]">
                            <Icon imgUrl="src/assets/images/check.svg" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs leading-[140%] cursor-pointer">
                              Transaction confirmed at 00:01 on 11/30/2024.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="footer"></div>
                </details>
              </div>
            </div>
          </div>
        </div>
        {/* <h4>Transaction details</h4>
        <p>other trans meta</p> */}
      </div>
    </div>
  );
}

export default TransactionDetails;
