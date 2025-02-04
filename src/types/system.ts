interface Setup {
  stepCounter: number;
  setupSteps: { previousStep: string; currentStep: string };
  stepRecord: string[];
  password: string;
  isSkipped: boolean;
  imported: object;
}

interface Global {
  loginStatus: string;
}

export type { Setup, Global };
