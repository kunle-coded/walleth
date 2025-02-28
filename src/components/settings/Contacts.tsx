import React, { Dispatch, useState } from "react";
import { useSelector } from "react-redux";
import AddressListItem from "../lists/AddressListItem";
import AddressDetailItem from "../lists/AddressDetailItem";
import AddContact from "../forms/AddContact";
import EditContact from "../forms/EditContact";
import addAddressBook from "../../db/addAddressBook";
import { getConfig } from "../../slices/configSlice";
import { Address } from "../../types/config";

interface ContactsProps {
  onContactDetail: (address: Address) => void;
  onContactDetailCancel: () => void;
  onAddContact: Dispatch<React.SetStateAction<boolean>>;
}

function Contacts({
  onContactDetail,
  onContactDetailCancel,
  onAddContact,
}: ContactsProps) {
  const [isContactList, setIsContactList] = useState(true);
  const [isContactDetail, setIsContactDetail] = useState(false);
  const [isAddContact, setIsAddContact] = useState(false);
  const [isEditContact, setIsEditContact] = useState(false);
  const [selectedContactDetail, setSelectedContactDetail] = useState<Address>(
    {} as Address
  );

  const { addressBook } = useSelector(getConfig);

  function handleContactDetail(address: Address) {
    onContactDetail(address);
    setSelectedContactDetail(address);
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
    setIsEditContact(false);
    onContactDetailCancel();
  }

  function handleEdit() {
    setIsContactDetail(false);
    setIsEditContact(true);
    // setIsAddContact(false);
    // setIsContactList(true);
  }

  async function handleSaveContact(alias: string, address: string) {
    await addAddressBook(alias, address);
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-[0.4_1_100%]">
        {isContactDetail && (
          <div className="p-0 pt-4">
            <AddressDetailItem
              address={selectedContactDetail}
              onEdit={handleEdit}
            />
          </div>
        )}
        {isContactList && (
          <div className="">
            <div className="">
              <div className="flex flex-col flex-nowrap"></div>
              {addressBook.map((address, index) => (
                <AddressListItem
                  key={address.id}
                  address={address}
                  index={index}
                  onClick={() => handleContactDetail(address)}
                />
              ))}
            </div>
          </div>
        )}
        {isAddContact && (
          <AddContact onSave={handleSaveContact} onCancel={handleCancel} />
        )}
        {isEditContact && (
          <EditContact
            address={selectedContactDetail}
            onCancel={handleCancel}
          />
        )}
      </div>
      {!isContactDetail && !isAddContact && !isEditContact && (
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
