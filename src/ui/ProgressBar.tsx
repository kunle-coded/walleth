interface ProgressBarProps {
  currentStep: number;
  progressWidth: string;
  onClose: () => void;
}

function ProgressBar({
  currentStep,
  progressWidth,
  onClose,
}: ProgressBarProps) {
  return (
    <div className="w-full flex justify-between items-center">
      <button className="appearance-none" onClick={onClose}>
        <div className="relative h-[24px] w-[24px] appearance-none">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          >
            <path
              d="M7 7L17 17"
              stroke="#090A0B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 17L17 7"
              stroke="#090A0B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      <div className="w-full flex items-center relative">
        <span className="absolute h-2 left-5 right-5 rounded-lg bg-secondary-200 z-10"></span>
        <span
          className="h-2 mx-5 rounded-lg bg-black z-20"
          style={{ width: progressWidth }}
        ></span>
      </div>
      <div className="text-xs font-bold">{`${currentStep}/3`}</div>
    </div>
  );
}

export default ProgressBar;
