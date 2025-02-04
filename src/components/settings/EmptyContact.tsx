import { Dispatch, useState } from "react";
import AddContact from "../forms/AddContact";

interface EmptyContactProps {
  onAddContact: Dispatch<React.SetStateAction<boolean>>;
}

function EmptyContact({ onAddContact }: EmptyContactProps) {
  const [isAddContact, setIsAddContact] = useState(false);

  function handleAddContact() {
    onAddContact(true);
    setIsAddContact(true);
  }

  function handleCancel() {
    onAddContact(false);
    setIsAddContact(false);
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-[0.4_1_100%]">
        {isAddContact && <AddContact onCancel={handleCancel} />}
        {!isAddContact && (
          <div className="flex justify-center items-center text-center min-h-[70%] my-0 mx-auto">
            <div>
              <span
                className="block flex-[0_0_1em] mt-0 mb-4 mx-auto text-[32px] w-[1em] h-[1em] max-w-[1em] text-secondary-400 bg-current"
                style={{
                  maskImage: "url(src/assets/images/book.svg)",
                  maskSize: "cover",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                }}
              ></span>
              <h4 className="text-lg font-bold leading-[140%] mb-[0.5em]">
                Build your contact list
              </h4>
              <p className="text-[small] font-normal mb-[0.5em]">
                Add friends and addresses you trust
              </p>
              <button
                className="bg-transparent text-brand-500 border-none cursor-pointer"
                onClick={handleAddContact}
              >
                + Add contact
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmptyContact;
