import { useSelector } from "react-redux";
import selectAccount from "../../db/selectAccount";
import SearchInput from "../../ui/SearchInput";
import Account from "./Account";
import { getConfig } from "../../slices/configSlice";

interface AccountWindowProps {
  onCloseModal?: () => void;
}

function AccountWindow({ onCloseModal }: AccountWindowProps) {
  const { accounts, selectedAccount } = useSelector(getConfig);

  async function handleAccountSelection(accountId: string) {
    await selectAccount(accountId);
    onCloseModal?.();
  }

  return (
    <div className="overflow-auto scrollbar-custom">
      <SearchInput placeholderText="Search accounts" padding />
      {accounts.map((acount, i) => (
        <Account
          key={i}
          account={acount}
          isCurrent={acount.id === selectedAccount.id}
          index={i}
          onSelect={() => handleAccountSelection(acount.id)}
        />
      ))}
    </div>
  );
}

export default AccountWindow;
