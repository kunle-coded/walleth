import { useState } from "react";
import ButtonWithIcon from "../../ui/ButtonWithIcon";
import Icon from "../../ui/Icon";
import General from "./General";
import Advanced from "./Advanced";

const tabItems = [
  { id: 0, label: "General", iconUrl: "src/assets/images/settings.svg" },
  { id: 1, label: "Advanced", iconUrl: "src/assets/images/sliders.svg" },
  { id: 2, label: "Contacts", iconUrl: "src/assets/images/book.svg" },
  {
    id: 3,
    label: "Security & Privacy",
    iconUrl: "src/assets/images/lock-2.svg",
  },
  {
    id: 4,
    label: "Notifications",
    iconUrl: "src/assets/images/notification.svg",
  },
  { id: 5, label: "About", iconUrl: "src/assets/images/info.svg" },
];

function Settings() {
  const [isFocus, setIsFocus] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  function handleFocus() {
    setIsFocus(true);
  }

  function handleBlur() {
    setIsFocus(false);
  }

  function handleTabSelection(tabItem: number) {
    setActiveTab(tabItem);
  }

  return (
    <div className="flex flex-col flex-nowrap main-container shadow-[0_2px_4px_0_rgba(0,0,0,0.1)] bg-white z-[18] relative">
      <div className="page_header p-4 pb-2 sm-p-b-576">
        <div className="grid items-center grid-cols-[197px_1fr_1fr]">
          <div className="settings-page-header-title-w">
            <h3 className="text-secondary-900 text-lg leading-6 font-bold md:text-2xl md:leading-8">
              Settings
            </h3>
          </div>
          <div className="block">
            <div className="inline-flex flex-col w-full min-w-0 m-0 p-0 border-0 align-top relative">
              <div
                className={`inline-flex items-center w-full h-12 px-4 bg-white border border-solid rounded-lg border-[rgba(187,192,197,0.9)] hover:border-brand-500 ${
                  isFocus ? "border-brand-500" : ""
                }`}
              >
                <Icon
                  imgUrl="src/assets/images/search.svg"
                  color="secondary-500"
                />
                <input
                  type="search"
                  placeholder="Search"
                  autoComplete="off"
                  className="w-full flex-grow pl-2 box-content leading-6 text-ellipsis whitespace-nowrap border-none bg-transparent focus-visible:outline-none placeholder:font-[Arial] placeholder:font-medium placeholder:text-secondary-500"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
            </div>
          </div>
          <ButtonWithIcon
            iconUrl="src/assets/images/close.svg"
            margin="ml-auto"
          />
        </div>
      </div>
      <div className="page_contents flex flex-row flex-nowrap h-full overflow-auto">
        <div className="sidebar-tabs flex flex-col flex-auto settings-content-tabs-max-w">
          <div className="flex flex-col justify-start">
            {tabItems.map((tab) => (
              <button
                key={tab.id}
                className={`flex flex-row flex-nowrap flex-[0_0_auto] items-center w-full min-w-0 max-h-[50px] px-4 py-5 relative border-none text-secondary-900 leading-[140%] text-start box-border transition-colors duration-200 ease-linear opacity-100 ${
                  activeTab === tab.id ? "bg-brand-100" : "bg-[unset]"
                }`}
                onClick={() => handleTabSelection(tab.id)}
              >
                {activeTab === tab.id && (
                  <div className="hidden absolute top-1 left-1 w-1 h-[calc(100%_-_8px)] bg-brand-500 rounded-full settings-tabs-active-marker-display-block"></div>
                )}
                <div className="flex items-center relative w-full">
                  <div className="flex justify-center me-4 flex-[0_0_18px]">
                    <span
                      className="inline-block flex-[0_0_1em] text-[20px] w-[1em] h-[1em] max-w-[1em] text-inherit bg-current"
                      style={{
                        maskImage: `url(${tab.iconUrl})`,
                        maskSize: "cover",
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                      }}
                    ></span>
                  </div>
                  <div className="text-[1.125rem] font-medium leading-[140%] settings-tabs-tab-bar-title">
                    {tab.label}
                  </div>
                </div>
                <span
                  className={`inline-block flex-[0_0_1em] text-[16px] w-[1em] h-[1em] max-w-[1em] text-inherit bg-current settings-tabs-caret-display-none`}
                  style={{
                    maskImage: `url(src/assets/images/arrow-right.svg)`,
                    maskSize: "cover",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                  }}
                ></span>
              </button>
            ))}
          </div>
        </div>
        <div className="content-area flex flex-col flex-auto overflow-y-auto">
          <div className="settings-subheader flex flex-row items-center p-4 px-6">
            <h4 className="text-secondary-900 leading-6 font-bold md:text-lg">
              {tabItems[activeTab].label}
            </h4>
          </div>
          {activeTab === 0 && <General />}
          {activeTab === 1 && <Advanced />}
        </div>
      </div>
    </div>
  );
}

export default Settings;
