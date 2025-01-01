import { createContext, Dispatch, PropsWithChildren, useState } from "react";

interface ContextType {
  openName: string;
  windowCord: { top: number; left: number };
  open: Dispatch<React.SetStateAction<string>>;
  close: () => void;
  transformWindow: (top: number, left: number) => void;
}

const defaultValue: ContextType = {
  openName: "",
  windowCord: { top: 0, left: 0 },
  open: function (): void {},
  close: function (): void {},
  transformWindow: function (): void {},
};

const PopupContext = createContext(defaultValue);

function PopupProvider({ children }: PropsWithChildren) {
  const [openName, setOpenName] = useState("");
  const [windowCord, setWindowCord] = useState({ top: 0, left: 0 });

  const close = () => setOpenName("");
  const open = setOpenName;

  const transformWindow = (top: number, left: number) => {
    const newCord = { top, left };
    setWindowCord(newCord);
  };

  return (
    <PopupContext.Provider
      value={{ openName, windowCord, transformWindow, open, close }}
    >
      {children}
    </PopupContext.Provider>
  );
}

export { PopupContext, PopupProvider };
