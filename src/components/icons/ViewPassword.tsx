interface ViewPasswordProps {
  showPassword: boolean;
  toggleShowPassword?: () => void;
}

function ViewPassword({ showPassword, toggleShowPassword }: ViewPasswordProps) {
  return (
    <div className="flex justify-center items-center h-[inherit] p-3">
      <div
        className="relative w-5 h-4 cursor-pointer"
        onClick={toggleShowPassword}
      >
        {showPassword ? (
          <svg
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          >
            <path
              d="M10.0001 15C9.15809 15 8.31509 14.822 7.49609 14.505"
              stroke="#090A0B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.882 8.46802C16.99 11.967 13.495 15 10 15"
              stroke="#090A0B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.0791 4.92102C17.77 5.72609 18.3743 6.60157 18.8821 7.53302C18.9594 7.67673 18.9998 7.83735 18.9998 8.00052C18.9998 8.16369 18.9594 8.32432 18.8821 8.46802"
              stroke="#090A0B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 15L17 1"
              stroke="#090A0B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.773 10.227C7.18223 9.63626 6.85034 8.835 6.85034 7.99953C6.85034 7.58584 6.93182 7.17621 7.09013 6.79401C7.24844 6.41182 7.48048 6.06455 7.773 5.77203C8.06552 5.47951 8.41279 5.24747 8.79499 5.08916C9.17718 4.93085 9.58682 4.84937 10.0005 4.84937C10.836 4.84937 11.6372 5.18126 12.228 5.77203"
              stroke="#090A0B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.044 2.956C13.497 1.759 11.748 1 9.99998 1C6.50498 1 2.5 4 1.11798 7.533C1.0407 7.67671 1.00024 7.83733 1.00024 8.0005C1.00024 8.16367 1.0407 8.3243 1.11798 8.468C2.06398 10.217 3.40998 11.849 4.95598 13.045"
              stroke="#090A0B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          >
            <path
              d="M12.122 5.88C12.6843 6.44322 13.0002 7.20659 13.0002 8.0025C13.0002 8.7984 12.6843 9.56177 12.122 10.125C11.5588 10.6873 10.7954 11.0032 9.99948 11.0032C9.20358 11.0032 8.44021 10.6873 7.87698 10.125C7.31463 9.56177 6.99878 8.7984 6.99878 8.0025C6.99878 7.20659 7.31463 6.44322 7.87698 5.88C8.1556 5.60107 8.48647 5.37979 8.85066 5.22882C9.21486 5.07785 9.60524 5.00014 9.99948 5.00014C10.3937 5.00014 10.7841 5.07785 11.1483 5.22882C11.5125 5.37979 11.8434 5.60107 12.122 5.88"
              stroke="#090A0B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 8C1 7.341 1.152 6.689 1.446 6.088C2.961 2.991 6.309 1 10 1C13.691 1 17.039 2.991 18.554 6.088C18.848 6.689 19 7.341 19 8C19 8.659 18.848 9.311 18.554 9.912C17.039 13.009 13.691 15 10 15C6.309 15 2.961 13.009 1.446 9.912C1.15344 9.31703 1.00088 8.66301 1 8V8Z"
              stroke="#090A0B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </div>
  );
}

export default ViewPassword;
