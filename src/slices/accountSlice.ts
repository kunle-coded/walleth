import { createSlice } from "@reduxjs/toolkit";
import { AccountSetup } from "../types/utilities";
import { updatePassword } from "./userSlice";

const initialState: AccountSetup = {
  stepCounter: localStorage.getItem("stepCounter")
    ? JSON.parse(localStorage.getItem("stepCounter") as string)
    : 0,
  setupSteps: localStorage.getItem("steps")
    ? JSON.parse(localStorage.getItem("steps") as string)
    : { previousStep: "", currentStep: "" },
  stepRecord: localStorage.getItem("stepsList")
    ? JSON.parse(localStorage.getItem("stepsList") as string)
    : [],
  password: localStorage.getItem("password")
    ? (localStorage.getItem("password") as string)
    : "",
  isSkipped: localStorage.getItem("seedSecureSkipped")
    ? JSON.parse(localStorage.getItem("seedSecureSkipped") as string)
    : false,
  isSkipOptions: localStorage.getItem("seedSecureSkipOptions")
    ? JSON.parse(localStorage.getItem("seedSecureSkipOptions") as string)
    : false,
  isImport: localStorage.getItem("importSeed")
    ? JSON.parse(localStorage.getItem("importSeed") as string)
    : false,
};

const accountSlice = createSlice({
  name: "accountSetup",
  initialState,
  reducers: {
    addPassword(state, action) {
      state.password = action.payload;
      localStorage.setItem("password", action.payload);
      // localStorage.setItem("userPassword", action.payload);
    },
    nextStep(state, action) {
      if (
        action.payload === "create_password" ||
        action.payload === "secure_wallet" ||
        action.payload === "confirm_seed_phrase" ||
        action.payload === "import_seed"
      ) {
        state.stepCounter = state.stepCounter + 1;
        localStorage.setItem("stepCounter", JSON.stringify(state.stepCounter));
      } else if (action.payload === "complete_setup") {
        state.stepCounter = state.stepCounter + 2;
        localStorage.setItem("stepCounter", JSON.stringify(state.stepCounter));
      }
    },

    addSetupStep(state, action) {
      state.setupSteps = {
        previousStep: state.setupSteps.currentStep,
        currentStep: action.payload,
      };

      localStorage.setItem("steps", JSON.stringify(state.setupSteps));

      if (state.stepRecord.length <= 6) {
        const isInRecord = state.stepRecord.find(
          (record) => record === action.payload
        );

        if (!isInRecord) {
          state.stepRecord = [...state.stepRecord, action.payload];
          localStorage.setItem("stepsList", JSON.stringify(state.stepRecord));
        }
      }
    },

    previousStep(state) {
      // Update counter to decrease by 1
      const currentStep = state.setupSteps.currentStep;
      if (
        currentStep === "complete_unsecure" ||
        currentStep === "confirm_seed_phrase" ||
        currentStep === "secure_wallet" ||
        currentStep === "create_password"
      ) {
        console.log(currentStep);
        state.stepCounter = state.stepCounter - 1;
        localStorage.setItem("stepCounter", JSON.stringify(state.stepCounter));
      }

      // Remove last item from stepsRecord array
      state.stepRecord = state.stepRecord.filter(
        (step) => step !== state.stepRecord[state.stepRecord.length - 1]
      );
      localStorage.setItem("stepsList", JSON.stringify(state.stepRecord));

      // Update setupSteps object
      state.setupSteps = {
        previousStep: state.stepRecord[state.stepRecord.length - 2],
        currentStep: state.stepRecord[state.stepRecord.length - 1],
      };
      localStorage.setItem("steps", JSON.stringify(state.setupSteps));
    },

    setSeedSecureSkipped(state, action) {
      state.isSkipped = action.payload;
      localStorage.setItem(
        "seedSecureSkipped",
        JSON.stringify(state.isSkipped)
      );
    },

    setSeedSkipOptions(state, action) {
      state.isSkipOptions = action.payload;
      localStorage.setItem(
        "seedSecureSkipOptions",
        JSON.stringify(state.isSkipOptions)
      );
    },

    setImportSeed(state, action) {
      state.isImport = action.payload;
      localStorage.setItem("importSeed", JSON.stringify(state.isImport));
    },

    finishSetup(state) {
      updatePassword(state.password);
      // localStorage.clear();
      localStorage.removeItem("password");
      localStorage.removeItem("stepCounter");
      localStorage.removeItem("steps");
      localStorage.removeItem("stepsList");
      localStorage.removeItem("seedSecureSkipped");
      localStorage.removeItem("seedSecureSkipOptions");
      localStorage.removeItem("importSeed");
      return initialState;
    },
  },
});

export const {
  addPassword,
  nextStep,
  previousStep,
  addSetupStep,
  setSeedSecureSkipped,
  setSeedSkipOptions,
  setImportSeed,
  finishSetup,
} = accountSlice.actions;

export default accountSlice.reducer;

export const getAccountSetup = (state: { accountSetup: AccountSetup }) =>
  state.accountSetup;
