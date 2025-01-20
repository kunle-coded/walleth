import { Dispatch } from "react";

interface ModalWindowType {
  name: string;
  headerText: string;
  showButton?: boolean;
  buttonText?: string;
  fullHeight?: boolean;
  buttonType?: string;
  iconUrl?: string;
  isFullWidth?: boolean;
  noScroll?: boolean;
}

interface ContextType {
  openName: string;
  open: Dispatch<React.SetStateAction<string>>;
  close: () => void;
}

interface OpenType {
  opens: string;
}

export type { ModalWindowType, ContextType, OpenType };
