import { AccountOverviewProps } from "../../types/assetsTypes";
import SingleAsset from "../asset/SingleAsset";
import MainAssets from "../asset/MainAssets";
import { useEffect, useState } from "react";
import Swap from "../operations/Swap";

function AccountOverview({ filterRef, isTop }: AccountOverviewProps) {
  const [urlLocation, setUrlLocation] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setUrlLocation(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <section className="w-full flex flex-[1_0_auto] justify-center min-h-0">
      <div className="md:w-4/5 lg:w-[62vw] min-h-[82vh] shadow-[0_2px_4px_0_rgba(0,0,0,0.1)] bg-white z-20">
        {urlLocation === "" && (
          <MainAssets filterRef={filterRef} isTop={isTop} />
        )}
        {urlLocation.includes("asset/0x") && <SingleAsset />}
        {urlLocation === "#swap" && <Swap />}
      </div>
    </section>
  );
}

export default AccountOverview;
