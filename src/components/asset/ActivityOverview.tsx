import { useEffect, useState } from "react";
import Icon from "../../ui/Icon";
import ActivityListItem from "../lists/ActivityListItem";
import ApiServes from "../../services/ApiServices";
import { useSelector } from "react-redux";
import { getConfig } from "../../slices/configSlice";
import Loader from "../../ui/Loader";

interface Transaction {
  result: object[];
  // Add other relevant fields here
}
function ActivityOverview() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [transactionEmpty, setTransactionEmpty] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const { selectedAccount } = useSelector(getConfig);

  useEffect(() => {
    async function fetchTransaction() {
      const transaction = new ApiServes();
      const transactionData = await transaction.getTransaction(
        selectedAccount.address
      );

      const result = transactionData?.result;

      if (result.length >= 1) {
        setTransactions((prevState) => [...prevState, ...result]);
        setIsLoading(false);
      } else {
        setTransactionEmpty(transactionData.message);
        setIsLoading(false);
      }
    }

    fetchTransaction();
  }, [selectedAccount.address]);

  return (
    <div className="flex-row relative">
      {isLoading ? (
        <div className="flex justify-center items-center px-4 py-24 relative">
          <Loader />
        </div>
      ) : transactions.length >= 1 ? (
        <div className="flex flex-col pt-4">
          <div className="flex-[1]">
            <div className="flex flex-col">
              <p className="ps-4 pe-4 pt-4 text-secondary-900 text-sm font-medium leading-[1.375rem] md:text-[1rem] md:leading-6">
                Nov 30
              </p>
              <ActivityListItem
                iconUrl="src/assets/images/programming.svg"
                status="confirmed"
              />
              <ActivityListItem
                iconUrl="src/assets/images/programming.svg"
                status="confirmed"
              />
              <ActivityListItem
                iconUrl="src/assets/images/received.svg"
                status="confirmed"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center px-4 py-8 z-10">
          <p>{transactionEmpty}</p>
        </div>
      )}

      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center h-[40px] p-0 pl-0 pr-0 mb-4 mt-4 relative bg-transparent text-brand-500 align-middle select-none text-sm leading-[1.375rem] font-semibold md:text-[1rem] md:leading-6 decoration-[none]"
      >
        <Icon
          imgUrl="src/assets/images/message-question.svg"
          color="text-brand-500"
          margin="me-1"
        />
        Walleth support
      </a>
    </div>
  );
}

export default ActivityOverview;
