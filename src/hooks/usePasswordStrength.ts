import { useEffect, useState } from "react";

function usePasswordStrength({
  value,
  showPasswordStrength,
}: {
  value: string;
  showPasswordStrength: boolean | undefined;
}) {
  const [strength, setStrength] = useState("Poor");

  useEffect(() => {
    if (!showPasswordStrength) return;

    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    let newStrength = "Poor";

    if (value.length >= 8 && hasSpecialCharacter) {
      newStrength = "Strong";
    } else if (value.length >= 6) {
      newStrength = "Good";
    } else if (value.length > 0) {
      newStrength = "Poor";
    }

    setStrength(newStrength);
  }, [value, showPasswordStrength]);

  return strength;
}

export default usePasswordStrength;
