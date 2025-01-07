import { createContext, PropsWithChildren, useContext, useState } from "react";

type GlobalContextType = {
  isTokenMenu: boolean;
  isTokenFilterOptions: boolean;
  onOpenTokenMenu: () => void;
  onCloseTokenMenu: () => void;
  onOpenTokenFilter: () => void;
  onCloseTokenFilter: () => void;
};

const defaultValue = {
  isTokenMenu: false,
  isTokenFilterOptions: false,
  onOpenTokenMenu: () => void {},
  onCloseTokenMenu: () => void {},
  onOpenTokenFilter: () => void {},
  onCloseTokenFilter: () => void {},
};

const GlobalContext = createContext<GlobalContextType>(defaultValue);

function GlobalProvider({ children }: PropsWithChildren) {
  const [isTokenMenu, setIsTokenMenu] = useState(false);
  const [isTokenFilterOptions, setIsTokenFilterOptions] = useState(false);

  function onOpenTokenMenu() {
    setIsTokenMenu(true);
  }

  function onCloseTokenMenu() {
    if (!isTokenMenu) return;
    setIsTokenMenu(false);
  }
  function onOpenTokenFilter() {
    setIsTokenFilterOptions(true);
  }

  function onCloseTokenFilter() {
    if (!isTokenFilterOptions) return;
    setIsTokenFilterOptions(false);
  }

  return (
    <GlobalContext.Provider
      value={{
        isTokenMenu,
        isTokenFilterOptions,
        onOpenTokenMenu,
        onCloseTokenMenu,
        onOpenTokenFilter,
        onCloseTokenFilter,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

function useGlobal() {
  const context = useContext(GlobalContext);

  if (context === undefined)
    throw new Error("GlobalContext was used outside GlobalProvider");
  return context;
}

export { GlobalProvider, useGlobal };
