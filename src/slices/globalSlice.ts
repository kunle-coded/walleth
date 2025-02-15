import { createSlice } from "@reduxjs/toolkit";
import { Global } from "../types/utilities";

const initialState: Global = {
  loginStatus: "",
};
const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
});

export default globalSlice.reducer;

export const getGlobal = (state: { global: Global }) => state.global;
