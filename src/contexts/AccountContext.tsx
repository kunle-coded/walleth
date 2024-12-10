import { createContext, PropsWithChildren, useContext, useState } from "react";

type AccountType = {
  stepCounter: number;
  setupSteps: { previousStep: string; currentStep: string };
  handleNextStep: () => void;
  handleSetupStep: (step: string) => void;
  handlePrevious: () => void;
};

const AccountContext = createContext<AccountType | undefined>(undefined);

function AccountProvider({ children }: PropsWithChildren) {
  const [stepCounter, setStepCounter] = useState(
    localStorage.getItem("stepCounter") !== null
      ? JSON.parse(localStorage.getItem("stepCounter") as string)
      : 0
  );
  const [setupSteps, setSetupSteps] = useState(
    localStorage.getItem("steps") !== null
      ? JSON.parse(localStorage.getItem("steps") as string)
      : { previousStep: "", currentStep: "" }
  );

  function handleNextStep() {
    setStepCounter((prevStep: number) => {
      const nextStep = prevStep + 1;
      localStorage.setItem("stepCounter", JSON.stringify(nextStep));
      return nextStep;
    });
  }

  function handleSetupStep(step: string) {
    setSetupSteps(
      (prevSteps: { previousStep: string; currentStep: string }) => {
        const newSteps = {
          previousStep: prevSteps.currentStep,
          currentStep: step,
        };
        localStorage.setItem("steps", JSON.stringify(newSteps));
        return newSteps;
      }
    );
  }

  function handlePrevious() {
    setSetupSteps(
      (prevSteps: { previousStep: string; currentStep: string }) => {
        const newSteps = {
          previousStep: prevSteps.previousStep,
          currentStep: prevSteps.previousStep,
        };
        localStorage.setItem("steps", JSON.stringify(newSteps));
        return newSteps;
      }
    );
  }

  return (
    <AccountContext.Provider
      value={{
        stepCounter,
        setupSteps,
        handleNextStep,
        handleSetupStep,
        handlePrevious,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}

function useAccount() {
  const context = useContext(AccountContext);

  if (context === undefined)
    throw new Error("AccountContext was used outside CitiesProvider");
  return context;
}

export { AccountProvider, useAccount };
