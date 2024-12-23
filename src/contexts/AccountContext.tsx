import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

type AccountType = {
  stepCounter: number;
  setupSteps: { previousStep: string; currentStep: string };
  stepRecord: string[];
  password: string;
  isSkipped: boolean;
  handlePassword: (password: string) => void;
  handleNextStep: () => void;
  handleSetupStep: (step: string) => void;
  handlePrevious: () => void;
  setIsSkipped: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [stepRecord, setStepRecord] = useState(
    localStorage.getItem("stepsList") !== null
      ? JSON.parse(localStorage.getItem("stepsList") as string)
      : []
  );
  const [password, setPassword] = useState(
    localStorage.getItem("password") !== null
      ? (localStorage.getItem("password") as string)
      : ""
  );
  const [stepsLength, setStepLength] = useState(stepRecord.length - 1);
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    setStepLength(stepRecord.length - 1);
  }, [stepRecord.length]);

  function handlePassword(userPass: string) {
    setPassword(userPass);
    localStorage.setItem("password", userPass);
  }

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

    if (stepRecord.length <= 6) {
      const isInRecord: string = stepRecord.find(
        (record: string) => record === step
      );

      if (!isInRecord) {
        setStepRecord((prevSteps: string[]) => {
          const newStep = [...prevSteps, step];
          localStorage.setItem("stepsList", JSON.stringify(newStep));
          return newStep;
        });
      }
    }
  }

  function handlePrevious() {
    setStepLength((prevLength) => (prevLength >= 0 ? prevLength - 1 : 0));

    setStepRecord((prevSteps: string[]) => {
      const newSteps = prevSteps.filter(
        (step) => step !== stepRecord[stepsLength]
      );
      localStorage.setItem("stepsList", JSON.stringify(newSteps));
      return newSteps;
    });

    setSetupSteps(() => {
      const newSteps = {
        previousStep: stepRecord[stepsLength - 2],
        currentStep: stepRecord[stepsLength - 1],
      };
      localStorage.setItem("steps", JSON.stringify(newSteps));
      return newSteps;
    });

    if (setupSteps.currentStep === "complete_unsecure") {
      setStepCounter((prevStep: number) => {
        const previous = prevStep - 1;
        localStorage.setItem("stepCounter", JSON.stringify(previous));
        return previous;
      });
    } else if (setupSteps.currentStep === "confirm_seed_phrase") {
      setStepCounter((prevStep: number) => {
        const previous = prevStep - 1;
        localStorage.setItem("stepCounter", JSON.stringify(previous));
        return previous;
      });
    } else if (setupSteps.currentStep === "secure_wallet") {
      setStepCounter((prevStep: number) => {
        const previous = prevStep - 1;
        localStorage.setItem("stepCounter", JSON.stringify(previous));
        return previous;
      });
    } else if (setupSteps.currentStep === "create_password") {
      setStepCounter((prevStep: number) => {
        const previous = prevStep - 1;
        localStorage.setItem("stepCounter", JSON.stringify(previous));
        return previous;
      });
    }
  }

  return (
    <AccountContext.Provider
      value={{
        stepCounter,
        setupSteps,
        stepRecord,
        password,
        isSkipped,
        handlePassword,
        handleNextStep,
        handleSetupStep,
        handlePrevious,
        setIsSkipped,
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
