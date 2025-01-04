import React, { useState } from "react";

function AccountOverviewTabs() {
  const [activeTab, setActiveTab] = useState(0);

  function handleTab(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;
    console.log(target.tabIndex);
    const active = target.tabIndex;
    setActiveTab(active);
  }

  return (
    <ul className="flex flex-row gap-1 bg-white sticky top-0 z-[2] justify-start  border-none py-0 px-4 list-none">
      <li
        role="tab"
        className={`flex-grow text-sm font-medium leading-[140%] transition-[border-width_150ms_ease-linear,color_150ms_ease-linear] ${
          activeTab === 0
            ? "text-brand-500 border-b-2 border-solid border-brand-500"
            : "text-secondary-900"
        }`}
      >
        <button
          tabIndex={0}
          className="p-2 min-w-[50px] bg-[unset] text-[unset] text-center md:text-[1rem] md:leading-6 w-full block border-none cursor-pointer text-sm"
          onClick={handleTab}
        >
          Tokens
        </button>
      </li>
      <li
        role="tab"
        className={`flex-grow text-sm font-medium leading-[140%] transition-[border-width_150ms_ease-linear,color_150ms_ease-linear] ${
          activeTab === 1
            ? "text-brand-500 border-b-2 border-solid border-brand-500"
            : "text-secondary-900"
        }`}
      >
        <button
          tabIndex={1}
          className="p-2 min-w-[50px] bg-[unset] text-[unset] text-center md:text-[1rem] md:leading-6 w-full block border-none cursor-pointer text-sm"
          onClick={handleTab}
        >
          NFTs
        </button>
      </li>
      <li
        role="tab"
        className={`flex-grow text-sm font-medium leading-[140%] transition-[border-width_150ms_ease-linear,color_150ms_ease-linear] ${
          activeTab === 2
            ? "text-brand-500 border-b-2 border-solid border-brand-500"
            : "text-secondary-900"
        }`}
      >
        <button
          tabIndex={2}
          className="p-2 min-w-[50px] bg-[unset] text-[unset] text-center md:text-[1rem] md:leading-6 w-full block border-none cursor-pointer text-sm"
          onClick={handleTab}
        >
          Activity
        </button>
      </li>
    </ul>
  );
}

export default AccountOverviewTabs;
