import { useEffect, useState } from "react";
import { useGlobal } from "../../contexts/GlobalContext";
import { AccountOverviewProps } from "../../types/assetsTypes";

import Avatar from "../../ui/Avatar";
import Icon from "../../ui/Icon";
import IconButton from "../../ui/IconButton";
import TooltipPopup from "../../ui/TooltipPopup";
import TokenListItem from "../lists/TokenListItem";

function NFTOverview() {
  const [isFilterEnter, setIsFilterEnter] = useState(false);
  const [tokenOptionsCoords, setTokenOptionsCoords] = useState({
    top: 0,
    left: 0,
  });

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

  // useEffect(() => {
  //   if (filterRef.current) {
  //     const rect = filterRef.current.getBoundingClientRect();
  //     const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
  //     const scrollTop = window.scrollY || document.documentElement.scrollTop;

  //     setTokenOptionsCoords({
  //       top: rect.bottom + scrollTop,
  //       left: rect.left + scrollLeft,
  //     });
  //   }
  // }, [filterRef]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (filterRef.current) {
  //       const rect = filterRef.current.getBoundingClientRect();
  //       const scrollLeft =
  //         window.scrollX || document.documentElement.scrollLeft;
  //       const scrollTop = window.scrollY || document.documentElement.scrollTop;

  //       setTokenOptionsCoords({
  //         top: rect.bottom + scrollTop,
  //         left: rect.left + scrollLeft,
  //       });
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [filterRef]);

  function handleFilterEnter() {
    setIsFilterEnter(true);
  }
  function handleFilterLeave() {
    setIsFilterEnter(false);
  }

  return (
    <div className="flex-row">
      <div className="">
        <div className="flex flex-col justify-center items-center p-12">
          <div className="flex justify-center items-center w-[124px] h-[124px] p-6 bg-white   align-middle select-none relative border-[4px] border-solid border-secondary-300 rounded-[50%] overflow-hidden uppercase">
            <img src="src/assets/images/no-nft.svg" alt="" />
          </div>

          <div className="flex flex-col justify-center items-center mb-12 mt-4 ">
            <h4 className="text-secondary-400 leading-6 font-extrabold md:text-[1.25rem]">
              No NFTs yet
            </h4>
            <a
              href="/support/nfts"
              className="inline-flex justify-center items-center p-0 pr-0 pl-0 h-[40px] text-sm leading-[1.375rem] font-semibold text-brand-500 bg-transparent align-middle select-none cursor-pointer relative md:leading-6 md:text-[1rem]"
            >
              Learn more
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start m-4 mb-2 gap-2">
          <button className="inline-flex justify-center items-center p-0 h-[40px] pr-0 pl-0 bg-transparent text-brand-500 text-sm leading-[1.375rem] font-semibold border-none relative cursor-pointer align-middle select-none md:text-[1rem] md:leading-6 hover:underline hover:underline-offset-4 hover:decoration-2">
            <Icon imgUrl="src/assets/images/add.svg" margin="me-1" />
            Import NFT
          </button>
        </div>
        {/* <div
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
        </div> */}
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
  );
}

export default NFTOverview;
