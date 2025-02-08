import { useContext, useEffect, useRef, useState } from "react";
import AccountOverview from "../components/homepage/AccountOverview";
import Header from "../components/homepage/Header";
import Navigation from "../components/homepage/Navigation";
import { PopupContext } from "../contexts/PopupContext";
import usePopupCordinates from "../hooks/usePopupCordinates";
import { useGlobal } from "../contexts/GlobalContext";
import Send from "../components/operations/Send";
import Settings from "../components/settings/Settings";
import Swap from "../components/operations/Swap";
import Notification from "../components/settings/Notification";
import { useDispatch } from "react-redux";
import { finishSetup } from "../slices/accountSlice";

function Home() {
  const [urlLocation, setUrlLocation] = useState(window.location.hash);
  const popupContext = useContext(PopupContext);
  const close = popupContext?.close;
  const { onCloseTokenMenu, onCloseTokenFilter, hideMenu } = useGlobal();

  const filterRef = useRef(null);
  const { isTop, calcCoordinates } = usePopupCordinates();

  const dispatch = useDispatch();

  function handleAnyPopupClose() {
    hideMenu?.();
    close?.();
    onCloseTokenMenu?.();
    onCloseTokenFilter?.();
  }

  useEffect(() => {
    dispatch(finishSetup());
  }, []);

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
    <div
      className="home h-full flex flex-col overflow-x-hidden items-center relative"
      onClick={handleAnyPopupClose}
      onScroll={() => calcCoordinates(filterRef)}
    >
      {urlLocation !== "#send" && urlLocation !== "#notifications/settings" && (
        <Header />
      )}
      {urlLocation !== "#send" && urlLocation !== "#notifications/settings" && (
        <Navigation />
      )}

      {urlLocation !== "#notifications/settings" && (
        <div className="flex justify-center flex-[1_0_auto] min-h-0 w-full">
          {urlLocation !== "#send" &&
            urlLocation !== "#swap" &&
            urlLocation !== "#settings" && (
              <AccountOverview filterRef={filterRef} isTop={isTop} />
            )}
          {urlLocation === "#swap" && <Swap />}
          {urlLocation === "#send" && <Send />}
          {urlLocation === "#settings" && <Settings />}
        </div>
      )}

      {urlLocation === "#notifications/settings" && (
        <div className="flex justify-center flex-[1_0_auto] min-h-0 w-full">
          <div className="main-container shadow-[0_2px_4px_0_rgba(0,0,0,0.1)] z-[18]">
            <Header />
            <Notification />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

{
  /* <div
  className="home flex flex-col items-center h-full overflow-x-hidden relative"
  onClick={handleAnyPopupClose}
  onScroll={() => calcCoordinates(filterRef)}
>
  {urlLocation !== "#send" && <Header />}
  {urlLocation !== "#send" && <Navigation />}
  {urlLocation !== "#send" && (
    <main className="flex flex-col flex-nowrap flex-[1_0_auto] min-h-[82vh] main-container shadow-[0_2px_4px_0_rgba(0,0,0,0.1)] bg-white z-[] relative">
      {urlLocation !== "send" && (
        <AccountOverview filterRef={filterRef} isTop={isTop} />
      )}
      {urlLocation === "#settings" && <Settings />}
    </main>
  )}

  {urlLocation === "#send" && <Send />}
</div>; */
}
