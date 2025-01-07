import { createContext, PropsWithChildren, useContext, useState } from "react";

type GlobalContextType = {
  isTokenMenu: boolean;
  isTokenFilterOptions: boolean;
  overviewActiveTab: number;
  onOpenTokenMenu: () => void;
  onCloseTokenMenu: () => void;
  onOpenTokenFilter: () => void;
  onCloseTokenFilter: () => void;
  onSelectTab: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

// const defaultValue = {
//   isTokenMenu: false,
//   isTokenFilterOptions: false,
//   overviewActiveTab: 0,
//   onOpenTokenMenu: () => void {},
//   onCloseTokenMenu: () => void {},
//   onOpenTokenFilter: () => void {},
//   onCloseTokenFilter: () => void {},
//   onSelectTab: () => void {},
// };

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

function GlobalProvider({ children }: PropsWithChildren) {
  const [isTokenMenu, setIsTokenMenu] = useState(false);
  const [isTokenFilterOptions, setIsTokenFilterOptions] = useState(false);
  const [overviewActiveTab, setOverviewActiveTab] = useState(0);

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

  function onSelectTab(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;
    const active = target.tabIndex;
    setOverviewActiveTab(active);
  }

  return (
    <GlobalContext.Provider
      value={{
        isTokenMenu,
        isTokenFilterOptions,
        overviewActiveTab,
        onOpenTokenMenu,
        onCloseTokenMenu,
        onOpenTokenFilter,
        onCloseTokenFilter,
        onSelectTab,
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
