import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/assets";
import { Auth } from "../types/auth";

const initialState: Auth = {
  isLogin: sessionStorage.getItem("login")
    ? JSON.parse(sessionStorage.getItem("login") as string)
    : false,
  mnemonic:
    localStorage.getItem("mnemonic") !== null
      ? (localStorage.getItem("mnemonic") as string)
      : "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authUser(state, action) {
      state.isLogin = action.payload;
      sessionStorage.setItem("login", JSON.stringify(state.isLogin));
    },

    getUserLogin(state) {
      state.isLogin = JSON.parse(sessionStorage.getItem("login") as string);
    },

    logoutUser(state) {
      state.isLogin = false;
      sessionStorage.removeItem("login");
    },

    setMnemonic(state, action) {
      state.mnemonic = action.payload;
      localStorage.setItem("mnemonic", state.mnemonic);
    },
    getMnemonic(state) {
      state.mnemonic = localStorage.getItem("mnemonic") as string;
    },

    deleteMnemonic(state) {
      state.mnemonic = "";
      localStorage.removeItem("mnemonic");
    },
  },
});

export const {
  authUser,
  getUserLogin,
  deleteMnemonic,
  setMnemonic,
  getMnemonic,
} = userSlice.actions;

export default userSlice.reducer;

export const getUser = (state: { user: User }): User => state.user;
