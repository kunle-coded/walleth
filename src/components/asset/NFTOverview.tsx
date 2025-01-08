import Avatar from "../../ui/Avatar";
import Icon from "../../ui/Icon";

function NFTOverview() {
  return (
    <div className="flex-row">
      <div className="">
        <div className="flex flex-col justify-center items-center p-12">
          <div className="flex justify-center items-center w-[104px] h-[104px] p-5 bg-white   align-middle select-none relative border-[4px] border-solid border-secondary-300 rounded-[50%] overflow-hidden uppercase">
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
