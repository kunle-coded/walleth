import SearchInput from "../../ui/SearchInput";
import Account from "./Account";

function AccountSelection() {
  return (
    <div className="w-full">
      <SearchInput placeholderText="Search accounts" />
      <div className="overflow-auto">
        <Account current />
        <Account current={false} />
      </div>
      <div className="btn">
        <div className="btn">Add Account +</div>
      </div>
    </div>
  );
}

export default AccountSelection;
