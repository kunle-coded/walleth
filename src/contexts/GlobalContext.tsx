import { createContext, PropsWithChildren, useContext, useState } from "react";

type GlobalContextType = {
  isShowGlobalMenu: boolean;
  isTokenMenu: boolean;
  isTokenFilterOptions: boolean;
  overviewActiveTab: number;
  isViewAsset: boolean;
  selectedToken: number | null;
  showMenu: () => void;
  hideMenu: () => void;
  onOpenTokenMenu: () => void;
  onCloseTokenMenu: () => void;
  onOpenTokenFilter: () => void;
  onCloseTokenFilter: () => void;
  onSelectTab: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onAssetView: () => void;
  onAssetClose: () => void;
  onTokenSelect: (s: number) => void;
};

type TokenType = number | null;

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

function GlobalProvider({ children }: PropsWithChildren) {
  const [isShowGlobalMenu, setIsShowGlobalMenu] = useState(false);
  const [isTokenMenu, setIsTokenMenu] = useState(false);
  const [isTokenFilterOptions, setIsTokenFilterOptions] = useState(false);
  const [overviewActiveTab, setOverviewActiveTab] = useState(0);
  const [isViewAsset, setIsViewAsset] = useState(false);
  const [selectedToken, setSelectedToken] = useState<TokenType>(null);

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

  function onAssetView() {
    setIsViewAsset(true);
  }

  function onAssetClose() {
    setIsViewAsset(false);
  }

  function onTokenSelect(selected: number) {
    setSelectedToken(selected);
  }
  function showMenu() {
    setIsShowGlobalMenu(true);
  }

  function hideMenu() {
    setIsShowGlobalMenu(false);
  }

  return (
    <GlobalContext.Provider
      value={{
        isShowGlobalMenu,
        isTokenMenu,
        isTokenFilterOptions,
        overviewActiveTab,
        isViewAsset,
        selectedToken,
        onOpenTokenMenu,
        onCloseTokenMenu,
        onOpenTokenFilter,
        onCloseTokenFilter,
        onSelectTab,
        onAssetView,
        onAssetClose,
        onTokenSelect,
        showMenu,
        hideMenu,
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
