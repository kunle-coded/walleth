import AccountOverview from "../components/homepage/AccountOverview";
import Header from "../components/homepage/Header";
import Navigation from "../components/homepage/Navigation";

function Home() {
  return (
    <main className="w-screen h-screen flex flex-col overflow-x-hidden items-center relative bg-primary-100">
      <Header />
      <Navigation />
      <AccountOverview />
    </main>
  );
}

export default Home;
