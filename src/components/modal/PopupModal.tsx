import React, {
  cloneElement,
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";

interface ContextType {
  openName: string;
  open: Dispatch<React.SetStateAction<string>>;
  close: () => void;
}

interface OpenProps {
  opens: string;
}

interface WindowProps {
  name: string;
}

const defaultValue: ContextType = {
  openName: "",
  open: function (): void {},
  close: function (): void {},
};

const PopupContext = createContext(defaultValue);

function PopupModal({ children }: PropsWithChildren) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <PopupContext.Provider value={{ openName, open, close }}>
      {children}
    </PopupContext.Provider>
  );
}

function Open({
  children,
  opens: openWindowName,
}: { children: React.ReactElement } & OpenProps) {
  const { open } = useContext(PopupContext);

  return cloneElement(children, {
    onClick: (e: MouseEvent) => {
      e.stopPropagation();
      open(openWindowName);
    },
  });
}

function Window({
  children,
  name,
}: { children: React.ReactElement } & WindowProps) {
  const { openName, close } = useContext(PopupContext);

  if (name !== openName) return;

  return createPortal(
    <div className="" onClick={(e) => e.stopPropagation()}>
      {cloneElement(children, { onClosePopup: close })}
    </div>,
    document.body
  );
}

PopupModal.Open = Open;
PopupModal.Window = Window;

export default PopupModal;
