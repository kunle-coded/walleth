import { createSlice } from "@reduxjs/toolkit";
import { Setup } from "../types/system";

const initialState: Setup = {
  stepCounter: 0,
  setupSteps: { previousStep: "", currentStep: "string" },
  stepRecord: [],
  password: "",
  isSkipped: false,
  imported: {},
};

const setupSlice = createSlice({
  name: "setup",
  initialState,
  reducers: {},
});

export default setupSlice.reducer;

export const getSetup = (state: { setup: Setup }) => state.setup;
