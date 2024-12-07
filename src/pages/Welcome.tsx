import { useState } from "react";
import Button from "../ui/Button";
import Brand from "../components/icons/Brand";
import LinkButton from "../ui/LinkButton";

function Welcome() {
  const [isStarted, setIsStarted] = useState(false);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    setIsStarted(false);
    console.log(isStarted);
  }

  return (
    <main className="h-screen w-screen bg-secondary-100 relative overflow-hidden">
      <img
        src="bg-home.png"
        alt=""
        className="absolute top-0 left-0 w-full h-full opacity-50 z-[1]"
      />
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pt-10 pb-10 pr-10 pl-10 bg-white md:min-h-96 md:min-w-[700px] rounded-md z-10 opacity-100`}
      >
        <Brand />
        <h1 className="text-center text-5xl text-primary-500">
          Get started with Walleth
        </h1>
        <p className="text-center text-lg text-primary-500 mt-3">
          Get a clear, comprehensive view of your accounts and wallets, across
          all networks. Connect your Walleth or watch any Ethereum address.
        </p>

        <div className="mt-16 w-full flex flex-col items-center">
          <div className="w-1/2 flex flex-col items-center gap-3">
            <LinkButton type="primary" href="/setup" onClick={handleClick}>
              Get Started
            </LinkButton>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Welcome;
