import React from "react";

export default function Navigation() {
  return (
    <nav
      aria-label="primary-navigation"
      className="flex flex-row justify-center items-center w-full h-10 bg-slate-50  "
    >
      <div className=" flex flex-row justify-start items-center w-full gap-5 max-w-screen-2xl px-4">
        <p className="whitespace-nowrap text-xs  text-zeemano-500 ">
          تجهیزات پزشکی زیمانو{" "}
        </p>

        <ul className="flex flex-row justify-start items-center gap-5 m-1 font-light text-sm grow">
          <li>
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              className="flex items-center justify-center gap-2 w-max h-6 text-slate-600  "
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="stroke-slate-700"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5H22M2 12.5H22M2 20H22"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-sm text-slate-700 ">لوازم پزشکی</p>
            </button>

            <div
              id="dropdownNavbar"
              className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
            >
              <ul
                className="py-2 text-sm text-gray-700 "
                aria-labelledby="dropdownLargeButton"
              >
                <li>
                  <a href="#" className="block px-4 py-2">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 ">
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
              </ul>
              <div className="py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                >
                  Sign out
                </a>
              </div>
            </div>
          </li>

          <hr className="w-[2px] h-6 bg-slate-300 mx-2"></hr>

          <li>
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              className="flex items-center justify-center gap-1 w-full h-6 text-slate-600  "
            >
              <p className="text-sm text-center whitespace-nowrap text-slate-700 ">
                لوازم پزشکی
              </p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="stroke-slate-700 scale-50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 7L12 17L2 7"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </li>
          <li>
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              className="flex items-center justify-center gap-1 w-full h-6 text-slate-600  "
            >
              <p className="text-sm text-center whitespace-nowrap text-slate-700 ">
                محصولات بهداشتی{" "}
              </p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="stroke-slate-700 scale-50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 7L12 17L2 7"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </li>
          <li>
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              className="flex items-center justify-center gap-1 w-full h-6 text-slate-600  "
            >
              <p className="text-sm text-center whitespace-nowrap text-slate-700 ">
                دستگاه و لوازم
              </p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="stroke-slate-700 scale-50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 7L12 17L2 7"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </li>
          <li>
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              className="flex items-center justify-center gap-1 w-full h-6 text-slate-600  "
            >
              <p className="text-sm text-center whitespace-nowrap text-slate-700 ">
                محصولات پوست و مو
              </p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="stroke-slate-700 scale-50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 7L12 17L2 7"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </li>
          <li>
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              className="flex items-center justify-center gap-1 w-full h-6 text-slate-600  "
            >
              <p className=" text-sm text-center whitespace-nowrap text-slate-700 ">
                خوراکی سلامت
              </p>
            </button>
          </li>
          <li>
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              className="flex items-center justify-center gap-1 w-full h-6 text-slate-600  "
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                className="stroke-slate-700 scale-75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.9626 14.5039L22.7744 24.9326"
                  strokeWidth="1.6"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M23.1529 18.1207C24.1278 18.1207 24.918 17.3304 24.918 16.3555C24.918 15.3806 24.1278 14.5903 23.1529 14.5903C22.178 14.5903 21.3877 15.3806 21.3877 16.3555C21.3877 17.3304 22.178 18.1207 23.1529 18.1207Z"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeWidth="1.6"
                />
                <path
                  d="M31.3494 23.0806C31.3494 24.0556 30.5579 24.8472 29.5791 24.8472C28.604 24.8472 27.8125 24.0556 27.8125 23.0806C27.8125 22.1055 28.604 21.3149 29.5791 21.3149C30.5584 21.3149 31.3494 22.1051 31.3494 23.0806Z"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeWidth="1.6"
                />
                <path
                  d="M17.5784 10.24V16.24H11.696L17.2254 10H33.8475C34.624 10 35.2593 10.6353 35.2593 11.4118V28.0254C35.2593 28.8009 34.624 29.4372 33.8475 29.4372H5.41176C4.63529 29.4372 4 28.8009 4 28.0254V11.4118C4 10.6353 4.63529 10 5.41176 10H11.5784V12.7106"
                  strokeMiterlimit="10"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                />
                <path
                  d="M11.6611 18.4707V20.9658"
                  strokeMiterlimit="10"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                />
                <path
                  d="M11.6611 22.6636V25.1591"
                  strokeMiterlimit="10"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                />
                <path
                  d="M11.6611 26.8564V29.3581"
                  strokeMiterlimit="10"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                />
              </svg>
              <p className=" text-sm text-center whitespace-nowrap text-slate-700 ">
                تخفیف ویژه
              </p>
            </button>
          </li>
        </ul>

        <div className="flex flex-row justify-between items-center gap-4 ">
          <p className="text-center whitespace-nowrap text-xs text-slate-700">
            زیمانو پلاس
          </p>

          <hr className="w-[2px] h-6 bg-slate-300 mx-auto"></hr>

          <p className="text-center whitespace-nowrap text-xs text-slate-700">
            مجله زیمانو
          </p>
        </div>
      </div>
    </nav>
  );
}
