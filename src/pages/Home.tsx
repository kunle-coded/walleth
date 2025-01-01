import { useContext } from "react";
import AccountOverview from "../components/homepage/AccountOverview";
import Header from "../components/homepage/Header";
import Navigation from "../components/homepage/Navigation";
import { PopupContext, PopupProvider } from "../contexts/PopupContext";

function Home() {
  const { close } = useContext(PopupContext);

  return (
    <PopupProvider>
      <main
        className="w-screen h-screen flex flex-col overflow-x-hidden items-center relative bg-primary-100"
        onClick={close}
      >
        <Header />
        <Navigation />
        <AccountOverview />
      </main>
    </PopupProvider>
  );
}

export default Home;
