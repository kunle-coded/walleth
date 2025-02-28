import { useSelector } from "react-redux";
import SearchInput from "../../ui/SearchInput";
import Account from "./Account";
import { getConfig } from "../../slices/configSlice";
import { AccountType } from "../../types/config";

interface AccountPickerWindowProps {
  accountFrom: AccountType;
  onSelect: (account: AccountType) => void;
  onCloseModal?: () => void;
}

function AccountPickerWindow({
  accountFrom,
  onSelect,
  onCloseModal,
}: AccountPickerWindowProps) {
  const { accounts } = useSelector(getConfig);

  async function handleAccountSelection(account: AccountType) {
    onSelect(account);
    onCloseModal?.();
  }

  return (
    <div className="overflow-auto scrollbar-custom">
      <SearchInput placeholderText="Search accounts" padding />
      {accounts.map((acount, i) => (
        <Account
          key={i}
          account={acount}
          isCurrent={acount.id === accountFrom.id}
          index={i}
          onSelect={() => handleAccountSelection(acount)}
        />
      ))}
    </div>
  );
}

export default AccountPickerWindow;
