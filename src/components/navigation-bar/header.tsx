import LoginButton from "./login-button";
import Logo from "./logo";
import NotifIcon from "./notif-icon";
import SaleRequestButton from "./sale-request-button";
import Navigation from "./navigation";
import Search from "./search";

export default function Header() {
  return (
    <header className="flex flex-col justify-start items-center drop-shadow-zeemano-shadow-nav w-full h-min bg-transparent sticky top-0 z-50">
      <div className="flex flex-row justify-center items-center gap-5 h-16 w-full bg-slate-50 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 backdrop-brightness-95 px-4 ">
        <div className="flex flex-row justify-between items-center gap-6 h-12 w-full max-w-screen-2xl  ">
          <Logo />
          <Search />
          <SaleRequestButton />
          <LoginButton />
          <div className="flex flex-row justify-center items-center gap-4 w-24 h-10 ">
            <NotifIcon pathto={"/"}>
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

            <hr className="w-[2px] h-6 bg-slate-300 mx-auto"></hr>

            <NotifIcon pathto={"/"}>
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
