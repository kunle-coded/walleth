import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { generateMnemonic } from "@scure/bip39";
import { wordlist } from "@scure/bip39/wordlists/english";
import { nextStep, addPassword, addSetupStep } from "../../slices/setupSlice";
import { useField } from "../../hooks/useField";
import Button from "../../ui/Button";
import ButtonWrapper from "../../ui/ButtonWrapper";
import FormInput from "../../ui/FormInput";
import Terms from "../../ui/Terms";
import { setMnemonic } from "../../slices/userSlice";

function CreatePassword() {
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [isPasswordWeak, setIsPasswordWeak] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState("");
  const dispatch = useDispatch();

  const password = useField("password");
  const confirmPassword = useField("password");
  const { value, type, ...passwordProps } = password;
  const {
    value: confirmPasswordValue,
    type: confirmType,
    ...confirmPasswordProps
  } = confirmPassword;

  useEffect(() => {
    if (value !== "" && confirmPasswordValue !== "") {
      if (value === confirmPasswordValue) {
        setPasswordMatch(true);
        setPasswordMessage("");
      } else {
        setPasswordMatch(false);
        setPasswordMessage("Passwords do not match");
      }
    } else {
      setPasswordMatch(true);
      setIsPasswordWeak(false);
      setPasswordMessage("");
    }
  }, [value, confirmPasswordValue]);

  function handleCreatePassword() {
    if (passwordMatch && value.length >= 2) {
      dispatch(addPassword(value));
      const mnemonic = generateMnemonic(wordlist, 128);
      dispatch(setMnemonic(mnemonic));
      dispatch(nextStep("secure_wallet"));
      dispatch(addSetupStep("secure_wallet"));

      setIsPasswordWeak(false);
      setPasswordMessage("");
    } else {
      setIsPasswordWeak(true);
      setPasswordMessage("Password must be at least 8 characters");
    }
  }

  function toggleCheck() {
    setIsChecked((checked) => !checked);
  }

  return (
    <div className="w-full flex flex-col">
      <div className="mb-16">
        <p className="text-lg font-bold mb-2">Create Password</p>
        <p className="text-secondary-500">
          This password will unlock your Walleth wallet only on this service
        </p>
      </div>

      <div className="flex flex-col w-full gap-5">
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
          info={passwordMessage}
          isPasswordMatch={passwordMatch}
          isPasswordWeak={isPasswordWeak}
          {...confirmPasswordProps}
        />
      </div>

      <Terms
        value="I understand that Walleth cannot recover this password for me."
        isMoreInfo
        isChecked={isChecked}
        onToggle={toggleCheck}
      />

      <ButtonWrapper>
        <Button
          type="primary"
          isDisabled={!(passwordMatch && isChecked)}
          onClick={handleCreatePassword}
        >
          Create Password
        </Button>
      </ButtonWrapper>
    </div>
  );
}

export default CreatePassword;
