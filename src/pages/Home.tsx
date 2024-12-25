import BrandSmall from "../components/icons/BrandSmall";

function Home() {
  return (
    <main className="w-screen h-screen flex flex-col overflow-x-hidden items-center relative bg-white">
      <header className="flex flex-[0 0 auto] items-center justify-center h-[75px] m-2">
        <button className="flex items-center appearance-none border-none">
          <div className="h-[30px] w-[30px] relative">
            <BrandSmall />
          </div>
          <h1 className="ml-2 text-3xl font-semibold tracking-normal text-brand-500 uppercase">
            Walleth
          </h1>
        </button>
      </header>

      <nav className="w-full flex flex-col flex-nowrap items-center max-h-[68px] z-50">
        <div className="md:w-4/5 lg:w-[62%] h-[68px] p-2 pl-4 pr-4 grid grid-cols-[1fr_2fr_1fr] gap-2 items-center bg-secondary-100 shadow-[0_2px_4px_0_rgba(0,0,0,0.1)]">
          <div>network</div>
          <div>account</div>
          <div className="flex items-center justify-end ml-auto">menu</div>
        </div>
      </nav>

      <section className="w-full flex flex-[1 0 auto] justify-center max-h-0">
        <div className="md:w-4/5 lg:w-[62%] min-h-[82vh] bg-secondary-100 ">
          <div className="mt-6">main section</div>
        </div>
      </section>
    </main>
  );
}

export default Home;
