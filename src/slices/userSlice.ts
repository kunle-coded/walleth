import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/assets";

const initialState: User = {
  password: localStorage.getItem("userPassword")
    ? (localStorage.getItem("userPassword") as string)
    : "",
  mnemonic: "",
  accounts: [],
  messages: [],
  networks: [],
  preferences: [],
  selectedNetwork: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updatePassword(state, action) {
      state.password = action.payload;
      localStorage.setItem("userPassword", state.password);
    },
  },
});

export const { updatePassword } = userSlice.actions;

export default userSlice.reducer;

export const getUser = (state: { user: User }): User => state.user;
