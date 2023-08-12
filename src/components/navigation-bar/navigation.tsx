import Link from "next/link";
import Image from "next/image";

const navigationLinks = [
  ["لوازم پزشکی", "megaMenu", ""],
  ["محصولات بهداشتی", "megaMenu", ""],
  ["دستگاه و لوازم ", "megaMenu", ""],
  ["محصولات پوست و مو", "megaMenu", ""],
  ["خوراکی سلامت", "/foodHealth"],
  ["تخفیف ویژه", "/offer", "/coupon_sales_discount_shopping_offer.svg"],
];

export default function Navigation() {
  return (
    <nav
      aria-label="primary-navigation"
      className="flex flex-row justify-center items-center w-full h-10 bg-slate-50  "
    >
      <div className=" flex flex-row justify-start items-center w-full gap-5 max-w-screen-2xl px-4">
        <Link href={"/"}>
          <p className="whitespace-nowrap text-xs  text-zeemano-500 hover:text-zeemano-700 ">
            تجهیزات پزشکی زیمانو
          </p>
        </Link>

        <ul className="flex flex-row justify-start items-center gap-0 m-1 font-light text-sm grow">
          <li className="md:hidden">
            <button className="flex items-center justify-center gap-2 w-max h-6 text-slate-600  ">
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
              <p className="text-sm text-slate-700 ">دسته بندی کالا</p>
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

          <hr className="w-[2px] h-6 bg-slate-300 mx-1"></hr>

          <DesktopNavigationButton navigationLinks={navigationLinks} />
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

function DesktopNavigationButton({
  navigationLinks,
}: {
  navigationLinks: any;
}) {
  return navigationLinks.map(
    ([name, item, svg]: [name: string, item: string, svg: string]) => (
      <li key={name}>
        {item === "megaMenu" ? (
          <button className="flex items-center justify-center gap-2 w-full h-8 px-3 zeema-focuse text-slate-600  hover:bg-zinc-200 rounded-lg group">
            <p className="text-sm text-center whitespace-nowrap text-slate-500 group-hover:text-slate-700 group-focus:text-slate-700 ">
              {name}
            </p>

            <Image
              className="stroke-slate-600 opacity-0 group-hover:opacity-100 transition-all group-focus:opacity-100 group-focus:rotate-180"
              src={"/icons/Icon/Stroke/ChevronDown.svg"}
              alt="chevron"
              width={12}
              height={12}
              quality={100}
            />
          </button>
        ) : (
          <Link
            href={item}
            className="flex items-center justify-center gap-2 w-full h-8 px-3 zeema-focuse text-slate-600  hover:bg-zinc-200 rounded-lg group"
          >
            {svg && (
              <Image
                className=""
                src={`/icons/Icon/Stroke/${svg}`}
                alt="chevron"
                width={32}
                height={32}
                quality={100}
              />
            )}
            <p className="text-sm text-center whitespace-nowrap text-slate-500 group-hover:text-slate-700 group-focus:text-slate-700 ">
              {name}
            </p>
          </Link>
        )}
      </li>
    )
  );
}
