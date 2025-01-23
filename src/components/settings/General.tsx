import Icon from "../../ui/Icon";

function General() {
  return (
    <div className="settings-body p-4 pt-0">
      <div className="flex flex-col p-0 pt-4">
        <div className="flex flex-col min-w-0">
          <p className="text-secondary-900 text-sm leading-[22px] font-medium">
            Currency
          </p>
        </div>
        <div className="flex flex-col min-w-0">
          <div className="flex flex-col mt-2 max-w-[300px]">
            <div className="inline-block h-[48px] relative">
              <select
                name=""
                id=""
                className="w-full py-3 pr-[40px] pl-4 bg-white rounded-lg text-secondary-900 border border-solid appearance-none text-sm leading-[140%] border-[rgba(187,192,197,0.9)]"
              >
                <option value="">USD - United States Dollar</option>
              </select>
              <Icon imgUrl="src/assets/images/arrow-down.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row p-0 pt-4">
        <div className="flex flex-col min-w-0"></div>
        <div className="flex flex-col min-w-0"></div>
      </div>
      <div className="flex flex-col p-0 pt-4"></div>
      <div className="flex flex-col p-0 pt-4"></div>
      <div className="flex flex-col p-0 pt-4"></div>
      <div className="flex flex-row p-0 pt-4"></div>
    </div>
  );
}

export default General;
