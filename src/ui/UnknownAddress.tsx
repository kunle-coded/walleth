import { addressFormatter } from "../helpers/addressFormatter";

interface UnknownAddressProps {
  address: string;
  isFull?: boolean;
}

function UnknownAddress({ address, isFull }: UnknownAddressProps) {
  return (
    <div className="flex">
      <div className="inline-flex items-center gap-[5px] max-w-full text-xs pt-px pr-2 pb-px pl-1 bg-secondary-200 rounded-[36px]">
        <span
          className="inline-block text-[20px] w-[1em] h-[1em] max-w-[1em] flex-[0_0_1em] text-secondary-900 bg-current"
          style={{
            maskImage: "url(src/assets/images/question.svg)",
            maskSize: "cover",
            maskRepeat: "no-repeat",
            maskPosition: "center",
          }}
        ></span>
        <p className="text-sm leading-[1.375rem] text-secondary-900 text-ellipsis whitespace-nowrap overflow-hidden md:text-[1rem] md:leading-6">
          {isFull ? addressFormatter(address) : address.slice(0, 10)}
        </p>
      </div>
    </div>
  );
}

export default UnknownAddress;
