import { AccountOverviewProps } from "../../types/assetsTypes";
import SingleAsset from "../asset/SingleAsset";
import MainAssets from "../asset/MainAssets";
import { useEffect, useState } from "react";
import Swap from "../operations/Swap";

function AccountOverview({ filterRef, isTop }: AccountOverviewProps) {
  const [urlLocation, setUrlLocation] = useState(window.location.hash);
  const [isSingle, setIsSingle] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setUrlLocation(window.location.hash);
      console.log(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (urlLocation.includes("#asset/0x")) {
      setIsSingle(true);
    } else {
      setIsSingle(false);
    }
  }, [urlLocation]);

  return (
    <div
      className={`main-container shadow-[0_2px_4px_0_rgba(0,0,0,0.1)] z-[18] ${
        isSingle ? "bg-white" : ""
      }`}
    >
      {urlLocation === "" && (
        <div className="flex min-h-full">
          <MainAssets filterRef={filterRef} isTop={isTop} />
        </div>
      )}
      {urlLocation.includes("#asset/0x") && <SingleAsset />}
    </div>
  );
}

export default AccountOverview;
