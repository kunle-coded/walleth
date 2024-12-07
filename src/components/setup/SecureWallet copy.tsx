import { useEffect, useState } from "react";
import { useField } from "../../hooks/useField";
import Button from "../../ui/Button";
import ButtonWrapper from "../../ui/ButtonWrapper";
import FormInput from "../../ui/FormInput";
import Secure from "../icons/Secure";

interface CreatePasswordProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function SecureWallet({ onClick }: CreatePasswordProps) {
  const [isSkip, setIsSkip] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  function handleSkip() {
    setIsSkip(true);
  }

  console.log(isSkip);

  return (
    <div className="mt-6 w-full flex flex-col overflow-hidden">
      {isSkip && (
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-black opacity-60 z-20"></div>
      )}
      <div className="mb-16">
        <p className="text-lg font-bold mb-2">Secure Your Wallet</p>
      </div>

      <div className="block">
        <Secure />
      </div>

      <div className="flex justify-start items-start mt-8">
        <p className="text-wrap text-secondary-500">
          Don't risk losing your funds. Protect your wallet by saving your{" "}
          <span className="font-medium text-black">seed phrase</span> in a place
          you trust.{" "}
          <span className="text-secondary-900">
            It's the only way to recover your wallet if you get locked out of
            the app or get a new device.
          </span>
        </p>
      </div>

      <ButtonWrapper>
        <Button type="secondary" onClick={handleSkip}>
          Remind Me Later
        </Button>
        <Button type="primary" onClick={onClick}>
          Start
        </Button>
      </ButtonWrapper>

      <div
        className={`absolute top-56 bottom-0 left-0 p-6 rounded-t-xl bg-secondary-100 opacity-0 translate-y-full overflow-hidden slideUp ${
          isSkip ? "opacity-100 z-30 -translate-y-full" : ""
        }`}
      >
        {isSkip && (
          <p className="">
            A seed phrase is a set of twelve words that contains all the
            information about your wallet, including your funds. It's like a
            secret code used to access your entire wallet. You must keep your
            seed phrase secret and safe. If someone gets your seed phrase,
            they'll gain control over your accounts. Save it in a place where
            only you can access it. If you lose it, not even Cryptooly can help
            you recover it.
          </p>
        )}
      </div>
    </div>
  );
}

export default SecureWallet;
