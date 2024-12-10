import { useEffect, useState } from "react";
import Wallet from "../components/icons/Wallet";
import ImportOption from "../components/setup/ImportOption";
import CreatePassword from "../components/setup/CreatePassword";
import ProgressBar from "../ui/ProgressBar";
import SecureWallet from "../components/setup/SecureWallet";
import StartSecure from "../components/setup/StartSecure";
import SeedPhraseHide from "../components/setup/SeedPhraseHide";
import SeedPhraseConfirm from "../components/setup/SeedPhraseConfirm";
import SecureComplete from "../components/setup/SecureComplete";
import { useAccount } from "../contexts/AccountContext";
import NotSecureComplete from "../components/setup/NotSecureComplete";

function Onboarding() {
  const [setupSteps, setSetupSteps] = useState(0);
  const [progressWidth, setProgressWidth] = useState("0%");
  const [isSecureStart, setIsSecureStart] = useState(false);
  const [isSeedPhrase, setIsSeedPhrase] = useState(false);
  const [isSeedPhraseConfirm, setIsSeedPhraseConfirm] = useState(false);
  const [isSeedPhraseComplete, setIsSeedPhraseComplete] = useState(false);

  const {
    stepCounter,
    setupSteps: steps,
    handleNextStep,
    handleSetupStep,
    handlePrevious,
  } = useAccount();

  useEffect(() => {
    const totalSteps = 3;
    const width = `${Math.min((stepCounter / totalSteps) * 100, 100)}%`;
    setProgressWidth(width);
  }, [stepCounter]);

  function handleSteps(step: string) {
    if (step === "create_password") {
      handleNextStep();
    } else if (step === "secure_wallet") {
      handleNextStep();
    } else if (step === "confirm_seed_phrase") {
      handleNextStep();
    }

    handleSetupStep(step);
  }

  function handleSecureSkip() {
    handleNextStep();
    handleSetupStep("complete_unsecure");
  }

  // localStorage.removeItem("stepCounter");

  function handleClose() {
    setSetupSteps((prevStep) => prevStep - 1);
  }

  return (
    <main className="h-screen w-screen bg-secondary-100 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pt-6 pb-6 pr-6 pl-6 bg-white md:min-h-96 md:min-w-[400px] md:max-w-[450px] rounded-md ">
        {stepCounter >= 1 && (
          <ProgressBar
            currentStep={stepCounter}
            progressWidth={progressWidth}
            onClose={handlePrevious}
          />
        )}

        {stepCounter === 0 && (
          <>
            <Wallet />
            <ImportOption onClick={() => handleSteps("create_password")} />
          </>
        )}
        {steps.currentStep === "create_password" && (
          <CreatePassword onClick={() => handleSteps("secure_wallet")} />
        )}
        {steps.currentStep === "secure_wallet" && (
          <SecureWallet
            onClick={() => handleSteps("start_secure_process")}
            onSkip={handleSecureSkip}
          />
        )}
        {steps.currentStep === "start_secure_process" && (
          <StartSecure onClick={() => handleSteps("hidden_seed_phrase")} />
        )}
        {steps.currentStep === "hidden_seed_phrase" && (
          <SeedPhraseHide onClick={() => handleSteps("confirm_seed_phrase")} />
        )}
        {steps.currentStep === "confirm_seed_phrase" && (
          <SeedPhraseConfirm onClick={() => handleSteps("complete_setup")} />
        )}
        {steps.currentStep === "complete_setup" && (
          <SecureComplete onClick={() => handleSteps("complete_setup_final")} />
        )}
        {steps.currentStep === "complete_unsecure" && (
          <NotSecureComplete
            onClick={() => handleSteps("complete_setup_final")}
          />
        )}
      </div>
    </main>
  );
}

export default Onboarding;
