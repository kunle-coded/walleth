import { useContext } from "react";
import { PopupContext } from "../../contexts/PopupContext";
import Icon from "../../ui/Icon";

function AssetOption() {
  const { windowCord } = useContext(PopupContext);

  const popupStyle: React.CSSProperties = {
    position: "absolute",
    inset: "0px auto auto 0px",
    transform: `translate(${windowCord.left - 106}px, ${
      windowCord.top + 20
    }px)`,
    width: "auto",
  };

  return (
    <div
      role="dialog"
      className=" min-w-56 max-w-56 overflow-hidden p-0 bg-white border rounded-lg border-solid border-[rgba(187,192,197,0.4)] shadow-[0_2px_16px_0_rgba(0,0,0,0.1)] z-[1051]"
      style={popupStyle}
    >
      <div
        data-focus-guard="true"
        tabIndex={0}
        className="w-px h-0 p-0 overflow-hidden fixed top-px left-px"
      ></div>
      <div data-focus-lock-disabled="false">
        <div>
          <button className="grid grid-cols-[min-content_auto] items-center w-full text-start py-[14px] px-4 cursor-pointer bg-transparent text-inherit border-none hover:bg-secondary-200">
            <Icon imgUrl="src/assets/images/export.svg" margin="mr-2" />

            <div>
              <div>View Asset on explorer</div>
            </div>
          </button>
        </div>
      </div>

      <div
        data-focus-guard="true"
        tabIndex={0}
        className="w-px h-0 p-0 overflow-hidden fixed top-px left-px"
      ></div>
    </div>
  );
}

export default AssetOption;
