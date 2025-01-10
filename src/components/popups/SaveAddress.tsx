import UnknownAddress from "../../ui/UnknownAddress";

function SaveAddress() {
  const address = "0x2b5A8CD7f3bf420619a68B46d9e5088cA63f760F";
  return (
    <div className="px-4 overflow-y-visible max-h-full relative">
      <div className="text-center mb-4 mt-2">
        <UnknownAddress address={address} isFull />
      </div>
      <p className="mb-4 text-secondary-900 text-sm leading-[1.375rem] md:leading-6 md:text-[1rem] ">
        If you know this address, give it a nickname to recognize it in the
        future.
      </p>
      <div className=""></div>
    </div>
  );
}

export default SaveAddress;
