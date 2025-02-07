import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import globalSlice from "./slices/globalSlice";
import accountSlice from "./slices/accountSlice";

const store = configureStore({
  reducer: {
    accountSetup: accountSlice,
    user: userSlice,
    global: globalSlice,
  },
});

export default store;
