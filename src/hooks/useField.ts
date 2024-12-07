import React, { useState } from "react";

export const useField = (type: string) => {
  const [value, setValue] = useState("");

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function onReset(event: React.ChangeEvent<HTMLInputElement>) {
    event?.preventDefault();
    setValue("");
  }

  return { type, value, onChange, onReset };
};
