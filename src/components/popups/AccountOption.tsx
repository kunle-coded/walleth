import { useContext } from "react";
import MenuItem from "../../ui/MenuItem";
import Export from "../icons/Export";
import ScanBarcode from "../icons/ScanBarcode";
import SecurityCheck from "../icons/SecurityCheck";
import Snaps from "../icons/Snaps";
import { PopupContext } from "../../contexts/PopupContext";

function AccountOption() {
  const { windowCord } = useContext(PopupContext);

  const popupStyle: React.CSSProperties = {
    position: "absolute",
    inset: "0px auto auto 0px",
    transform: `translate(${windowCord.left - 150}px, ${
      windowCord.top + 15
    }px)`,
    width: "auto",
  };

  return (
    <div
      role="dialog"
      className=" min-w-56 max-w-56 overflow-hidden p-0 bg-white border rounded-lg border-solid border-[rgba(187,192,197,0.4)] shadow-[0_2px_16px_0_rgba(0,0,0,0.1)] z-[1050]"
      style={popupStyle}
    >
      <MenuItem
        menuText="Account details"
        iconUrl="src/assets/images/scan-barcode.svg"
      />
      <MenuItem
        menuText="View on explorer"
        iconUrl="src/assets/images/export.svg"
        showSubmenu
      />
      <MenuItem
        menuText="Pin to top"
        iconUrl="src/assets/images/security-check.svg"
      />
      <MenuItem menuText="Hide account" iconUrl="src/assets/images/snaps.svg" />
    </div>
  );
}

export default AccountOption;
