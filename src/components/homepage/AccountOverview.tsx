import { useState } from "react";
import { AccountOverviewProps } from "../../types/assetsTypes";
import SingleAsset from "../asset/SingleAsset";
import MainAssets from "../asset/MainAssets";

function AccountOverview({ filterRef, isTop }: AccountOverviewProps) {
  const [isSingle, setIsSingle] = useState(true);

  return (
    <section className="w-full flex flex-[1 0 auto] justify-center min-h-0">
      <div className="md:w-4/5 lg:w-[62vw] min-h-[82vh] shadow-[0_2px_4px_0_rgba(0,0,0,0.1)] bg-white z-20">
        {!isSingle && <MainAssets filterRef={filterRef} isTop={isTop} />}
        {isSingle && <SingleAsset />}
      </div>
    </section>
  );
}

export default AccountOverview;
