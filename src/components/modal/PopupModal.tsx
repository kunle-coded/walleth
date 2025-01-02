import React, { cloneElement, Dispatch, useContext } from "react";
import { createPortal } from "react-dom";
import { PopupContext } from "../../contexts/PopupContext";

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

function Open({
  children,
  opens: openWindowName,
}: { children: React.ReactElement } & OpenProps) {
  const { open, transformWindow } = useContext(PopupContext);

  return cloneElement(children, {
    onClick: (e: React.MouseEvent) => {
      e.stopPropagation();

      open(openWindowName);
      const top = (e.target as HTMLElement).getBoundingClientRect().top;
      const left = (e.target as HTMLElement).getBoundingClientRect().left;
      transformWindow(top, left);
    },
  });
}

function Window({
  children,
  name,
}: { children: React.ReactElement } & WindowProps) {
  const { openName, close } = useContext(PopupContext);

  if (name !== openName) return;

  return createPortal(<div>{cloneElement(children)}</div>, document.body);
}

export { Open, Window };
