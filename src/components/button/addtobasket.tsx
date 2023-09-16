export default function AddtoBasket() {
  return (
    <button className="bg-zeemano-500 hover:bg-zeemano-700 text-white flex w-3/4 p-2 m-auto justify-center rounded-md mt-6 ">
      <span className="pl-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            d="M16.8333 10.8889V6.44444C16.8333 5.2657 16.3651 4.13524 15.5316 3.30175C14.6981 2.46825 13.5676 2 12.3889 2C11.2101 2 10.0797 2.46825 9.24619 3.30175C8.4127 4.13524 7.94444 5.2657 7.94444 6.44444V10.8889M4.61111 8.66667H20.1667L21.2778 22H3.5L4.61111 8.66667Z"
            stroke="#F8FAFC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>{" "}
      افزودن به سبد خرید{" "}
    </button>
  );
}
