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

function Onboarding() {
  const [setupSteps, setSetupSteps] = useState(0);
  const [progressWidth, setProgressWidth] = useState("0%");
  const [isSecureStart, setIsSecureStart] = useState(false);
  const [isSeedPhrase, setIsSeedPhrase] = useState(false);
  const [isSeedPhraseConfirm, setIsSeedPhraseConfirm] = useState(false);
  const [isSeedPhraseComplete, setIsSeedPhraseComplete] = useState(false);

  useEffect(() => {
    const totalSteps = 3;
    const width = `${Math.min((setupSteps / totalSteps) * 100, 100)}%`;
    setProgressWidth(width);
  }, [setupSteps]);

  function handleNextStep(step: number) {
    setSetupSteps(step);
  }

  function handleSecureStart() {
    setIsSecureStart(true);
  }
  function handleSeedPhrase() {
    setIsSeedPhrase(true);
  }
  function handleSeedPhraseConfirm() {
    handleNextStep(3);
    setIsSeedPhraseConfirm(true);
  }

  function handleComplete() {
    setIsSeedPhraseComplete(true);
  }

  function handleClose() {
    setSetupSteps((prevStep) => prevStep - 1);
  }

  return (
    <main className="h-screen w-screen bg-secondary-100 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pt-6 pb-6 pr-6 pl-6 bg-white md:min-h-96 md:min-w-[400px] md:max-w-[450px] rounded-md ">
        {setupSteps >= 1 && (
          <ProgressBar
            currentStep={setupSteps}
            progressWidth={progressWidth}
            onClose={handleClose}
          />
        )}

        {setupSteps === 0 && (
          <>
            <Wallet />
            <ImportOption onClick={() => handleNextStep(1)} />
          </>
        )}
        {setupSteps === 1 && (
          <CreatePassword onClick={() => handleNextStep(2)} />
        )}
        {setupSteps === 2 && !isSecureStart && !isSeedPhrase && (
          <SecureWallet onClick={handleSecureStart} />
        )}
        {setupSteps === 2 && isSecureStart && !isSeedPhrase && (
          <StartSecure onClick={handleSeedPhrase} />
        )}
        {setupSteps === 2 && isSeedPhrase && !isSeedPhraseConfirm && (
          <SeedPhraseHide onClick={handleSeedPhraseConfirm} />
        )}
        {setupSteps === 3 && isSeedPhraseConfirm && !isSeedPhraseComplete && (
          <SeedPhraseConfirm onClick={handleComplete} />
        )}
        {setupSteps === 3 && isSeedPhraseComplete && (
          <SecureComplete onClick={handleSeedPhraseConfirm} />
        )}
      </div>
    </main>
  );
}

export default Onboarding;
