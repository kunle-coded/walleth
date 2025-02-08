import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  nextStep,
  addSetupStep,
  getAccountSetup,
  setSeedSecureSkipped,
  setSeedSkipOptions,
} from "../../slices/accountSlice";
import Button from "../../ui/Button";
import ButtonWrapper from "../../ui/ButtonWrapper";
import Terms from "../../ui/Terms";
import SecureOpen from "../icons/SecureOpen";
import stopPropagation from "../../helpers/stopPropagation";

function SecureWallet() {
  const [isCheckError, setIsCheckError] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const { isSkipped, isSkipOptions } = useSelector(getAccountSetup);

  const dispatch = useDispatch();

  function handleStartSecure() {
    dispatch(nextStep("start_secure_process"));
    dispatch(addSetupStep("start_secure_process"));
    dispatch(setSeedSecureSkipped(false));
  }

  function handleSkip() {
    dispatch(setSeedSecureSkipped(true));
  }

  function handleSecure() {
    dispatch(setSeedSecureSkipped(false));
    dispatch(setSeedSkipOptions(true));
  }

  function handleSecureSkip() {
    if (isChecked) {
      setIsCheckError(false);
      dispatch(setSeedSecureSkipped(true));
      dispatch(nextStep("complete_unsecure"));
      dispatch(addSetupStep("complete_unsecure"));
    }
  }

  function toggleCheck() {
    setIsChecked((checked) => !checked);
  }

  function handleModalClick() {
    dispatch(setSeedSecureSkipped(false));
  }

  return (
    <div className="w-full flex flex-col overflow-hidden">
      {(isSkipped || isSkipOptions) && (
        <div
          className="goback absolute top-0 left-0 bottom-0 right-0 bg-black opacity-60 z-20"
          onClick={handleModalClick}
        ></div>
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
        <Button type="primary" onClick={handleStartSecure}>
          Start
        </Button>
      </ButtonWrapper>

      <div
        className={`absolute top-52 left-0 px-6 pt-6 pb-8 rounded-t-xl bg-white overflow-hidden transform transition-all duration-500 ease-in-out ${
          isSkipped
            ? "opacity-100 translate-y-0 bottom-0 z-30"
            : "opacity-0 translate-y-full"
        }`}
      >
        {isSkipped && (
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
        className={`absolute top-[400px] left-0 px-6 pt-6 pb-6 rounded-t-xl bg-white overflow-hidden transform transition-all duration-500 ease-in-out ${
          isSkipOptions
            ? "opacity-100 translate-y-0 bottom-0 z-30"
            : "opacity-0 translate-y-full"
        }`}
        onClick={stopPropagation}
      >
        {isSkipOptions && (
          <div>
            <h4 className="text-lg font-semibold mb-5">
              Skip Account Security?
            </h4>
            <Terms
              value="I understand that if I lose my seed phrase I will not be able to
              access my wallet"
              isChecked={isChecked}
              onToggle={toggleCheck}
            />

            <p
              className={`mt-4 text-xs text-wrap text-red-600 transition-all ${
                isCheckError
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-1"
              }`}
            >
              To skip, please click the checkbox to agree to the terms
            </p>

            <div className="w-full mt-12 flex items-center gap-3">
              <Button type="secondary" onClick={handleStartSecure}>
                Secure now
              </Button>
              <Button
                type="primary"
                onClick={handleSecureSkip}
                isDisabled={!isChecked}
              >
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
