function SwapFooter() {
  return (
    <div className="sticky w-full bottom-0 z-50 bg-white">
      <div className="">
        <div className="flex flex-col justify-center w-full swap-button-h-96 flex-[0_0_auto] border-t-[none]">
          <footer className="flex flex-row justify-center p-4 flex-[0_0_auto]">
            <button className="flex justify-center items-center w-full h-[40px] mr-0 py-3 px-4 box-border bg-brand-500 rounded-[100px] will-change-[box-shadow] transition-shadow text-white border border-solid border-brand-500 text-sm leading-[140%] font-semibold disabled:cursor-auto disabled:pointer-events-none disabled:opacity-50 ">
              Select token
            </button>
          </footer>
        </div>
      </div>
      <div className="flex justify-center mb-4 swap-terms-mt-0 text-brand-500 text-xs leading-[140%] cursor-pointer">
        Terms of service
      </div>
    </div>
  );
}

export default SwapFooter;
