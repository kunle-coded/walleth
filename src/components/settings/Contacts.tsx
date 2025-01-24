import React, { Dispatch, useState } from "react";
import AddressListItem from "../lists/AddressListItem";
import AddressDetailItem from "../lists/AddressDetailItem";

interface ContactsProps {
  onContactDetail: Dispatch<React.SetStateAction<boolean>>;
}

function Contacts({ onContactDetail }: ContactsProps) {
  const [isContactDetail, setIsContactDetail] = useState(false);

  function handleContactDetail() {
    onContactDetail(true);
    setIsContactDetail(true);
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-[0.4_1_100%]">
        {isContactDetail ? (
          <div className="p-0 pt-4">
            <AddressDetailItem />
          </div>
        ) : (
          <div className="">
            <div className="">
              <div className="flex flex-col flex-nowrap"></div>
              <AddressListItem onClick={handleContactDetail} />
            </div>
          </div>
        )}
      </div>
      {!isContactDetail && (
        <button className="inline-flex justify-center items-center h-[48px] m-4 p-0 px-4 bg-brand-500 text-white text-sm leading-snug font-medium md:text-[1rem] md:leading-6 relative align-middle select-none cursor-pointer rounded-full border-none">
          Add contact
        </button>
      )}
    </div>
  );
}

export default Contacts;
