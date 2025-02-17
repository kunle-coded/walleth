import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccountSetup, previousStep } from "../slices/setupSlice";

function ProgressBar() {
  const [progressWidth, setProgressWidth] = useState("0%");
  const { stepCounter, setupSteps } = useSelector(getAccountSetup);

  const dispatch = useDispatch();

  useEffect(() => {
    const totalSteps = 3;
    const width = `${Math.min((stepCounter / totalSteps) * 100, 100)}%`;
    setProgressWidth(width);
  }, [stepCounter]);

  const handleBack = () => {
    dispatch(previousStep());
  };

  return (
    <div className="w-full flex justify-between items-center mb-8">
      {setupSteps.currentStep !== "complete_setup" &&
        setupSteps.currentStep !== "complete_unsecure" && (
          <div className="flex">
            {stepCounter <= 1 ? (
              <button className="appearance-none" onClick={handleBack}>
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
            ) : (
              <button className="appearance-none" onClick={handleBack}>
                <div className="relative h-[14px] w-[10px] appearance-none">
                  <svg
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <path
                      d="M5 1L1 5L5 9"
                      stroke="#090A0B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            )}
          </div>
        )}
      <div className="w-full flex items-center relative">
        <span className="absolute h-2 left-5 right-5 rounded-lg bg-secondary-200 z-10"></span>
        <span
          className="h-2 mx-5 rounded-lg bg-black z-20"
          style={{ width: progressWidth }}
        ></span>
      </div>
      <div className="text-xs font-bold">{`${stepCounter}/3`}</div>
    </div>
  );
}

export default ProgressBar;
