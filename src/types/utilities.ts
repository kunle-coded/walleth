interface AccountSetup {
  stepCounter: number;
  setupSteps: { previousStep: string; currentStep: string };
  stepRecord: string[];
  password: string;
  isSkipped: boolean;
  isSkipOptions: boolean;
  isImport: boolean;
}

interface Global {
  loginStatus: string;
}

export type { AccountSetup, Global };
