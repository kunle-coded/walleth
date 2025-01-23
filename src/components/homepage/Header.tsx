import BrandSmall from "../icons/BrandSmall";

function Header() {
  return (
    <header className="flex flex-[0_0_auto] items-center justify-center h-[75px] m-2">
      <button className="flex items-center appearance-none border-none">
        <div className="h-[38px] w-[38px] relative">
          <BrandSmall />
        </div>
        <h1 className="ml-2 text-3xl font-semibold tracking-normal text-brand-500 uppercase">
          Walleth
        </h1>
      </button>
    </header>
  );
}

export default Header;
