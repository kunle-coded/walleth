interface TabbedProps {
  tabOneText: string;
  tabTwoText: string;
  activeTab: number;
  onTabClick: (value: number) => void;
}

function Tabbed({
  tabOneText,
  tabTwoText,
  activeTab,
  onTabClick,
}: TabbedProps) {
  return (
    <ul className="flex flex-row justify-start gap-1 top-0 border-b-0 relative bg-transparent text-sm z-[2] list-none">
      <li
        className={`flex-row w-6/12 transition-[color,_border-color] ease-linear ${
          activeTab === 0
            ? "text-brand-500 border-b-2 border-solid border-b-brand-500"
            : ""
        }`}
        onClick={() => onTabClick(0)}
      >
        <button className="block w-full min-w-[50px] p-2 border-none text-sm leading-snug font-medium md:text-[1rem] md:leading-6 text-center bg-[unset] text-[unset] cursor-pointer ">
          {tabOneText}
        </button>
      </li>
      <li
        className={`flex-row w-6/12 transition-[color,_border-color] ease-linear ${
          activeTab === 1
            ? "text-brand-500 border-b-2 border-solid border-b-brand-500"
            : ""
        }`}
        onClick={() => onTabClick(1)}
      >
        {" "}
        <button className="block w-full min-w-[50px] p-2 border-none text-sm leading-snug font-medium md:text-[1rem] md:leading-6 text-center bg-[unset] text-[unset] cursor-pointer ">
          {tabTwoText}
        </button>
      </li>
    </ul>
  );
}

export default Tabbed;
