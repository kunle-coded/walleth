import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import globalSlice from "./slices/globalSlice";
import setupSlice from "./slices/setupSlice";
import configSlice from "./slices/configSlice";

const store = configureStore({
  reducer: {
    accountSetup: setupSlice,
    user: userSlice,
    config: configSlice,
    global: globalSlice,
  },
});

export default store;
