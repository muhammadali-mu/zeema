export default function BasketCounter() {
  return (
    <div className="flex justify-between w-36 h-10 p-2 border-2 rounded-md">
      <button className="border-l-2 pl-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
        >
          <g clip-path="url(#clip0_452_6408)">
            <path
              d="M10.5 0V10M10.5 10V20M10.5 10H20.5M10.5 10H0.5"
              stroke="#94A3B8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_452_6408">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className="text-2xl self-center">1</div>
      <button className="border-r-2 pr-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="2"
          viewBox="0 0 21 2"
          fill="none"
        >
          <path d="M20.5 1L0.5 1" stroke="#94A3B8" stroke-linecap="round" />
        </svg>
      </button>
    </div>
  );
}
