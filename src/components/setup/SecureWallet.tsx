import { useState } from "react";
import Button from "../../ui/Button";
import ButtonWrapper from "../../ui/ButtonWrapper";
import Terms from "../../ui/Terms";
import SecureOpen from "../icons/SecureOpen";

interface CreatePasswordProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onSkip: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function SecureWallet({ onClick, onSkip }: CreatePasswordProps) {
  const [isSkip, setIsSkip] = useState(false);
  const [isSecureOption, setIsSecureOption] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  function handleSkip() {
    setIsSkip(true);
  }

  function handleSecure() {
    setIsSkip(false);
    setIsSecureOption(true);
  }

  function toggleCheck() {
    setIsChecked((checked) => !checked);
  }

  return (
    <div className="w-full flex flex-col overflow-hidden">
      {(isSkip || isSecureOption) && (
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-black opacity-60 z-20"></div>
      )}
      <div className="mb-16">
        <p className="text-lg font-bold mb-2">Secure Your Wallet</p>
      </div>

      <div className="block">
        <SecureOpen />
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
        className={`absolute top-52 left-0 px-6 pt-6 pb-8 rounded-t-xl bg-white overflow-hidden transform transition-all duration-500 ease-in-out ${
          isSkip
            ? "opacity-100 translate-y-0 bottom-0 z-30"
            : "opacity-0 translate-y-full"
        }`}
      >
        {isSkip && (
          <div>
            <h4 className="text-lg font-semibold mb-5">
              What is a 'Seed Phrase'
            </h4>
            <p className="text-secondary-500">
              A seed phrase is a set of twelve words that contains all the
              information about your wallet, including your funds. It's like a
              secret code used to access your entire wallet.
            </p>
            <p className="my-4 text-secondary-500">
              You must keep yourseed phrase secret and safe. If someone gets
              your seed phrase, they'll gain control over your accounts.
            </p>
            <p className="text-secondary-500">
              Save it in a place where only you can access it. If you lose it,
              not even Walleth can help you recover it.
            </p>

            <div className="w-full mt-12 flex flex-col items-center gap-3">
              <Button type="primary" onClick={handleSecure}>
                I Got it
              </Button>
            </div>
          </div>
        )}
      </div>
      <div
        className={`absolute top-[420px] left-0 px-6 pt-6 pb-6 rounded-t-xl bg-white overflow-hidden transform transition-all duration-500 ease-in-out ${
          isSecureOption
            ? "opacity-100 translate-y-0 bottom-0 z-30"
            : "opacity-0 translate-y-full"
        }`}
      >
        {isSecureOption && (
          <div>
            <h4 className="text-lg font-semibold mb-5">
              Skip Account Security?
            </h4>
            <Terms
              value="I understand that if I lose mt seed phrase I will not be able to
              access my wallet"
              isChecked={isChecked}
              onToggle={toggleCheck}
            />

            <div className="w-full mt-12 flex items-center gap-3">
              <Button type="secondary" onClick={onClick}>
                Secure now
              </Button>
              <Button type="primary" onClick={onSkip}>
                Skip
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SecureWallet;
