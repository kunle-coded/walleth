import { useEffect, useState } from "react";
import ViewPassword from "../components/icons/ViewPassword";
import usePasswordStrength from "../hooks/usePasswordStrength";
import Check from "../components/icons/Check";

interface FormInputProps {
  placeholder: string;
  type: string;
  value: string;
  info?: string;
  showPasswordStrength?: boolean;
  isPasswordMatch?: boolean;
  isPasswordWeak?: boolean;
}

function FormInput({
  placeholder,
  type,
  value,
  info,
  showPasswordStrength,
  isPasswordMatch,
  isPasswordWeak,
  ...props
}: FormInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [inputType, setInputType] = useState(type);

  const strength = usePasswordStrength({ value, showPasswordStrength });

  useEffect(() => {
    if (type === "password") {
      if (isShowPassword) {
        setInputType("text");
      } else {
        setInputType("password");
      }
    }
  }, [type, isShowPassword]);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  function toggleShowPassword() {
    setIsShowPassword((prevState) => !prevState);
  }

  return (
    <div className="flex flex-col gap-1">
      <div className="flex relative bg-secondary-200 rounded">
        <span
          className={`absolute left-4 ${
            isFocused || value ? "top-2 text-xs" : "top-4 text-sm font-medium"
          } text-secondary-300 z-10 transition-all`}
        >
          {placeholder}
        </span>
        <input
          type={type === "password" ? inputType : type}
          className="w-full bg-transparent text-secondary-900 px-4 pb-2 pt-6 z-20 focus:outline-none"
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />

        {type === "password" && !isPasswordMatch && (
          <ViewPassword
            showPassword={isShowPassword}
            toggleShowPassword={toggleShowPassword}
          />
        )}
        {type === "password" && isPasswordMatch && value && <Check />}
      </div>
      {type === "password" &&
        (showPasswordStrength ? (
          <p className="text-xs pl-4 text-secondary-400">
            {!value && info}
            {value && "Password strength:"}
            {value && (
              <span
                className={
                  strength === "Poor"
                    ? "text-orange-400"
                    : strength === "Good"
                    ? "text-green-500"
                    : "text-green-700"
                }
              >
                {" "}
                {strength}
              </span>
            )}
          </p>
        ) : !isPasswordMatch || isPasswordWeak ? (
          <p className="text-xs pl-4 text-error-500">{info}</p>
        ) : null)}
    </div>
  );
}

export default FormInput;
