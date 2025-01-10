import { Dispatch } from "react";

interface ModalWindowType {
  name: string;
  headerText: string;
  showButton?: boolean;
  buttonText?: string;
  fullHeight?: boolean;
  isAccount?: boolean;
  buttonType?: string;
  iconUrl?: string;
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
