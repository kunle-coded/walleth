import React, { useEffect, useState } from "react";
import { useField } from "../../hooks/useField";
import Button from "../../ui/Button";
import ButtonWrapper from "../../ui/ButtonWrapper";
import FormInput from "../../ui/FormInput";
import Terms from "../../ui/Terms";
import { useAccount } from "../../contexts/AccountContext";
import ViewPassword from "../icons/ViewPassword";

interface ImportSeedProps {
  isShow: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function ImportSeed({ onClick, isShow }: ImportSeedProps) {
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isShowSeed, setIsShowSeed] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [seedValue, setSeedValue] = useState("");
  const [rows, setRows] = useState(1);

  const { handlePassword } = useAccount();

  const password = useField("password");
  const confirmPassword = useField("password");
  const { value, type, ...passwordProps } = password;
  const {
    value: confirmPasswordValue,
    type: confirmType,
    ...confirmPasswordProps
  } = confirmPassword;

  useEffect(() => {
    if (isShowSeed) {
      setInputType("text");
    } else {
      setInputType("password");
    }
  }, [isShowSeed]);

  useEffect(() => {
    if (value !== "" && confirmPasswordValue !== "") {
      if (value === confirmPasswordValue) {
        setPasswordMatch(true);
      } else {
        setPasswordMatch(false);
      }
    } else {
      setPasswordMatch(false);
    }
  }, [value, confirmPasswordValue]);

  function handleCreatePassword(event: React.MouseEvent<HTMLButtonElement>) {
    if (value === confirmPasswordValue) {
      handlePassword(value);
      onClick(event);
    }
  }

  function handleSeedInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    e.target.style.height = "auto";
    const inputTextValue = e.target.value;

    // const trimmedInput = inputTextValue.trim();
    // const word = trimmedInput.length / 12;
    // const formttedInput = trimmedInput.length;

    setSeedValue(inputTextValue);

    if (inputTextValue.length >= 29) {
      setRows(2);
    } else {
      setRows(1);
    }
  }

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  function toggleShowPassword() {
    setIsShowSeed((prevState) => !prevState);
  }

  return (
    <div
      className={`absolute top-[80px] right-0 left-0 px-6 pt-8 pb-6 rounded-t-xl bg-white overflow-hidden transform transition-all duration-500 ease-in-out ${
        isShow
          ? "opacity-100 translate-y-0 bottom-0 z-30"
          : "opacity-0 translate-y-full"
      }`}
    >
      <div className="mb-6">
        <p className="text-lg font-bold mb-2">Import from seed</p>
      </div>

      <div className="flex flex-col w-full h-full pb-14 justify-between">
        <div className="flex flex-col w-full gap-5">
          <div className="flex flex-col gap-1">
            <div className="flex relative bg-secondary-200 rounded">
              <span
                className={`absolute left-4 ${
                  isFocused || seedValue
                    ? "top-2 text-xs"
                    : "top-4 text-sm font-medium"
                } text-secondary-300 z-10 transition-all`}
              >
                Seed phrase
              </span>
              <textarea
                className="w-full bg-transparent text-secondary-900 px-4 pb-2 pt-6 z-20 focus:outline-none resize-none"
                rows={rows}
                value={seedValue}
                onChange={handleSeedInput}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />

              {type === "password" && (
                <ViewPassword
                  showPassword={isShowSeed}
                  toggleShowPassword={toggleShowPassword}
                />
              )}
            </div>
          </div>

          <FormInput
            value={value}
            type={type}
            placeholder="New Password"
            info="Must be at least 8 characters"
            showPasswordStrength
            {...passwordProps}
          />
          <FormInput
            value={confirmPasswordValue}
            type={confirmType}
            placeholder="Confirm Password"
            showPasswordStrength={false}
            info="Must be at least 8 characters"
            isPasswordMatch={passwordMatch}
            {...confirmPasswordProps}
          />
        </div>

        <div className="w-full">
          <div className="w-full">
            <p className="text-xs text-secondary-400">
              By proceeding, you agree to these Term and Conditions.
            </p>
          </div>

          <div className="w-full mt-10 flex flex-col items-center gap-3">
            <Button
              type="primary"
              isDisabled={!passwordMatch}
              onClick={handleCreatePassword}
            >
              Import
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImportSeed;
