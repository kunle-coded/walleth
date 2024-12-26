import More from "../icons/More";

function Navigation() {
  return (
    <nav className="w-full flex flex-col flex-nowrap items-center max-h-[68px] z-50">
      <div className="md:w-4/5 lg:w-[62%] h-[68px] p-2 pl-4 pr-4 grid grid-cols-[1fr_2fr_1fr] gap-2 items-center bg-white shadow-[0_2px_16px_0_rgba(0,0,0,0.1)]">
        <div>network</div>
        <div>account</div>
        <div className="flex items-center justify-end ml-auto">
          <div className="flex gap-4">
            <div className="flex justify-end w-full">
              <div className="relative"></div>
              <button
                aria-label="Account options"
                className="inline-flex justify-center items-center border-none rounded-lg bg-transparent text-primary-500 w-6 h-6 min-w-6 p-0 cursor-pointer hover:bg-secondary-200"
              >
                <span className="inline-block flex-[0 0 1em] size-4 max-w-4 bg-transparent relative">
                  <More />
                </span>
              </button>
            </div>
          </div>
          <div className="flex"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
