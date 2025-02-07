import { useSelector } from "react-redux";
import { getAccountSetup } from "../slices/accountSlice";
import Wallet from "../components/icons/Wallet";
import ImportOption from "../components/setup/ImportOption";
import CreatePassword from "../components/setup/CreatePassword";
import ProgressBar from "../ui/ProgressBar";
import SecureWallet from "../components/setup/SecureWallet";
import StartSecure from "../components/setup/StartSecure";
import SeedPhraseHide from "../components/setup/SeedPhraseHide";
import SeedPhraseConfirm from "../components/setup/SeedPhraseConfirm";
import SecureComplete from "../components/setup/SecureComplete";
import NotSecureComplete from "../components/setup/NotSecureComplete";
import ImportSeed from "../components/setup/ImportSeed";

function Onboarding() {
  const { stepCounter, setupSteps, isImport } = useSelector(getAccountSetup);

  return (
    <main className="h-full w-full bg-secondary-100 relative">
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pt-6 pb-6 pr-6 pl-6 bg-white  md:min-w-[400px] md:max-w-[450px] rounded-md ${
          setupSteps.currentStep === "import_seed"
            ? "md:min-h-[42rem]"
            : "md:min-h-96"
        }`}
      >
        {setupSteps.currentStep === "import_seed" && (
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-black opacity-60 z-20"></div>
        )}
        {stepCounter >= 1 && <ProgressBar />}

        {stepCounter === 0 && (
          <>
            <Wallet />
            <ImportOption />
          </>
        )}
        {setupSteps.currentStep === "create_password" && <CreatePassword />}
        {setupSteps.currentStep === "secure_wallet" && <SecureWallet />}
        {setupSteps.currentStep === "start_secure_process" && <StartSecure />}
        {setupSteps.currentStep === "hidden_seed_phrase" && <SeedPhraseHide />}
        {setupSteps.currentStep === "confirm_seed_phrase" && (
          <SeedPhraseConfirm />
        )}
        {setupSteps.currentStep === "complete_setup" && <SecureComplete />}
        {setupSteps.currentStep === "complete_unsecure" && (
          <NotSecureComplete />
        )}

        {setupSteps.currentStep === "import_seed" && <ImportSeed />}
      </div>
    </main>
  );
}

export default Onboarding;
