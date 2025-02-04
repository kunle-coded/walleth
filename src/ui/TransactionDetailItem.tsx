import { TransactionDetailItemType } from "../types/transaction";

function TransactionDetailItem({
  item,
  value,
  weight,
}: TransactionDetailItemType) {
  return (
    <div className="flex justify-between py-2 px-0 text-secondary-500 text-xs leading-[140%] font-medium border-b border-solid border-white">
      <div className="min-w-[40%] pr-2">{item}</div>
      <div className="min-w-0 break-words">
        {weight === "bold" ? (
          <span className="flex justify-end text-end text-ellipsis overflow-hidden text-secondary-900 font-bold">
            {value}
          </span>
        ) : weight === "medium" ? (
          <div className="flex justify-end items-center flex-wrap text-end text-ellipsis overflow-hidden">
            <span
              title={value.toString().split(" ")[0]}
              className="text-ellipsis whitespace-nowrap overflow-hidden text-secondary-900"
            >
              {value}
            </span>
          </div>
        ) : (
          <div className="flex justify-end text-end text-ellipsis overflow-hidden">
            {value}
          </div>
        )}
      </div>
    </div>
  );
}

export default TransactionDetailItem;
