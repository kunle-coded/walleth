import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import loginUser from "../db/loginUser";
import { authUser } from "../slices/userSlice";

import Modal from "../components/modal/Modal";
import NetworkAvatar from "../ui/NetworkAvatar";
import Icon from "../ui/Icon";
import SearchInput from "../ui/SearchInput";
import Networks from "../components/popups/Networks";
import BrandSmall from "../components/icons/BrandSmall";

function Login() {
  const [password, setPassword] = useState("");
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  // const { isLogin } = useSelector(getUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const network = "Ethereum Mainnet";

  function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    setPassword(value);
    setIsPasswordError(false);
  }

  async function handleLogin() {
    await loginUser(password)
      .then(() => {
        dispatch(authUser(true));
        navigate("/home");
        setErrorMessage("");
        setIsPasswordError(false);
      })
      .catch((error) => {
        console.log((error as Error).message);
        setErrorMessage((error as Error).message);
        setIsPasswordError(true);
      });
  }

  function onInputFocus() {
    setIsInputFocus(true);
  }
  function onInputBlur() {
    setIsInputFocus(false);
  }

  // if (isLogin) {
  //   return null;
  // }

  return (
    <div className="login h-full flex flex-col overflow-x-hidden items-center relative">
      <div className="flex flex-col flex-nowrap items-center w-full min-h-[68px] mb-0 bg-white shadow-[0_2px_16px_0_rgb(0,0,0,0.1)] z-[55]">
        <div className="app-header-contents h-[68px] p-2 flex flex-row flex-nowrap justify-between items-center gap-2 bg-white">
          <div>
            <Modal>
              <Modal.Open opens="network_options">
                <button
                  aria-label={`Network Menu ${network}`}
                  className="flex items-center m-2 gap-2 h-8 max-w-[250px] pl-2 pr-4 bg-primary-100 border-none rounded-full cursor-pointer"
                >
                  <NetworkAvatar
                    networkName={network}
                    logoLink="src/assets/images/eth-logo.svg"
                  />

                  <span className="text-sm leading-[1.375rem] text-primary-500 font-medium text-ellipsis whitespace-nowrap overflow-hidden">
                    {network}
                  </span>

                  <Icon
                    imgUrl="src/assets/images/arrow-down.svg"
                    margin="ml-auto"
                    size="small"
                  />
                </button>
              </Modal.Open>
              <Modal.Window
                name="network_options"
                headerText="Select a network"
                showButton
                buttonText="Add a custom network"
                fullHeight
                isFullWidth
                iconUrl="src/assets/images/add.svg"
              >
                <div className="overflow-auto h-full scrollbar-custom">
                  <SearchInput placeholderText="Search" padding />
                  <Networks />
                </div>
              </Modal.Window>
            </Modal>
          </div>

          <button className="flex items-center bg-transparent appearance-none border-none">
            <div className="h-[30px] w-[30px] relative">
              <BrandSmall />
            </div>
            <h1 className="ml-2 text-2xl font-semibold tracking-normal text-brand-500 uppercase">
              Walleth
            </h1>
          </button>
        </div>
      </div>

      <div className="flex justify-center flex-[1_0_auto] min-h-0 w-full">
        <div className="flex justify-center self-stretch flex-[1_0_auto] bg-white">
          <div className="flex flex-col justify-start items-center w-[357px] p-[30px] text-secondary-900 font-normal">
            <div className="mascot mt-6 relative">
              <div className="z-0">
                <div className="w-[120px] h-[120px] relative">
                  <BrandSmall />
                </div>
              </div>
            </div>
            <h1 className="mt-1 text-secondary-600 font-bold text-2xl md:text-4xl md:leading-10">
              Welcome back!
            </h1>
            <div>The decentralized web awaits</div>
            <form action="" className="w-full mt-[56px] mb-2 mx-0">
              <div className="inline-flex flex-col w-full min-w-0 m-0 p-0 relative border-0 align-top">
                <label
                  htmlFor="password"
                  className={`absolute top-0 left-0 block p-0 origin-top-left transition-[color,_transform] duration-200 text-secondary-600 text-[1rem] font-normal leading-[1] tracking-[0.00938em] ${
                    isInputFocus || password !== ""
                      ? "translate-x-0 translate-y-[1.5px] scale-75"
                      : "translate-x-0 translate-y-6 scale-100"
                  }`}
                >
                  Password
                </label>
                <div
                  className={`inline-flex items-center w-full mt-4 relative box-border text-[rgb(0,0,0,0.87)] text-[1rem] leading-[1.1876em] tracking-[0.00938em] cursor-text before:absolute before:left-0 before:right-0 before:bottom-0 before:border-b before:border-solid before:border-b-primary-500 before:transition-[border-bottom-color] before:duration-200 before:pointer-events-none after:absolute after:left-0 after:right-0 after:bottom-0 after:border-b-2 after:border-solid after:transition-[transform] after:duration-200 after:pointer-events-none ${
                    isInputFocus ? "after:scale-x-100" : "after:scale-x-0"
                  } ${
                    isPasswordError
                      ? "after:border-b-error-500"
                      : "after:border-b-brand-500"
                  }`}
                >
                  <input
                    value={password}
                    aria-invalid="false"
                    autoComplete="current-password"
                    type="password"
                    dir="auto"
                    className="block w-full min-w-0 h-[1.1876em] m-0 pt-1.5 pb-[7px] px-0 border-0 text-secondary-900 bg-transparent box-content focus:outline-none"
                    onFocus={onInputFocus}
                    onBlur={onInputBlur}
                    onChange={handlePassword}
                  />
                </div>

                <p
                  className={`m-0 mt-[3px] min-h-1 text-left text-error-500 text-xs leading-[140%] tracking-[0.03333em] transition-[transform,_opacity] ${
                    isPasswordError
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-1"
                  }`}
                >
                  {errorMessage}
                </p>
              </div>
            </form>
            <button
              className="flex justify-center items-center w-full h-[60px] mt-5 py-3 px-4 bg-brand-500 text-white rounded-[100px] border border-solid border-primary-400 box-border shadow-none will-change-[box-shadow] transition-[box-shadow_cubic-bezier(0.6,_-0.28,_0.735,_0.045)_200ms] cursor-pointer disabled:cursor-auto disabled:pointer-events-none disabled:opacity-50"
              onClick={handleLogin}
            >
              Unlock
            </button>
            <div className="w-full mt-[15px] text-xs text-center">
              <a
                role="button"
                className="flex justify-center items-center w-full py-3 px-4 rounded-md box-border bg-transparent text-brand-500 font-bold leading-[140%] cursor-pointer"
              >
                Forgot password?
              </a>
            </div>
            <div className="mt-[25px] text-xs">
              <span>
                Need help? Contact{" "}
                <a
                  href="https://support.walleth.io"
                  className="text-brand-600 "
                >
                  Walleth support
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
