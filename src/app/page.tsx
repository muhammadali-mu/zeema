import Image from "next/image";
import Link from "next/link";
import Aboutus from "@/components/home.tsx/aboutus";
import Trust from "@/components/home.tsx/trust";
import Blog from "@/components/home.tsx/blog";
import Slider from "@/components/sliders/slider";
import BannerContainer from "@/components/banner/banner";

const products = [
  {
    id: 1,
    href: "/",
    src: "",
    alt: "",
    title: "سرنگ انسولین بی دی BD حجم 1 سی سی",
    price: "",
    offPrice: "",
  },
];
export default function Home() {
  return (
    <main className="w-full h-max grid grid-cols-[minmax(min-content, 1fr)] grid-rows-[repeat(auto-fit, max-content)] justify-items-center gap-y-8 px-10 text-slate-800 ">
      <Slider />
      <CardContainer title="تخفیف ویژه" pathto="/">
        <Card />
      </CardContainer>
      <BannerContainer />
      <Blog />
      <Trust />
      <Aboutus />
    </main>
  );
}

function CardContainer({
  title = "تخفیف ویژه",
  pathto = "/",
  children,
}: {
  title: string;
  pathto: string;
  children: any;
}) {
  return (
    <div className="h-auto w-full max-w-[1440px] relative flex flex-col gap-3 py-2 align-top">
      <div className="flex flex-row justify-between mx-3 ">
        <h5 className="font-medium text-xl text-slate-700">{title}</h5>
        <Link
          href={pathto}
          className="flex justify-between items-center gap-2 text-zeemano-500 "
        >
          <p>مشاهده</p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-zeemano-500 scale-75"
          >
            <path
              d="M11.3333 22L2 12.6667L11.3333 3.33333M22 22L12.6667 12.6667L22 3.33333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
      <button></button>
      <div>{children}</div>
      <button></button>
    </div>
  );
}

function Card() {
  return (
    <figure className="group w-48 h-[360px] p-2 relative flex flex-col items-center cursor-pointer bg-white border border-zinc-100 rounded-lg hover:shadow-md">
      <Link
        href={"/"}
        className="w-max relative flex flex-col items-center hover:"
      >
        <Image
          className="rounded-t-lg"
          src={"/images/bdsoozan.jpg"}
          alt="product"
          width={172}
          height={172}
          loading="lazy"
          quality={100}
        />
        <span
          role="button"
          className="transition-all duration-300 ease-in-out invisible h-0 group-hover:visible group-hover:h-10 absolute bottom-0 w-44  text-zeemano-500 flex justify-center items-center gap-2 bg-white bg-clip-padding backdrop-filter backdrop-blur bg-opacity-60 backdrop-brightness-90 border border-zeemano-500 border-b-0 rounded-t-lg"
        >
          خرید
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-zeemano-500 "
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.3333 10.8889V6.44444C16.3333 5.2657 15.8651 4.13524 15.0316 3.30175C14.1981 2.46825 13.0676 2 11.8889 2C10.7101 2 9.57969 2.46825 8.74619 3.30175C7.9127 4.13524 7.44444 5.2657 7.44444 6.44444V10.8889M4.11111 8.66667H19.6667L20.7778 22H3L4.11111 8.66667Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </Link>
      <figcaption className="w-44 h-36 flex flex-col justify-between p-1  mx-2  border bg-slate-50 border-zinc-100 rounded-b-lg">
        <div>
          <h5 className="mb-1 text-sm font-medium tracking-tight text-slate-700 ">
            {"سرنگ انسولین بی دی BD حجم 1 سی سی"}
          </h5>
          <p className="mb-2 h-14 whitespace-pre-line leading-5 line-clamp-3 text-xs text-justify font-light text-gray-800 dark:text-gray-400">
            {
              "سرنگ انسولین BD حجم 1 سی سی ساخت کشور آمریکا می‌باشد. این محصول با بهره‌وری از تکنولوژی خاص برند BD درد را به حداقل می‌رساند"
            }
          </p>
        </div>
        <Link
          href={"/"}
          className="inline-flex items-center self-end gap-1 text-xs font-light text-center text-slate-500 "
        >
          مشاهده بیشتر
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-slate-500"
          >
            <path
              d="M3.22222 8.44434L1 6.22211M1 6.22211L3.22222 3.99989M1 6.22211L11 6.22211"
              strokeWidth="0.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </figcaption>
      <div className="absolute top-2 right-3 px-2 pt-1 flex items-end justify-center bg-white bg-clip-padding backdrop-filter backdrop-blur bg-opacity-60 backdrop-brightness-90 border border-red-600 rounded ">
        <p className="text-sm font-bold text-red-600 text-end">% {16} -</p>
      </div>
      <button className="absolute top-2 left-1">
        <svg
          className="stroke-zeemano-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 4.22222C6 3.63285 6.18061 3.06762 6.5021 2.65087C6.82359 2.23413 7.25963 2 7.71429 2H16.2857C16.7404 2 17.1764 2.23413 17.4979 2.65087C17.8194 3.06762 18 3.63285 18 4.22222V22L12 18.1111L6 22V4.22222Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="w-full my-2 flex items-center justify-between whitespace-pre-line">
        <p className="flex gap-1 text-xs font-medium text-slate-600">
          <span className="line-through">{"۸۳,۲۰"}</span> تومان
        </p>
        <p className="font-medium text-sm text-zeemano-auxiliary-orange">
          {"۸۳,۲۰۰"} تومان
        </p>
      </div>
    </figure>
  );
}
