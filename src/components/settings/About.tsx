import SettingsItemToggle from "../../ui/SettingsItemToggle";

function About() {
  return (
    <div className="p-4 pt-0">
      <div className="p-0 pt-4">
        <div className="flex flex-col min-w-0 h-[initial]">
          <div className="py-2.5 p-0">
            <div>Walleth Version</div>
            <div className="pt-[5px] text-secondary-500 text-sm leading-[140%]">
              0.0.0
            </div>
          </div>
          <div className="py-2.5 p-0">
            <div className="mb-[15px] text-secondary-500">
              Walleth is designed and built around the world.
            </div>
          </div>
        </div>
        <div className="flex flex-col min-w-0 h-[initial]">
          <div className="pb-[15px]">Links</div>
          <div className="py-[15px] px-0">
            <a
              href=""
              className="flex justify-center items-center w-max p-0 bg-transparent text-brand-500 text-lg leading-[140%] box-border rounded-md cursor-pointer transition-[border-color,_background-color] duration-[0.3s] hover:text-brand-600"
            >
              Privacy policy
            </a>
          </div>
          <div className="py-[15px] px-0">
            <a
              href=""
              className="flex justify-center items-center w-max p-0 bg-transparent text-brand-500 text-lg leading-[140%] box-border rounded-md cursor-pointer transition-[border-color,_background-color] duration-[0.3s] hover:text-brand-600"
            >
              Terms of use
            </a>
          </div>
          <div className="py-[15px] px-0">
            <a
              href=""
              className="flex justify-center items-center w-max p-0 bg-transparent text-brand-500 text-lg leading-[140%] box-border rounded-md cursor-pointer transition-[border-color,_background-color] duration-[0.3s] hover:text-brand-600"
            >
              Attributions
            </a>
          </div>
          <hr className="my-[15px] w-20 h-px border-none bg-[rgb(175,180,192,0.4)]" />
          <div className="py-[15px] px-0">
            <a
              href=""
              className="flex justify-center items-center w-max p-0 bg-transparent text-brand-500 text-lg leading-[140%] box-border rounded-md cursor-pointer transition-[border-color,_background-color] duration-[0.3s] hover:text-brand-600"
            >
              Visit our support center
            </a>
          </div>
          <div className="py-[15px] px-0">
            <a
              href=""
              className="flex justify-center items-center w-max p-0 bg-transparent text-brand-500 text-lg leading-[140%] box-border rounded-md cursor-pointer transition-[border-color,_background-color] duration-[0.3s] hover:text-brand-600"
            >
              Visit our website
            </a>
          </div>
          <div className="py-[15px] px-0">
            <a
              href=""
              className="flex justify-center items-center w-max p-0 bg-transparent text-brand-500 text-lg leading-[140%] box-border rounded-md cursor-pointer transition-[border-color,_background-color] duration-[0.3s] hover:text-brand-600"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-6">
        <img src="src/assets/images/brand-logo.svg" alt="" className="h-12" />
      </div>
    </div>
  );
}

export default About;
