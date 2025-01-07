import { useContext, useRef } from "react";
import AccountOverview from "../components/homepage/AccountOverview";
import Header from "../components/homepage/Header";
import Navigation from "../components/homepage/Navigation";
import { PopupContext, PopupProvider } from "../contexts/PopupContext";
import usePopupCordinates from "../hooks/usePopupCordinates";
import { useGlobal } from "../contexts/GlobalContext";

function Home() {
  const { close } = useContext(PopupContext);
  const { onCloseTokenMenu, onCloseTokenFilter } = useGlobal();

  const filterRef = useRef(null);
  const { isTop, coordinates, calcCoordinates } = usePopupCordinates();

  function handleAnyPopupClose() {
    close?.();
    onCloseTokenMenu?.();
    onCloseTokenFilter?.();
  }

  return (
    <PopupProvider>
      <main
        className="w-screen h-screen flex flex-col overflow-x-hidden items-center relative bg-primary-100"
        onClick={handleAnyPopupClose}
        onScroll={() => calcCoordinates(filterRef)}
      >
        <Header />
        <Navigation />
        <AccountOverview
          filterRef={filterRef}
          isTop={isTop}
          coords={coordinates}
        />
      </main>
    </PopupProvider>
  );
}

export default Home;
