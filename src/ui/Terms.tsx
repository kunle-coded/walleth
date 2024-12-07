interface TermsProps {
  isChecked: boolean;
  value: string;
  isMoreInfo?: boolean;
  info?: string;
  href?: string;
  onToggle: () => void;
}

function Terms({ value, isChecked, isMoreInfo, href, onToggle }: TermsProps) {
  return (
    <div className="flex justify-start items-start mt-8">
      <span
        className={`flex justify-center items-center flex-shrink-0 w-6 h-6 rounded-sm bg-brand-100 relative border-2 cursor-pointer hover:border-brand-500 transition-all ${
          isChecked ? "border-brand-500 bg-brand-500 p-[2px]" : ""
        }`}
        onClick={onToggle}
      >
        <svg
          width="14"
          height="11"
          viewBox="0 0 10 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={isChecked ? "opacity-100" : "opacity-0"}
        >
          <path
            d="M1.71198 3.56601L3.90497 5.75901L8.69198 0.971008"
            stroke="#fff"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <p className="ml-4 text-sm text-wrap">
        {value}
        {isMoreInfo && (
          <span className="font-medium underline ml-1">
            <a href={href}>Learn more</a>
          </span>
        )}
      </p>
    </div>
  );
}

export default Terms;
