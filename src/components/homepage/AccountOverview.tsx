import { AccountOverviewProps } from "../../types/assetsTypes";
import SingleAsset from "../asset/SingleAsset";
import MainAssets from "../asset/MainAssets";
import { useGlobal } from "../../contexts/GlobalContext";
import NetworkOption from "../popups/NetworkOption";
import { Window } from "../modal/PopupModal";
import AccountOption from "../popups/AccountOption";

function AccountOverview({ filterRef, isTop }: AccountOverviewProps) {
  const { isViewAsset } = useGlobal();

  return (
    <section className="w-full flex flex-[1_0_auto] justify-center min-h-0">
      <div className="md:w-4/5 lg:w-[62vw] min-h-[82vh] shadow-[0_2px_4px_0_rgba(0,0,0,0.1)] bg-white z-20">
        {!isViewAsset && <MainAssets filterRef={filterRef} isTop={isTop} />}
        {isViewAsset && <SingleAsset />}
      </div>
    </section>
  );
}

export default AccountOverview;
