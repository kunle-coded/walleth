import { useEffect, useState } from "react";
import { useField } from "../../hooks/useField";
import Button from "../../ui/Button";
import ButtonWrapper from "../../ui/ButtonWrapper";
import FormInput from "../../ui/FormInput";

interface CreatePasswordProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function CreatePassword({ onClick }: CreatePasswordProps) {
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const password = useField("password");
  const confirmPassword = useField("password");
  const { value, type, ...passwordProps } = password;
  const {
    value: confirmPasswordValue,
    type: confirmType,
    ...confirmPasswordProps
  } = confirmPassword;

  useEffect(() => {
    if (value != "" && confirmPasswordValue != "") {
      if (value === confirmPasswordValue) {
        setPasswordMatch(true);
      } else {
        setPasswordMatch(false);
      }
    }
  }, [value, confirmPasswordValue]);

  function toggleCheck() {
    setIsChecked((checked) => !checked);
  }

  return (
    <div className="mt-6 w-full flex flex-col">
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
          info="Password strength:"
          showPasswordStrength
          {...passwordProps}
        />
        <FormInput
          value={confirmPasswordValue}
          type={confirmType}
          placeholder="Confirm Password"
          showPasswordStrength={false}
          info="Must be at least 8 charachters"
          isPasswordMatch={passwordMatch}
          {...confirmPasswordProps}
        />
      </div>

      <div className="flex justify-start items-start mt-8">
        <span
          className={`flex justify-center items-center flex-shrink-0 w-6 h-6 rounded-sm bg-brand-100 relative border-2 cursor-pointer hover:border-brand-500 transition-all ${
            isChecked ? "border-brand-500 bg-brand-500 p-[2px]" : ""
          }`}
          onClick={toggleCheck}
        >
          <svg
            width="14"
            height="11"
            viewBox="0 0 10 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={isChecked ? "opacity-100" : "opacity-0"}
          >
            <path
              d="M1.71198 3.56601L3.90497 5.75901L8.69198 0.971008"
              stroke="#fff"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <p className="ml-4 text-sm text-wrap">
          I under stand that Cryptooly cannot recover this password for me.
          <span className="font-medium underline ml-1">
            <a href="">Learn more</a>
          </span>
        </p>
      </div>

      <ButtonWrapper>
        <Button type="primary" onClick={onClick}>
          Create Password
        </Button>
      </ButtonWrapper>
    </div>
  );
}

export default CreatePassword;
