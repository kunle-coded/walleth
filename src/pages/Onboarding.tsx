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
import ImportSeed from "../components/setup/ImportSeed";
import { useState } from "react";

function Onboarding() {
  const [isImport, setIsImport] = useState(false);
  const {
    stepCounter,
    setupSteps,
    handleNextStep,
    handleSetupStep,
    setIsSkipped,
  } = useAccount();

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

  function handleSecureSkip(isChecked: boolean) {
    if (!isChecked) {
      setIsSkipped(() => true);
    } else {
      setIsSkipped(() => false);
      handleNextStep();
      handleSetupStep("complete_unsecure");
    }
  }

  function handleSeedImport() {
    setIsImport(true);
    console.log("import seed");
  }

  function handleImport() {
    console.log("import");
  }

  return (
    <main className="h-screen w-screen bg-secondary-100 relative">
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pt-6 pb-6 pr-6 pl-6 bg-white  md:min-w-[400px] md:max-w-[450px] rounded-md ${
          isImport ? "md:min-h-[42rem]" : "md:min-h-96"
        }`}
      >
        {isImport && (
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-black opacity-60 z-20"></div>
        )}
        {stepCounter >= 1 && <ProgressBar />}

        {stepCounter === 0 && (
          <>
            <Wallet />
            <ImportOption
              onClick={() => handleSteps("create_password")}
              onImport={handleSeedImport}
            />
          </>
        )}
        {setupSteps.currentStep === "create_password" && (
          <CreatePassword onClick={() => handleSteps("secure_wallet")} />
        )}
        {setupSteps.currentStep === "secure_wallet" && (
          <SecureWallet
            onClick={() => handleSteps("start_secure_process")}
            onSkip={handleSecureSkip}
          />
        )}
        {setupSteps.currentStep === "start_secure_process" && (
          <StartSecure onClick={() => handleSteps("hidden_seed_phrase")} />
        )}
        {setupSteps.currentStep === "hidden_seed_phrase" && (
          <SeedPhraseHide onClick={() => handleSteps("confirm_seed_phrase")} />
        )}
        {setupSteps.currentStep === "confirm_seed_phrase" && (
          <SeedPhraseConfirm onClick={() => handleSteps("complete_setup")} />
        )}
        {setupSteps.currentStep === "complete_setup" && <SecureComplete />}
        {setupSteps.currentStep === "complete_unsecure" && (
          <NotSecureComplete />
        )}

        <ImportSeed isShow={isImport} onClick={handleImport} />
      </div>
    </main>
  );
}

export default Onboarding;
