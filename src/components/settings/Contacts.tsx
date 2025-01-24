import React, { Dispatch, useState } from "react";
import AddressListItem from "../lists/AddressListItem";
import AddressDetailItem from "../lists/AddressDetailItem";
import AddContact from "../forms/AddContact";

interface ContactsProps {
  onContactDetail: Dispatch<React.SetStateAction<boolean>>;
  onAddContact: Dispatch<React.SetStateAction<boolean>>;
}

function Contacts({ onContactDetail, onAddContact }: ContactsProps) {
  const [isContactList, setIsContactList] = useState(true);
  const [isContactDetail, setIsContactDetail] = useState(false);
  const [isAddContact, setIsAddContact] = useState(false);

  function handleContactDetail() {
    onContactDetail(true);
    setIsContactDetail(true);
    setIsContactList(false);
  }

  function handleAddContact() {
    onAddContact(true);
    setIsAddContact(true);
    setIsContactDetail(false);
    setIsContactList(false);
  }

  function handleCancel() {
    setIsAddContact(false);
    setIsContactList(true);
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-[0.4_1_100%]">
        {isContactDetail && (
          <div className="p-0 pt-4">
            <AddressDetailItem />
          </div>
        )}
        {isContactList && (
          <div className="">
            <div className="">
              <div className="flex flex-col flex-nowrap"></div>
              <AddressListItem onClick={handleContactDetail} />
            </div>
          </div>
        )}
        {isAddContact && <AddContact onCancel={handleCancel} />}
      </div>
      {!isContactDetail && !isAddContact && (
        <button
          className="inline-flex justify-center items-center h-[48px] m-4 p-0 px-4 bg-brand-500 text-white text-sm leading-snug font-medium md:text-[1rem] md:leading-6 relative align-middle select-none cursor-pointer rounded-full border-none"
          onClick={handleAddContact}
        >
          Add contact
        </button>
      )}
    </div>
  );
}

export default Contacts;
