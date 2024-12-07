function Check() {
  return (
    <div className="flex justify-center items-center h-[inherit] p-3">
      <div className="relative w-5 h-4">
        <svg
          viewBox="0 0 20 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <path
            d="M19 1L6.625 13.375L1 7.75"
            stroke="#108C4A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default Check;
