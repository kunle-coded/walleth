import { createSlice } from "@reduxjs/toolkit";
import { UserConfig } from "../types/config";

const initialState: UserConfig = {
  accounts: sessionStorage.getItem("accounts")
    ? JSON.parse(sessionStorage.getItem("accounts") as string)
    : [],
  selectedAccount: sessionStorage.getItem("selectedAccount")
    ? JSON.parse(sessionStorage.getItem("selectedAccount") as string)
    : {
        address: "",
        id: "",
        metadata: {
          importTime: 0,
          keyring: "",
          lastSelected: 0,
          name: "",
          nameLastUpdated: "",
        },
        methods: [],
        options: {},
        type: "",
      },
  addressBook: sessionStorage.getItem("addressBook")
    ? JSON.parse(sessionStorage.getItem("addressBook") as string)
    : [],
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    addUserAccounts(state, action) {
      state.accounts = action.payload;
      sessionStorage.setItem("accounts", JSON.stringify(state.accounts));
    },
    addSelectedAccount(state, action) {
      state.selectedAccount = action.payload;
      sessionStorage.setItem(
        "selectedAccount",
        JSON.stringify(state.selectedAccount)
      );
    },
    updateAddressBook(state, action) {
      state.addressBook = action.payload;
      sessionStorage.setItem("addressBook", JSON.stringify(state.addressBook));
    },
    // getUserAccount(state) {
    //   state.accounts = JSON.parse(sessionStorage.getItem("accounts") as string);
    // },
    // getSelectedAccount(state) {
    //   state.selectedAccount = JSON.parse(
    //     sessionStorage.getItem("selectAccount") as string
    //   );
    // },
  },
});

export const { addUserAccounts, addSelectedAccount, updateAddressBook } =
  configSlice.actions;

export default configSlice.reducer;

export const getConfig = (state: { config: UserConfig }) => state.config;
