import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/assets";

const initialState: User = {
  password: "",
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
  reducers: {},
});

export default userSlice.reducer;

export const getUser = (state: { user: User }): User => state.user;
