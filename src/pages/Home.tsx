import { useContext, useEffect, useRef, useState } from "react";
import AccountOverview from "../components/homepage/AccountOverview";
import Header from "../components/homepage/Header";
import Navigation from "../components/homepage/Navigation";
import { PopupContext } from "../contexts/PopupContext";
import usePopupCordinates from "../hooks/usePopupCordinates";
import { useGlobal } from "../contexts/GlobalContext";
import Send from "../components/homepage/Send";

function Home() {
  const [urlLocation, setUrlLocation] = useState(window.location.hash);
  const popupContext = useContext(PopupContext);
  const close = popupContext?.close;
  const { onCloseTokenMenu, onCloseTokenFilter } = useGlobal();

  const filterRef = useRef(null);
  const { isTop, calcCoordinates } = usePopupCordinates();

  function handleAnyPopupClose() {
    close?.();
    onCloseTokenMenu?.();
    onCloseTokenFilter?.();
  }

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
      className="w-screen h-full flex flex-col overflow-x-hidden items-center relative bg-primary-100"
      onClick={handleAnyPopupClose}
      onScroll={() => calcCoordinates(filterRef)}
    >
      {urlLocation !== "#send" && <Header />}
      {urlLocation !== "#send" && <Navigation />}
      {urlLocation !== "#send" && (
        <AccountOverview filterRef={filterRef} isTop={isTop} />
      )}
      {urlLocation === "#send" && <Send />}
    </div>
  );
}

export default Home;
