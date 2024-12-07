import { useEffect, useState } from "react";
import Wallet from "../components/icons/Wallet";
import ImportOption from "../components/setup/ImportOption";
import CreatePassword from "../components/setup/CreatePassword";
import ProgressBar from "../ui/ProgressBar";
import SecureWallet from "../components/setup/SecureWallet";

function Onboarding() {
  const [setupSteps, setSetupSteps] = useState(0);
  const [progressWidth, setProgressWidth] = useState("0%");

  useEffect(() => {
    const totalSteps = 3;
    const width = `${Math.min((setupSteps / totalSteps) * 100, 100)}%`;
    setProgressWidth(width);
  }, [setupSteps]);

  function handleNextStep() {
    setSetupSteps((prevStep) => prevStep + 1);
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
            <ImportOption onClick={handleNextStep} />
          </>
        )}
        {setupSteps === 1 && <CreatePassword onClick={handleNextStep} />}
        {setupSteps === 2 && <SecureWallet onClick={handleNextStep} />}
      </div>
    </main>
  );
}

export default Onboarding;
