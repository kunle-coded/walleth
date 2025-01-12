import { useEffect, useState } from "react";
import { useGlobal } from "../../contexts/GlobalContext";
import { AccountOverviewProps } from "../../types/assetsTypes";

import Avatar from "../../ui/Avatar";
import Icon from "../../ui/Icon";
import IconButton from "../../ui/IconButton";
import TooltipPopup from "../../ui/TooltipPopup";
import TokenListItem from "../lists/TokenListItem";

function TokenOverview({ filterRef, isTop }: AccountOverviewProps) {
  const [isFilterEnter, setIsFilterEnter] = useState(false);
  const [tokenOptionsCoords, setTokenOptionsCoords] = useState({
    top: 0,
    left: 0,
  });

  const {
    isTokenMenu,
    onOpenTokenMenu,
    isTokenFilterOptions,
    onOpenTokenFilter,
  } = useGlobal();

  const tokensOptionsStyle = {
    transform: `translate(${tokenOptionsCoords.left - 156 / 1.5}px, ${
      tokenOptionsCoords.top + 10
    }px)`,
  };
  const filterOptionsStyle = {
    transform: `translate(${tokenOptionsCoords.left - 250 / 1.25}px, ${
      tokenOptionsCoords.top + 15
    }px)`,
  };
  const adStyles = {
    background:
      "url(src/assets/images/ad-bg.svg) right bottom / contain no-repeat, linear-gradient(rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.12)), linear-gradient(90deg, rgb(1, 137, 236) 0%, rgb(75, 122, 237) 35%, rgb(103, 116, 238) 58%, rgb(112, 106, 244) 80.5%, rgb(124, 91, 252) 100%)",
  };

  useEffect(() => {
    if (filterRef.current) {
      const rect = filterRef.current.getBoundingClientRect();
      const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      setTokenOptionsCoords({
        top: rect.bottom + scrollTop,
        left: rect.left + scrollLeft,
      });
    }
  }, [filterRef]);

  useEffect(() => {
    const handleResize = () => {
      if (filterRef.current) {
        const rect = filterRef.current.getBoundingClientRect();
        const scrollLeft =
          window.scrollX || document.documentElement.scrollLeft;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        setTokenOptionsCoords({
          top: rect.bottom + scrollTop,
          left: rect.left + scrollLeft,
        });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [filterRef]);

  function handleFilterEnter() {
    setIsFilterEnter(true);
  }

  function handleFilterLeave() {
    setIsFilterEnter(false);
  }

  return (
    <div className="flex-row">
      <div className="mt-2">
        <div className="py-1 mx-2">
          <div className="flex justify-between">
            <button className="inline-flex justify-between items-center w-auto min-w-[auto] max-w-full h-[32px] gap-1 rounded-lg py-0 px-2 mr-2 bg-white text-secondary-900 border-none text-ellipsis overflow-hidden whitespace-nowrap align-middle select-none cursor-pointer relative hover:bg-secondary-200">
              <span className="text-ellipsis overflow-hidden whitespace-nowrap">
                Ethereum Mainnet
              </span>
              <Icon imgUrl="src/assets/images/arrow-down.svg" margin="ms-1" />
            </button>

            <div className="flex justify-end">
              <div ref={filterRef}>
                <div
                  className="inline"
                  onMouseEnter={handleFilterEnter}
                  onMouseLeave={handleFilterLeave}
                  onClick={onOpenTokenFilter}
                >
                  <IconButton
                    iconUrl="src/assets/images/filter.svg"
                    isFilter={isTokenFilterOptions}
                  />
                </div>
                {isFilterEnter && (
                  <TooltipPopup isTop={isTop} targetRef={filterRef} />
                )}
              </div>
              <IconButton
                iconUrl="src/assets/images/more.svg"
                margin="me-0"
                onClick={onOpenTokenMenu}
              />
            </div>
          </div>
          {isTokenMenu && (
            <div
              className="flex flex-col min-w-[158px] w-auto p-0 absolute inset-[0px_auto_auto_0px] z-10 border-solid border bg-white rounded-lg border-secondary-200 shadow-[0px_2px_16px_0px,_rgba(0,0,0,0.1)]"
              style={tokensOptionsStyle}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button className="flex items-center w-full text-secondary-900 bg-white text-sm md:text-[1rem] md:leading-6 p-4 cursor-pointer border-none hover:bg-secondary-200">
                  <Icon imgUrl="src/assets/images/add.svg" margin="me-2" />
                  Import tokens
                </button>
              </div>
              <div className="relative">
                <button className="flex items-center w-full text-secondary-900 bg-white text-sm md:text-[1rem] md:leading-6 p-4 cursor-pointer border-none hover:bg-secondary-200">
                  <Icon imgUrl="src/assets/images/refresh.svg" margin="me-2" />
                  Refresh list
                </button>
              </div>
            </div>
          )}
          {isTokenFilterOptions && (
            <div
              className="flex flex-col min-w-[250px] w-auto p-0 absolute inset-[0px_auto_auto_0px] z-10 border-solid border bg-white rounded-lg border-secondary-200 shadow-[0px_2px_16px_0px,_rgba(0,0,0,0.1)]"
              style={filterOptionsStyle}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button className="flex items-center w-full text-secondary-900 bg-white text-sm md:text-[1rem] md:leading-6 p-4 cursor-pointer border-none hover:bg-secondary-200">
                  Alphabetically (A-Z)
                </button>
              </div>
              <div className="relative">
                <button className="flex items-center w-full text-secondary-900 bg-brand-100 text-sm md:text-[1rem] md:leading-6 p-4 cursor-pointer border-none">
                  Declining balance ($ high-low)
                </button>
                <div className="absolute w-1 top-1 left-1 h-[calc(100%_-_8px)] bg-brand-500 rounded-[9999px]"></div>
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="flex flex-col gap-4">
            <TokenListItem
              tokenName="Ethereum"
              tokenLogoUrl="src/assets/images/eth-logo.svg"
            />
            <TokenListItem
              tokenName="Bitcoin"
              tokenLogoUrl="src/assets/images/eth-logo.svg"
            />
          </div>
        </div>
        <div
          className="flex flex-col gap-2 m-2 py-3 px-4 mx-4 mt-2 rounded-lg"
          style={adStyles}
        >
          <h4 className="text-white font-extrabold leading-6 md:text-xl">
            Tips for using a wallet
          </h4>
          <p className="w-[80%] text-white text-sm leading-[1.375rem] font-medium md:text-[1rem] md:leading-6 ">
            Adding tokens unlocks more ways to use web3.
          </p>
          <button className="inline-flex justify-center items-center w-fit h-[40px] p-0 px-4 text-primary-500 bg-white relative align-middle select-none cursor-pointer text-sm leading-[1.375rem] font-semibold md:text-[1rem] md:leading-6 border-none rounded-[9999px]">
            Token marketplace
          </button>
        </div>
        <a
          href=""
          className="flex justify-start items-center h-[40px] p-0 pl-4 pr-0 mb-4 relative bg-transparent text-brand-500 align-middle select-none text-sm leading-[1.375rem] font-semibold md:text-[1rem] md:leading-6"
        >
          <Avatar
            imgUrl="src/assets/images/message-question.svg"
            color="text-brand-500"
            margin="me-1"
          />
          Walleth support
        </a>
      </div>
    </div>
  );
}

export default TokenOverview;
