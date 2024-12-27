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
  callback: () => void;
}

const initialValue: ContextType = {
  openName: "",
  open: function (): void {},
  close: function (): void {},
};

const ModalContext = createContext(initialValue);

function ModalSample({ children }: PropsWithChildren) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({
  children,
  opens: openWindowName,
  callback,
}: { children: React.ReactElement } & OpenProps) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onclick: () => open(openWindowName) });
}

interface WindowProps {
  name: string;
}

function Window({ children, name }: PropsWithChildren<WindowProps>) {
  const { openName, close } = useContext(ModalContext);

  if (name !== openName) return;

  return createPortal(
    <div className="overlay">
      <div className="styledModal">
        <div className="close" onClick={close}></div>
        <div className="children">{children}</div>
      </div>
    </div>,
    document.body
  );
}

ModalSample.Open = Open;
ModalSample.Window = Window;

export default ModalSample;
