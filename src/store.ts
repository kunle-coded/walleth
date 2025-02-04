import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import globalSlice from "./slices/globalSlice";
import setupSlice from "./slices/setupSlice";

const store = configureStore({
  reducer: {
    setup: setupSlice,
    user: userSlice,
    global: globalSlice,
  },
});

export default store;
