import LoginButton from "./login-button";
import Logo from "./logo";
import NotifIcon from "./notif-icon";
import SaleRequestButton from "./sale-request-button";
import Navigation from "./navigation";
import Search from "./search";

const users = [
  {
    name: "سیدعرفان ",
    family: "لطیفی راد منش ",
    email: "",
    age: "27",
    phone: "09121111324",
    auth: false,
    cart: [{ productId: "id_12345" }],
    notification: ["message 1", "message 2 "],
    searchHistory: ["string 1", "string 2"],
  },
];

const notificationLength = Number(users[0].notification.length);
const cartItems = Number(users[0].cart.length);
const auth = users[0].auth;
const userIdentity =
  users[0].name + users[0].family || users[0].email || users[0].phone;

export default function Header() {
  return (
    <header className="flex flex-col justify-start items-center drop-shadow-zeemano-shadow-nav w-full h-min bg-transparent sticky top-0 z-50">
      <div className="flex flex-row justify-center items-center gap-5 h-16 w-full bg-slate-50 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 backdrop-brightness-95 px-4 ">
        <div className="flex flex-row justify-between items-center gap-6 h-12 w-full max-w-screen-2xl  ">
          <Logo />
          <Search />
          <SaleRequestButton />
          <LoginButton auth={auth} userIdentity={userIdentity} />
          <div className="flex flex-row justify-center items-center gap-4 w-24 h-10 ">
            <NotifIcon pathto={"/"} notificationLength={notificationLength}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="stroke-zeemano-500"
                fill="none"
              >
                <path
                  d="M6 4.22222C6 3.63285 6.18061 3.06762 6.5021 2.65087C6.82359 2.23413 7.25963 2 7.71429 2H16.2857C16.7404 2 17.1764 2.23413 17.4979 2.65087C17.8194 3.06762 18 3.63285 18 4.22222V22L12 18.1111L6 22V4.22222Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </NotifIcon>

            <hr className="w-[2px] h-6 bg-slate-300 mx-auto hidden lg:block"></hr>

            <NotifIcon pathto={"/"} notificationLength={cartItems}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="stroke-zeemano-500"
                fill="none"
              >
                <path
                  d="M16.3333 10.8889V6.44444C16.3333 5.2657 15.8651 4.13524 15.0316 3.30175C14.1981 2.46825 13.0676 2 11.8889 2C10.7101 2 9.57969 2.46825 8.74619 3.30175C7.9127 4.13524 7.44444 5.2657 7.44444 6.44444V10.8889M4.11111 8.66667H19.6667L20.7778 22H3L4.11111 8.66667Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </NotifIcon>
          </div>
        </div>
      </div>

      <h1 className="sr-only">
        زیمانو - فروشگاه اینترنتی پخش لوازم و تجهیزات پزشکی و بهداشتی
      </h1>

      <Navigation />
    </header>
  );
}

{
  /* <nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="https://flowbite.com" class="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <button data-collapse-toggle="mega-menu-full" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div id="mega-menu-full" class="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1">
            <ul class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                </li>
                <li>
                    <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" class="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Company <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
                </li>
                <li>
                    <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
                </li>
                <li>
                    <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Resources</a>
                </li>
                <li>
                    <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                </li>
            </ul>
        </div>
    </div>
    <div id="mega-menu-full-dropdown" class="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
        <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
            <ul>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div class="font-semibold">Online Stores</div>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div class="font-semibold">Segmentation</div>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div class="font-semibold">Marketing CRM</div>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div class="font-semibold">Online Stores</div>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div class="font-semibold">Segmentation</div>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div class="font-semibold">Marketing CRM</div>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav> */
}
