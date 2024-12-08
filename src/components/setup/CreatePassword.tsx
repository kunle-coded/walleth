import { useEffect, useState } from "react";
import { useField } from "../../hooks/useField";
import Button from "../../ui/Button";
import ButtonWrapper from "../../ui/ButtonWrapper";
import FormInput from "../../ui/FormInput";
import Terms from "../../ui/Terms";

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
    } else {
      setPasswordMatch(false);
    }
  }, [value, confirmPasswordValue]);

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
          info="Must be at least 8 characters"
          isPasswordMatch={passwordMatch}
          {...confirmPasswordProps}
        />
      </div>

      <Terms
        value="I under stand that Walleth cannot recover this password for me."
        isMoreInfo
        isChecked={isChecked}
        onToggle={toggleCheck}
      />

      <ButtonWrapper>
        <Button
          type="primary"
          isDisabled={passwordMatch && isChecked}
          onClick={onClick}
        >
          Create Password
        </Button>
      </ButtonWrapper>
    </div>
  );
}

export default CreatePassword;
