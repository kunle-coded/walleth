import React, { cloneElement, Dispatch, useContext } from "react";
import { createPortal } from "react-dom";
import { PopupContext } from "../../contexts/PopupContext";

interface OpenProps {
  opens: string;
}

interface WindowProps {
  name: string;
}

function OpenTooltip({
  children,
  opens: openWindowName,
}: { children: React.ReactElement } & OpenProps) {
  const { open, transformWindow, close } = useContext(PopupContext);

  return cloneElement(children, {
    onMouseEnter: (e: React.MouseEvent) => {
      // e.stopPropagation();

      open(openWindowName);
      const top = (e.target as HTMLElement).getBoundingClientRect().top;
      const left = (e.target as HTMLElement).getBoundingClientRect().left;
      transformWindow(top, left);
    },
    onMouseLeave: () => {
      close();
    },
  });
}

function TooltipWindow({
  children,
  name,
}: { children: React.ReactElement } & WindowProps) {
  const { openName } = useContext(PopupContext);

  if (name !== openName) return;

  return createPortal(<div>{cloneElement(children)}</div>, document.body);
}

export { OpenTooltip, TooltipWindow };
