import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/navigation-bar/logo";

export default function Home() {
  return (
    <main className=" h-max gap-y-8  ">
      {/* <main className="w-screen h-max grid grid-cols-[minmax(min-content, 1fr)] grid-rows-[repeat(auto-fit, max-content)] justify-items-center gap-y-8 px-10 text-slate-800 "> */}
      {/* <CardContainer title="تخفیف ویژه" pathto="/">
        <Card />
      </CardContainer>
       */}

      {/* 
    <Productpage/>
    <Bail/>
    <AboutProduct/>
    <MoreProduct/> */}

      {/* start of frame 6944 */}
      {/* <div className="w-4/5 m-auto my-10 ">
        <div className="flex flex-row justify-center items-center gap-10  ">
          <div className="overflow-hidden bg-[linear-gradient(0deg,_rgba(15,_23,_42,_0.5)_24%,rgba(57,_67,_78,_0)_100%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat  rounded-lg  w-96  h-80 object-fill">
            <img
              className="object-fill"
              src="https://file.rendit.io/n/7T3eguYMoyCxF6W6gq0e.png"
              alt=""
            />
          </div>
          <div className="overflow-hidden bg-[linear-gradient(0deg,_rgba(15,_23,_42,_0.5)_24%,rgba(57,_67,_78,_0)_100%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat  rounded-lg w-auto  h-80 object-fill">
            <img
              className="object-fill"
              src="https://file.rendit.io/n/7T3eguYMoyCxF6W6gq0e.png"
              alt=""
            />
          </div>
        </div>
      </div> */}
      {/* end of frame 6944 */}
      {/* start of  */}
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
    <figure className="group w-48 h-[360px] p-2 relative flex flex-col items-center  bg-white border border-zinc-100 rounded-lg shadow-md">
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
          className="transition-all delay-100 duration-300 ease-in-out invisible h-0 group-hover:visible group-hover:h-10 absolute bottom-0 w-44  text-zeemano-500 flex justify-center items-center gap-2 bg-white bg-clip-padding backdrop-filter backdrop-blur bg-opacity-60 backdrop-brightness-90 border border-zeemano-500 border-b-0 rounded-t-lg"
        >
          خرید
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-zeemano-500"
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
        <Link href="/">
          <h5 className="mb-1 text-sm font-medium tracking-tight text-slate-700 ">
            {"سرنگ انسولین بی دی BD حجم 1 سی سی"}
          </h5>
          {/* <p className="h-10 mb-3 indent-2  truncate text-xs text-justify font-light bg-green-300 text-gray-700 dark:text-gray-400">
        {
          "سرنگ انسولین BD حجم 1 سی سی ساخت کشور آمریکا می‌باشد. این محصول با بهره‌وری از تکنولوژی خاص برند BD درد را به حداقل می‌رساند"
        }
      </p> */}
        </Link>
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
function Productpage() {
  return (
    <div className="px-10">
      {/* start of product navigition */}
      <div className="mt-5 mr-[70px] ">
        <div className="flex w-full flex-row text-xs">
          <a className="mx-5" href="">
            زیمانو
          </a>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
            >
              <path
                d="M6.5 11L1.5 6L6.5 1"
                stroke="#334155"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <a className="mx-5" href="">
            وسایل پانسمان و زخم
          </a>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
            >
              <path
                d="M6.5 11L1.5 6L6.5 1"
                stroke="#334155"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <a className="mx-5" href="">
            دسته بندی نشده
          </a>
        </div>
      </div>
      {/* end of product navigition */}
      <div className="grid grid-cols-3 grid-rows-5 gap-4 mt-5 mr-[90px]">
        <div className="w-full h-[64px] col-span-2 col-start-2 row-start-1 ">
          <h3 className="text-slate-700 text-xl ">
            چسب بخیه 3M مدل STERI-STRIP در سایزبندی
          </h3>
          <div className="text-xs font-extralight pb-2 border-b-2 flex flex-row gap-2">
            <p className="inline">امتیاز کاربران به این محصول </p>
            <div className="flex flex-row">
              <div className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                >
                  <path
                    d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                    fill="#CBD5E1"
                  />
                </svg>
              </div>
              <div className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                >
                  <path
                    d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                    fill="#CBD5E1"
                  />
                </svg>
              </div>
              <div className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                >
                  <path
                    d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                    fill="#CBD5E1"
                  />
                </svg>
              </div>
              <div className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                >
                  <path
                    d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                    fill="#CBD5E1"
                  />
                </svg>
              </div>
              <div className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                >
                  <path
                    d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                    fill="#CBD5E1"
                  />
                </svg>
              </div>
            </div>
            <span className="font-light"> 4.3</span>
            <span className=""> {"(34)"}</span>
          </div>
        </div>
        <div className="w-[448px] h-[448px] row-span-5 col-start-1 row-start-1 flex flex-row ">
          <div className="mr-5 mb-5 pb-3 flex-row">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M8.5 3.5H3.5C2.11929 3.5 1 4.61929 1 6V18.5C1 19.8807 2.11929 21 3.5 21H16C17.3807 21 18.5 19.8807 18.5 18.5V13.5M13.5 1H21M21 1V8.5M21 1L8.5 13.5"
                  stroke="#475569"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="pt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 4.22222C6 3.63285 6.18061 3.06762 6.5021 2.65087C6.82359 2.23413 7.25963 2 7.71429 2H16.2857C16.7404 2 17.1764 2.23413 17.4979 2.65087C17.8194 3.06762 18 3.63285 18 4.22222V22L12 18.1111L6 22V4.22222Z"
                  stroke="#475569"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="mt-5 rounded-xl ">
              <Image
                src={"/images/bdsoozan.jpg"}
                alt="product"
                width={20}
                height={20}
              />
              <Image
                src={"/images/bdsoozan.jpg"}
                alt="product"
                width={20}
                height={20}
              />
            </div>
          </div>

          <div className="w-[448px] h-[448px]">
            <Image
              className="rounded-t-lg "
              src={"/images/bdsoozan.jpg"}
              alt="product"
              width={448}
              height={448}
              loading="lazy"
              quality={100}
            />
          </div>
        </div>
        <div className="w-[440px] h-[470px] row-span-4 col-start-2 row-start-2 ">
          <div className="flex flex-col">
            <div className="mb-10">
              <div className=" flex gap-5 ">
                <p>برند:</p>
                <span>3M</span>
              </div>
              <div className="flex gap-5">
                <p>شناسه محصول :</p>
                <span>1060831</span>
              </div>
            </div>
            <div className="mb-10">
              <div className="flex justify-between items-center">
                <p className="align-center">سایز : </p>
                <button className="  bg-slate-50 border-slate-400 hover:bg-zeemano-500 hover:text-white text-slate-700 font-extralight py-2 px-4 border rounded">
                  {" "}
                  {`s ${83} x ${3} cm `}{" "}
                </button>
                <button className="  bg-slate-50 border-slate-400 hover:bg-zeemano-500 hover:text-white text-slate-700 font-extralight py-2 px-4 border rounded">
                  {" "}
                  {`s ${83} x ${3} cm `}{" "}
                </button>
                <button className="  bg-slate-50 border-slate-400 hover:bg-zeemano-500 hover:text-white text-slate-700 font-extralight py-2 px-4 border rounded">
                  {" "}
                  {`s ${83} x ${3} cm `}{" "}
                </button>
              </div>
            </div>
            <div className="pb-5 mb-5 flex border-b-1 border-black">
              <p>رنگ:</p>
              <div className="w-6 h-6 bg-purple-800 rounded mx-3 cursor-pointer"></div>
              <span className="text-slate-500 text-sm font-medium">بنفش</span>
            </div>
            <div className="border-b border-solid border-[#E4E4E7] w-3/4"></div>
            <div className="pt-5">
              <ul className="list-disc">
                <li>
                  <div className="inline ml-5 ">ویژگی</div>
                  <div className=" w-80 h-20 text-justify text-slate-700 text-sm font-normal">
                    {" "}
                    بسیاری از جراحاتی که بر بدن اتفاق می‌افتد در صورت عمیق
                    نبودن، نیازی به بخیه ندارند و می‌توان آن‌ها را به وسیله
                    چسب‌های بخیه پانسمان کرد.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[327px] h-[480px] row-span-4 col-start-3 row-start-2  bg-slate-50 border-2 rounded-lg  border-slate-400 p-3   ">
          <div className="flex justify-between items-center ">
            <h4 className=" text-slate-600 text-sm font-medium">تعمین کننده</h4>
            <a className="text-zeemano-700 text-xs" href="">
              موجود در زیمانو پلاس
            </a>
          </div>
          <div className="flex mb-5 ">
            <Logo /> <span className="self-end">زیمانو</span>
          </div>
          <div className="w-9/12 m-auto h-[0.3px] bg-gradient-to-l from-white via-black to-white">
            {" "}
          </div>
          <div className="text-right text-slate-600 text-sm font-medium">
            <div className="flex justify-between items-center pt-3 ">
              <p>قیمت بسته ای</p>
              <p>3,303,000 تومان</p>
            </div>
            <div className="flex justify-between items-center pt-3">
              <p>قیمت هر عدد </p>
              <p>۲۹,۷۰۰ تومان</p>
            </div>
            <div className="flex justify-between items-center pt-3">
              <p> بسته بندی</p>
              <div className="">
                <button className="bg-white border-slate-400 hover:bg-zeemano-500 hover:text-white text-slate-700 font-extralight py-1 px-1 border rounded ml-3 ">
                  عددی
                </button>
                <button className="bg-white border-slate-400 hover:bg-zeemano-500 hover:text-white text-slate-700 font-extralight py-1 px-1 border rounded">
                  بسته ای
                </button>
              </div>
            </div>
          </div>
          <div className="w-9/12 m-auto h-[0.7px] bg-gradient-to-l from-white via-black to-white mt-5">
            {" "}
          </div>
          <div className="flex justify-between items-center my-4">
            <p>قیمت</p>
            <div className="flex flex-col text-sm">
              <div>
                <button className=" w-10 h-6 p-2 bg-red-600 bg-opacity-10 rounded border border-red-600 backdrop-blur-2xl justify-center items-center inline-flex ml-4 ">
                  <span className="text-red-600 text-xs font-bold">
                    {" "}
                    {"20%-"}
                  </span>
                </button>
                <span className="line-through text-slate-500">
                  ۳,۳۰۰,۰۰۰تومان
                </span>
              </div>
              <p className="self-end text-red-600 text-lg font-medium">
                ۳,۳۰۰,۰۰۰تومان
              </p>
            </div>
          </div>
          <div className="w-9/12 m-auto h-[0.7px] bg-gradient-to-l from-white via-black to-white mt-5">
            {" "}
          </div>
          <div className="flex justify-between mt-2 ">
            <div className="self-center">
              <span>تعداد</span>
            </div>
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
                  <path
                    d="M20.5 1L0.5 1"
                    stroke="#94A3B8"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
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
        </div>
      </div>
      <div className=" w-2/3 border-t-2 "></div>
    </div>
  );
}

function Bail() {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-2 gap-4 mr-16  ">
        <div className="row-span-2 flex justify-between">
          <div className="flex flex-col justify-center items-center text-xs w-24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
            >
              <g clip-path="url(#clip0_497_5465)">
                <path
                  d="M12.8469 25.9729H10.0469V23.1729C10.0469 22.7274 10.2239 22.3 10.5389 21.985C10.854 21.6699 11.2813 21.4929 11.7269 21.4929H25.7269C26.0239 21.4929 26.3088 21.6109 26.5188 21.821C26.7289 22.031 26.8469 22.3159 26.8469 22.6129V24.8529C26.8469 25.15 26.7289 25.4348 26.5188 25.6449C26.3088 25.8549 26.0239 25.9729 25.7269 25.9729"
                  fill="#ECFEFF"
                />
                <path
                  d="M25.6931 26.5329V25.4129C25.8416 25.4129 25.9841 25.3539 26.0891 25.2488C26.1941 25.1438 26.2531 25.0014 26.2531 24.8529V22.6129C26.2531 22.4643 26.1941 22.3219 26.0891 22.2169C25.9841 22.1119 25.8416 22.0529 25.6931 22.0529H11.6931C11.3961 22.0529 11.1112 22.1709 10.9012 22.3809C10.6911 22.5909 10.5731 22.8758 10.5731 23.1729V25.4129H12.8131V26.5329H10.0131C9.8646 26.5329 9.72217 26.4739 9.61715 26.3688C9.51213 26.2638 9.45312 26.1214 9.45312 25.9729V23.1729C9.45312 22.5788 9.68912 22.009 10.1092 21.5889C10.5293 21.1689 11.099 20.9329 11.6931 20.9329H25.6931C26.1387 20.9329 26.566 21.1099 26.8811 21.4249C27.1961 21.74 27.3731 22.1673 27.3731 22.6129V24.8529C27.3731 25.2984 27.1961 25.7257 26.8811 26.0408C26.566 26.3559 26.1387 26.5329 25.6931 26.5329Z"
                  fill="#475569"
                />
                <path
                  d="M19.8125 11.4968V17.0968L17.2925 14.7616L14.7725 17.0968V11.4968H19.8125Z"
                  fill="#00A2A2"
                />
                <path
                  d="M43.0528 19.8072C41.2384 19.8072 39.1328 18.34 39.1328 16.4472C39.1328 14.5544 41.2384 13.0872 43.0528 13.0872C43.2013 13.0872 43.3438 13.1462 43.4488 13.2512C43.5538 13.3562 43.6128 13.4986 43.6128 13.6472V19.2472C43.6128 19.3957 43.5538 19.5381 43.4488 19.6431C43.3438 19.7482 43.2013 19.8072 43.0528 19.8072ZM42.4928 14.2688C41.3728 14.5096 40.2528 15.3888 40.2528 16.4472C40.2528 17.5056 41.3728 18.3848 42.4928 18.6256V14.2688Z"
                  fill="#475569"
                />
                <path
                  d="M24.5727 21.9072H23.4527V11.5472H11.1327V21.9072H10.0127V10.9872C10.0127 10.8387 10.0717 10.6963 10.1767 10.5913C10.2817 10.4862 10.4242 10.4272 10.5727 10.4272H24.0127C24.1612 10.4272 24.3037 10.4862 24.4087 10.5913C24.5137 10.6963 24.5727 10.8387 24.5727 10.9872V21.9072Z"
                  fill="#475569"
                />
                <path
                  d="M25.6931 26.5329V25.4129C25.8416 25.4129 25.9841 25.3539 26.0891 25.2488C26.1941 25.1438 26.2531 25.0014 26.2531 24.8529V22.6129C26.2531 22.4643 26.1941 22.3219 26.0891 22.2169C25.9841 22.1119 25.8416 22.0529 25.6931 22.0529H11.6931C11.3961 22.0529 11.1112 22.1709 10.9012 22.3809C10.6911 22.5909 10.5731 22.8758 10.5731 23.1729V25.4129H12.8131V26.5329H10.0131C9.8646 26.5329 9.72217 26.4739 9.61715 26.3688C9.51213 26.2638 9.45312 26.1214 9.45312 25.9729V23.1729C9.45312 22.5788 9.68912 22.009 10.1092 21.5889C10.5293 21.1689 11.099 20.9329 11.6931 20.9329H25.6931C26.1387 20.9329 26.566 21.1099 26.8811 21.4249C27.1961 21.74 27.3731 22.1673 27.3731 22.6129V24.8529C27.3731 25.2984 27.1961 25.7257 26.8811 26.0408C26.566 26.3559 26.1387 26.5329 25.6931 26.5329Z"
                  fill="#475569"
                />
                <path
                  d="M39.3477 17.8581L38.3672 18.3994L44.5486 29.597L45.5291 29.0557L39.3477 17.8581Z"
                  fill="#475569"
                />
                <path
                  d="M40.813 39.4128H17.293V40.5328H40.813V39.4128Z"
                  fill="#475569"
                />
                <path
                  d="M17.2984 36.6128H17.0576V37.7328H17.2984V36.6128Z"
                  fill="#475569"
                />
                <path
                  d="M5.20831 37.7328H2.17311C2.08676 37.7353 2.00099 37.7178 1.92252 37.6817C1.84405 37.6456 1.775 37.5918 1.72077 37.5246C1.66654 37.4573 1.6286 37.3784 1.60992 37.2941C1.59125 37.2097 1.59234 37.1222 1.61311 37.0384L2.52031 33.4656C3.09701 31.165 4.42583 29.1231 6.29573 27.6641C8.16562 26.2051 10.4694 25.4127 12.8411 25.4128H25.7211C25.8034 25.4116 25.8849 25.4285 25.9599 25.4624C26.0349 25.4963 26.1015 25.5463 26.155 25.6089C26.2084 25.6714 26.2475 25.745 26.2693 25.8243C26.2911 25.9037 26.2951 25.9869 26.2811 26.068L24.9987 33.5328C24.9576 33.7756 24.9705 34.0246 25.0363 34.2619C25.1021 34.4993 25.2193 34.7192 25.3796 34.9063C25.5399 35.0933 25.7394 35.2428 25.9639 35.3441C26.1884 35.4455 26.4324 35.4962 26.6787 35.4928H32.7379C33.0945 35.4929 33.442 35.3796 33.7299 35.1692C34.0178 34.9588 34.2313 34.6622 34.3395 34.3224L36.8651 26.4376L34.1603 17.2536L32.1331 14.2128H29.0531V13.0928H32.4131C32.5053 13.0933 32.596 13.1165 32.6771 13.1605C32.7582 13.2044 32.8272 13.2677 32.8779 13.3448L35.1179 16.7048C35.1496 16.7512 35.1742 16.8022 35.1907 16.856L37.9907 26.2864C38.0239 26.394 38.0239 26.5091 37.9907 26.6168L35.4091 34.664C35.2277 35.2283 34.8719 35.7206 34.3928 36.0698C33.9138 36.419 33.3363 36.6072 32.7435 36.6072H26.6619C26.255 36.6078 25.8528 36.5197 25.4834 36.3491C25.114 36.1784 24.7862 35.9293 24.5229 35.6191C24.2596 35.3089 24.067 34.945 23.9587 34.5527C23.8503 34.1605 23.8288 33.7494 23.8955 33.348L25.0155 26.5272H12.8411C10.718 26.5276 8.65596 27.2377 6.98276 28.5446C5.30957 29.8515 4.12125 31.6802 3.60671 33.74L2.89551 36.6128H5.20831V37.7328Z"
                  fill="#475569"
                />
                <path
                  d="M46.9733 42.2127C46.3087 42.2127 45.6591 42.0156 45.1066 41.6464C44.554 41.2772 44.1234 40.7525 43.869 40.1385C43.6147 39.5245 43.5482 38.8489 43.6778 38.1972C43.8075 37.5454 44.1275 36.9467 44.5974 36.4768C45.0673 36.0069 45.666 35.6869 46.3178 35.5572C46.9696 35.4276 47.6451 35.4941 48.2591 35.7484C48.8731 36.0028 49.3978 36.4334 49.767 36.986C50.1362 37.5385 50.3333 38.1881 50.3333 38.8527C50.3333 39.7438 49.9793 40.5984 49.3492 41.2286C48.719 41.8587 47.8644 42.2127 46.9733 42.2127ZM46.9733 36.6127C46.5303 36.6127 46.0972 36.7441 45.7288 36.9902C45.3604 37.2363 45.0733 37.5862 44.9038 37.9955C44.7343 38.4048 44.6899 38.8552 44.7763 39.2897C44.8628 39.7242 45.0761 40.1233 45.3894 40.4366C45.7026 40.7499 46.1018 40.9632 46.5363 41.0496C46.9708 41.1361 47.4212 41.0917 47.8305 40.9222C48.2398 40.7526 48.5896 40.4655 48.8358 40.0972C49.0819 39.7288 49.2133 39.2957 49.2133 38.8527C49.2133 38.2586 48.9773 37.6888 48.5572 37.2688C48.1371 36.8487 47.5674 36.6127 46.9733 36.6127Z"
                  fill="#475569"
                />
                <path
                  d="M40.533 18.6929H34.9834C34.8295 18.6947 34.6807 18.6378 34.5673 18.5338C34.4539 18.4297 34.3844 18.2864 34.373 18.1329V14.7729C34.373 14.6244 34.432 14.4819 34.5371 14.3769C34.6421 14.2719 34.7845 14.2129 34.933 14.2129H40.533V15.3329H35.493V17.5729H40.533V18.6929Z"
                  fill="#475569"
                />
                <path
                  d="M36.7362 39.5865C36.5574 37.1105 37.2985 34.6557 38.8175 32.6923C40.3365 30.7289 42.5266 29.3951 44.9682 28.9465C45.3221 28.8831 45.6791 28.8382 46.0378 28.8121C47.5633 28.6931 49.0958 28.925 50.5178 29.4899C51.9399 30.0549 53.2137 30.9379 54.2418 32.0713C54.3378 32.1748 54.3912 32.3108 54.3912 32.4521C54.3912 32.5933 54.3378 32.7293 54.2418 32.8329L52.1642 35.0729L51.3466 34.3113L53.0602 32.4689C52.1506 31.5788 51.0619 30.8927 49.8665 30.4563C48.6711 30.0199 47.3964 29.8431 46.1274 29.9377C45.8081 29.9626 45.4904 30.0037 45.1754 30.0609C43.0067 30.4578 41.0605 31.6403 39.7091 33.3823C38.3578 35.1242 37.696 37.3032 37.8506 39.5025L36.7362 39.5865Z"
                  fill="#475569"
                />
                <path
                  d="M46.9729 45.5728C45.4001 45.5721 43.8773 45.0196 42.6699 44.0117C41.4624 43.0038 40.6467 41.6042 40.3649 40.0568C40.2906 39.6598 40.2531 39.2567 40.2529 38.8528C40.2519 37.496 40.6617 36.1707 41.4283 35.0512C42.1949 33.9317 43.2824 33.0705 44.5477 32.5808C45.8131 32.0912 47.197 31.996 48.5175 32.3079C49.838 32.6197 51.0331 33.324 51.9457 34.328C52.8229 35.2912 53.4012 36.4886 53.6103 37.7745C53.8193 39.0603 53.6501 40.3792 53.1232 41.5707C52.5963 42.7622 51.7345 43.7748 50.6425 44.4853C49.5506 45.1958 48.2757 45.5737 46.9729 45.5728ZM46.9729 33.2528C45.4877 33.2528 44.0633 33.8428 43.0131 34.893C41.9629 35.9432 41.3729 37.3676 41.3729 38.8528C41.3647 39.1864 41.3872 39.5201 41.4401 39.8496C41.5949 40.7029 41.9457 41.5085 42.4648 42.2031C42.984 42.8976 43.6574 43.4621 44.4319 43.8521C45.2065 44.2421 46.061 44.4468 46.9281 44.4503C47.7953 44.4537 48.6514 44.2557 49.429 43.8718C50.2066 43.488 50.8844 42.9288 51.409 42.2384C51.9337 41.5479 52.2908 40.7451 52.4523 39.8931C52.6138 39.0411 52.5752 38.1633 52.3396 37.3287C52.104 36.4942 51.6777 35.7258 51.0945 35.084C50.572 34.5097 49.9358 34.0504 49.2262 33.7351C48.5167 33.4199 47.7493 33.2556 46.9729 33.2528Z"
                  fill="#475569"
                />
                <path
                  d="M11.1324 45.5729C10.0932 45.5726 9.06825 45.3314 8.13808 44.8681C7.2079 44.4048 6.39784 43.7321 5.77157 42.9029C5.14529 42.0736 4.71987 41.1104 4.52872 40.089C4.33758 39.0676 4.38593 38.0157 4.66996 37.0161C4.70384 36.895 4.7775 36.7888 4.87909 36.7146C4.98068 36.6405 5.10427 36.6027 5.22996 36.6073H8.92596V37.7273H5.64996C5.48808 38.4579 5.47425 39.2135 5.60929 39.9495C5.74434 40.6855 6.02552 41.387 6.43622 42.0125C6.84693 42.638 7.37883 43.1748 8.00051 43.5913C8.62218 44.0078 9.32102 44.2954 10.0557 44.4373C10.7905 44.5792 11.5462 44.5723 12.2782 44.4172C13.0102 44.2621 13.7038 43.9618 14.3178 43.5342C14.9318 43.1065 15.4539 42.5601 15.8533 41.9273C16.2526 41.2945 16.5211 40.588 16.6428 39.8497C16.7037 39.5191 16.7337 39.1835 16.7324 38.8473C16.7318 38.4709 16.6923 38.0956 16.6148 37.7273H13.3612V36.6073H17.0572C17.1829 36.6027 17.3064 36.6405 17.408 36.7146C17.5096 36.7888 17.5833 36.895 17.6172 37.0161C17.7889 37.6115 17.8775 38.2277 17.8804 38.8473C17.8803 39.2512 17.8428 39.6543 17.7684 40.0513C17.4869 41.6045 16.6676 43.009 15.4543 44.0186C14.2409 45.0282 12.7108 45.5785 11.1324 45.5729Z"
                  fill="#475569"
                />
                <path
                  d="M11.1325 42.2128C10.2413 42.2128 9.3867 41.8588 8.75658 41.2287C8.12646 40.5986 7.77246 39.7439 7.77246 38.8528C7.7724 38.124 8.01252 37.4154 8.45566 36.8368C8.50782 36.7672 8.57546 36.7108 8.65322 36.6719C8.73098 36.633 8.81672 36.6128 8.90366 36.6128H13.3837C13.4692 36.613 13.5535 36.6328 13.6302 36.6707C13.7069 36.7085 13.7739 36.7634 13.8261 36.8312C14.2763 37.4089 14.5207 38.1204 14.5205 38.8528C14.5205 39.2964 14.4326 39.7356 14.262 40.1451C14.0914 40.5546 13.8414 40.9263 13.5265 41.2386C13.2115 41.551 12.8378 41.7979 12.4269 41.9651C12.016 42.1323 11.5761 42.2165 11.1325 42.2128ZM9.20046 37.7328C8.99883 38.0716 8.89242 38.4585 8.89246 38.8528C8.89246 39.4469 9.12846 40.0166 9.54854 40.4367C9.96862 40.8568 10.5384 41.0928 11.1325 41.0928C11.7265 41.0928 12.2963 40.8568 12.7164 40.4367C13.1365 40.0166 13.3725 39.4469 13.3725 38.8528C13.3722 38.4578 13.2638 38.0705 13.0589 37.7328H9.20606H9.20046Z"
                  fill="#475569"
                />
                <path
                  d="M1.0498 15.05L9.4498 15.05"
                  stroke="#475569"
                  stroke-linecap="square"
                />
                <path
                  d="M3.00977 18.6899L8.60977 18.6899"
                  stroke="#475569"
                  stroke-linecap="square"
                />
                <path
                  d="M31.0801 32.6201L36.6801 32.6201"
                  stroke="#475569"
                  stroke-linecap="square"
                />
                <path
                  d="M1.61035 21.9099H4.41035"
                  stroke="#475569"
                  stroke-linecap="square"
                />
                <path
                  d="M-1.19043 32.6201L4.40957 32.6201"
                  stroke="#475569"
                  stroke-linecap="square"
                />
              </g>
              <defs>
                <clipPath id="clip0_497_5465">
                  <rect width="56" height="56" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-center"> ارسال فوری برای شهر تهران</span>
          </div>
          <div className="flex flex-col justify-center items-center text-xs w-24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="57"
              height="56"
              viewBox="0 0 57 56"
              fill="none"
            >
              <g clip-path="url(#clip0_497_5513)">
                <path
                  d="M41.9424 49.1119C42.035 49.1745 42.1442 49.208 42.256 49.208C42.3678 49.208 42.477 49.1745 42.5696 49.1119L46.3552 46.5583C47.963 45.497 49.2854 44.0569 50.2062 42.3647C51.127 40.6725 51.618 38.78 51.636 36.8535V28.6943C51.6353 28.5887 51.6021 28.4859 51.541 28.3997C51.4799 28.3136 51.3938 28.2483 51.2944 28.2127L42.4576 24.8527C42.3278 24.8027 42.1841 24.8027 42.0544 24.8527L33.2176 28.2127C33.1181 28.2483 33.032 28.3136 32.9709 28.3997C32.9098 28.4859 32.8767 28.5887 32.876 28.6943V36.8535C32.8939 38.78 33.3849 40.6725 34.3057 42.3647C35.2265 44.0569 36.549 45.497 38.1568 46.5583L41.9424 49.1119Z"
                  fill="#ECFEFF"
                />
                <path
                  d="M36.0964 2.4751V2.5703L30.0036 11.4351H29.9364H17.6836L23.7764 2.5703V2.4751H36.0964Z"
                  fill="#00A2A2"
                />
                <path
                  d="M29.9362 11.5305V23.7553L23.7762 19.2753L17.6162 23.7553V11.5305L17.6834 11.4353H29.9362V11.5305Z"
                  fill="#00A2A2"
                />
                <path
                  d="M17.6834 11.4353L17.6162 11.5305V11.4353H17.6834Z"
                  fill="#00A2A2"
                />
                <path
                  d="M45.0727 22.4504C44.9242 22.4504 44.7817 22.3914 44.6767 22.2864C44.5717 22.1814 44.5127 22.039 44.5127 21.8904V11.4352C44.5127 11.2867 44.5717 11.1443 44.6767 11.0393C44.7817 10.9342 44.9242 10.8752 45.0727 10.8752C45.2212 10.8752 45.3637 10.9342 45.4687 11.0393C45.5737 11.1443 45.6327 11.2867 45.6327 11.4352V21.8904C45.6327 22.039 45.5737 22.1814 45.4687 22.2864C45.3637 22.3914 45.2212 22.4504 45.0727 22.4504Z"
                  fill="#475569"
                />
                <path
                  d="M33.8731 47.8353H3.63313C3.18756 47.8353 2.76025 47.6583 2.44519 47.3432C2.13012 47.0282 1.95313 46.6009 1.95312 46.1553V11.4353H3.07313V46.1553C3.07313 46.3038 3.13212 46.4463 3.23715 46.5513C3.34217 46.6563 3.4846 46.7153 3.63313 46.7153H33.8731V47.8353Z"
                  fill="#475569"
                />
                <path
                  d="M51.2332 24.3153H50.1132V4.42968L45.5324 11.7601C45.4819 11.8408 45.4118 11.9073 45.3285 11.9534C45.2452 11.9994 45.1516 12.0235 45.0564 12.0233H2.51318C2.41102 12.0231 2.31085 11.995 2.22352 11.942C2.13619 11.889 2.06502 11.8131 2.01773 11.7225C1.97043 11.632 1.94881 11.5302 1.9552 11.4283C1.96159 11.3263 1.99575 11.228 2.05398 11.1441L8.21398 2.18408C8.26223 2.10471 8.32946 2.03858 8.40962 1.99166C8.48978 1.94474 8.58035 1.91849 8.67318 1.91528H50.6732C50.8217 1.91528 50.9641 1.97428 51.0692 2.0793C51.1742 2.18432 51.2332 2.32676 51.2332 2.47528V24.3153ZM3.57718 10.8753H44.7484L49.6484 3.03528H8.95318L3.57718 10.8753Z"
                  fill="#475569"
                />
                <path
                  d="M42.2729 54.0847C42.0477 54.0863 41.8271 54.02 41.6401 53.8943L36.3145 50.2655C35.2108 49.5154 34.1962 48.6417 33.2905 47.6615C30.4205 44.5796 28.8203 40.5273 28.8105 36.3159V26.2751C28.8108 26.0565 28.8781 25.8433 29.0032 25.664C29.1284 25.4848 29.3054 25.3483 29.5105 25.2727L41.8809 20.5575C42.1404 20.4574 42.4279 20.4574 42.6873 20.5575L55.0521 25.2727C55.2499 25.3545 55.4187 25.4938 55.5365 25.6725C55.6543 25.8512 55.7157 26.0611 55.7129 26.2751V36.3103C55.6932 39.0702 54.9998 41.7836 53.693 44.2146C52.3862 46.6457 50.5056 48.7209 48.2145 50.2599L42.8889 53.8887C42.7073 54.0132 42.4931 54.0813 42.2729 54.0847ZM42.2729 21.6047L29.8857 26.3199V36.3159C29.8976 40.2459 31.3938 44.0262 34.0745 46.8999C34.9233 47.8171 35.874 48.6344 36.9081 49.3359L42.2729 52.9647L47.6041 49.3359C49.7409 47.8972 51.4943 45.9588 52.7122 43.6889C53.9301 41.419 54.5757 38.8862 54.5929 36.3103V26.2751L50.4377 24.7239L42.2729 21.6047Z"
                  fill="#475569"
                />
                <path
                  d="M41.8806 41.2553L37.6582 37.1225L38.4422 36.3217L41.8022 39.6089L46.859 33.5833L47.7214 34.3057L41.8806 41.2553Z"
                  fill="#475569"
                />
              </g>
              <defs>
                <clipPath id="clip0_497_5513">
                  <rect
                    width="56"
                    height="56"
                    fill="white"
                    transform="translate(0.833008)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span className="text-center"> ارسال فوری برای شهر تهران</span>
          </div>
          <div className="flex flex-col justify-center items-center text-xs w-24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="57"
              height="56"
              viewBox="0 0 57 56"
              fill="none"
            >
              <g clip-path="url(#clip0_497_5513)">
                <path
                  d="M41.9424 49.1119C42.035 49.1745 42.1442 49.208 42.256 49.208C42.3678 49.208 42.477 49.1745 42.5696 49.1119L46.3552 46.5583C47.963 45.497 49.2854 44.0569 50.2062 42.3647C51.127 40.6725 51.618 38.78 51.636 36.8535V28.6943C51.6353 28.5887 51.6021 28.4859 51.541 28.3997C51.4799 28.3136 51.3938 28.2483 51.2944 28.2127L42.4576 24.8527C42.3278 24.8027 42.1841 24.8027 42.0544 24.8527L33.2176 28.2127C33.1181 28.2483 33.032 28.3136 32.9709 28.3997C32.9098 28.4859 32.8767 28.5887 32.876 28.6943V36.8535C32.8939 38.78 33.3849 40.6725 34.3057 42.3647C35.2265 44.0569 36.549 45.497 38.1568 46.5583L41.9424 49.1119Z"
                  fill="#ECFEFF"
                />
                <path
                  d="M36.0964 2.4751V2.5703L30.0036 11.4351H29.9364H17.6836L23.7764 2.5703V2.4751H36.0964Z"
                  fill="#00A2A2"
                />
                <path
                  d="M29.9362 11.5305V23.7553L23.7762 19.2753L17.6162 23.7553V11.5305L17.6834 11.4353H29.9362V11.5305Z"
                  fill="#00A2A2"
                />
                <path
                  d="M17.6834 11.4353L17.6162 11.5305V11.4353H17.6834Z"
                  fill="#00A2A2"
                />
                <path
                  d="M45.0727 22.4504C44.9242 22.4504 44.7817 22.3914 44.6767 22.2864C44.5717 22.1814 44.5127 22.039 44.5127 21.8904V11.4352C44.5127 11.2867 44.5717 11.1443 44.6767 11.0393C44.7817 10.9342 44.9242 10.8752 45.0727 10.8752C45.2212 10.8752 45.3637 10.9342 45.4687 11.0393C45.5737 11.1443 45.6327 11.2867 45.6327 11.4352V21.8904C45.6327 22.039 45.5737 22.1814 45.4687 22.2864C45.3637 22.3914 45.2212 22.4504 45.0727 22.4504Z"
                  fill="#475569"
                />
                <path
                  d="M33.8731 47.8353H3.63313C3.18756 47.8353 2.76025 47.6583 2.44519 47.3432C2.13012 47.0282 1.95313 46.6009 1.95312 46.1553V11.4353H3.07313V46.1553C3.07313 46.3038 3.13212 46.4463 3.23715 46.5513C3.34217 46.6563 3.4846 46.7153 3.63313 46.7153H33.8731V47.8353Z"
                  fill="#475569"
                />
                <path
                  d="M51.2332 24.3153H50.1132V4.42968L45.5324 11.7601C45.4819 11.8408 45.4118 11.9073 45.3285 11.9534C45.2452 11.9994 45.1516 12.0235 45.0564 12.0233H2.51318C2.41102 12.0231 2.31085 11.995 2.22352 11.942C2.13619 11.889 2.06502 11.8131 2.01773 11.7225C1.97043 11.632 1.94881 11.5302 1.9552 11.4283C1.96159 11.3263 1.99575 11.228 2.05398 11.1441L8.21398 2.18408C8.26223 2.10471 8.32946 2.03858 8.40962 1.99166C8.48978 1.94474 8.58035 1.91849 8.67318 1.91528H50.6732C50.8217 1.91528 50.9641 1.97428 51.0692 2.0793C51.1742 2.18432 51.2332 2.32676 51.2332 2.47528V24.3153ZM3.57718 10.8753H44.7484L49.6484 3.03528H8.95318L3.57718 10.8753Z"
                  fill="#475569"
                />
                <path
                  d="M42.2729 54.0847C42.0477 54.0863 41.8271 54.02 41.6401 53.8943L36.3145 50.2655C35.2108 49.5154 34.1962 48.6417 33.2905 47.6615C30.4205 44.5796 28.8203 40.5273 28.8105 36.3159V26.2751C28.8108 26.0565 28.8781 25.8433 29.0032 25.664C29.1284 25.4848 29.3054 25.3483 29.5105 25.2727L41.8809 20.5575C42.1404 20.4574 42.4279 20.4574 42.6873 20.5575L55.0521 25.2727C55.2499 25.3545 55.4187 25.4938 55.5365 25.6725C55.6543 25.8512 55.7157 26.0611 55.7129 26.2751V36.3103C55.6932 39.0702 54.9998 41.7836 53.693 44.2146C52.3862 46.6457 50.5056 48.7209 48.2145 50.2599L42.8889 53.8887C42.7073 54.0132 42.4931 54.0813 42.2729 54.0847ZM42.2729 21.6047L29.8857 26.3199V36.3159C29.8976 40.2459 31.3938 44.0262 34.0745 46.8999C34.9233 47.8171 35.874 48.6344 36.9081 49.3359L42.2729 52.9647L47.6041 49.3359C49.7409 47.8972 51.4943 45.9588 52.7122 43.6889C53.9301 41.419 54.5757 38.8862 54.5929 36.3103V26.2751L50.4377 24.7239L42.2729 21.6047Z"
                  fill="#475569"
                />
                <path
                  d="M41.8806 41.2553L37.6582 37.1225L38.4422 36.3217L41.8022 39.6089L46.859 33.5833L47.7214 34.3057L41.8806 41.2553Z"
                  fill="#475569"
                />
              </g>
              <defs>
                <clipPath id="clip0_497_5513">
                  <rect
                    width="56"
                    height="56"
                    fill="white"
                    transform="translate(0.833008)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span className="text-center"> ارسال فوری برای شهر تهران</span>
          </div>
          <div className="flex flex-col justify-center items-center text-xs w-24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="57"
              height="56"
              viewBox="0 0 57 56"
              fill="none"
            >
              <mask
                id="mask0_498_5561"
                maskUnits="userSpaceOnUse"
                x="5"
                y="7"
                width="47"
                height="43"
              >
                <path d="M51.4161 7H5.91699V49.0665H51.4161V7Z" fill="white" />
              </mask>
              <g mask="url(#mask0_498_5561)">
                <path
                  d="M11.2825 23.2129H14.7151V35.2625H11.2825C10.3239 35.2625 9.40455 34.8818 8.72656 34.2042C8.04858 33.5265 7.66746 32.6073 7.66699 31.6488V26.8284C7.66699 25.8695 8.04791 24.9499 8.72594 24.2718C9.40399 23.5938 10.3236 23.2129 11.2825 23.2129Z"
                  stroke="#00A2A2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M46.0508 35.2651H42.6182V23.2129H46.0508C47.0097 23.2129 47.9293 23.5938 48.6074 24.2718C49.2854 24.9499 49.6663 25.8695 49.6663 26.8284V31.6488C49.6664 32.1236 49.573 32.5939 49.3914 33.0327C49.2097 33.4714 48.9434 33.87 48.6076 34.2059C48.2719 34.5417 47.8733 34.8081 47.4346 34.9899C46.9959 35.1716 46.5257 35.2651 46.0508 35.2651Z"
                  stroke="#00A2A2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.7158 35.2642V12.2517C14.7158 11.3234 15.0845 10.4332 15.741 9.77686C16.3973 9.12043 17.2875 8.75171 18.2158 8.75171H39.1178C40.0461 8.75171 40.9363 9.12043 41.5927 9.77686C42.2491 10.4332 42.6178 11.3234 42.6178 12.2517V35.2642"
                  stroke="#475569"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M36.5928 44.9058H39.0034C39.9623 44.9058 40.8819 44.5249 41.56 43.8469C42.238 43.1688 42.6189 42.2492 42.6189 41.2903V35.2642"
                  stroke="#475569"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M34.1817 42.4961H26.9507C25.6194 42.4961 24.54 43.5754 24.54 44.9067C24.54 46.238 25.6194 47.3173 26.9507 47.3173H34.1817C35.513 47.3173 36.5923 46.238 36.5923 44.9067C36.5923 43.5754 35.513 42.4961 34.1817 42.4961Z"
                  stroke="#00A2A2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            <span className="text-center"> ارسال فوری برای شهر تهران</span>
          </div>
        </div>
        <div className="row-span-2 border w-96 h-28 mt-4 mr-10 rounded-md flex justify-between px-4">
          <div className="flex flex-col justify-center">
            <div className="flex ">
              <div className="self-center w-8 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M20 25.333L26.6667 25.333L26.6667 11.9997C26.6667 9.48554 26.6667 8.22848 25.8856 7.44741C25.1045 6.66634 23.8475 6.66634 21.3333 6.66634L20 6.66634"
                    stroke="#E8891D"
                    stroke-width="1.6"
                  />
                  <path
                    d="M12.0007 25.333L8.00065 25.333C6.52789 25.333 5.33398 24.1391 5.33398 22.6663L5.33399 6.66634L12.0007 6.66634"
                    stroke="#E8891D"
                    stroke-width="1.6"
                  />
                </svg>{" "}
              </div>
              <p className="text-sm self-center pr-5">
                ارسال{" "}
                <span className="text-zeemano-auxiliary-orange">رایگان</span>{" "}
                سفارش ها
              </p>
            </div>
            <div className="flex">
              <div className=" w-8 h-8 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M6 9.00073C7.65685 9.00073 9 7.65758 9 6.00073C9 4.34386 7.65685 3.00073 6 3.00073C4.34315 3.00073 3 4.34386 3 6.00073C3 7.65758 4.34315 9.00073 6 9.00073Z"
                    fill="#E8891D"
                  />
                </svg>
              </div>
              <p className="text-xs self-center pr-5">
                برای سفارشات بالای یک میلیون تومان
              </p>
            </div>
          </div>
          <svg
            width="88"
            height="88"
            viewBox="0 0 88 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_498_5571)">
              <path
                d="M86.2396 57.2V71.28H78.3196C78.3196 69.8796 77.7633 68.5367 76.7731 67.5465C75.7829 66.5563 74.44 66 73.0396 66C71.6393 66 70.2963 66.5563 69.3061 67.5465C68.3159 68.5367 67.7596 69.8796 67.7596 71.28H61.5996V42.24H76.5596L86.2396 57.2ZM80.0796 57.2L74.7996 48.4H67.7596V57.2H80.0796Z"
                fill="#00A2A2"
              />
              <path
                d="M20.9004 72.1599H12.3204C12.087 72.1599 11.8632 72.0672 11.6982 71.9022C11.5331 71.7371 11.4404 71.5133 11.4404 71.2799V27.2799C11.4404 27.0465 11.5331 26.8227 11.6982 26.6576C11.8632 26.4926 12.087 26.3999 12.3204 26.3999H21.1204V28.1599H13.2004V70.3999H20.9004V72.1599Z"
                fill="#495771"
              />
              <path
                d="M26.4002 77.4406C25.1819 77.4406 23.9909 77.0793 22.9779 76.4025C21.9649 75.7256 21.1754 74.7635 20.7091 73.6379C20.2429 72.5123 20.1209 71.2738 20.3586 70.0789C20.5963 68.8839 21.183 67.7863 22.0445 66.9248C22.906 66.0633 24.0036 65.4767 25.1985 65.239C26.3934 65.0013 27.632 65.1233 28.7576 65.5895C29.8832 66.0557 30.8452 66.8453 31.5221 67.8583C32.199 68.8713 32.5602 70.0623 32.5602 71.2806C32.5602 72.9143 31.9112 74.4812 30.756 75.6364C29.6008 76.7916 28.034 77.4406 26.4002 77.4406ZM26.4002 66.8806C25.53 66.8806 24.6793 67.1387 23.9557 67.6221C23.2322 68.1056 22.6682 68.7928 22.3352 69.5968C22.0021 70.4008 21.915 71.2855 22.0848 72.139C22.2546 72.9925 22.6736 73.7765 23.289 74.3919C23.9043 75.0072 24.6883 75.4263 25.5418 75.5961C26.3954 75.7658 27.2801 75.6787 28.084 75.3457C28.888 75.0127 29.5752 74.4487 30.0587 73.7251C30.5422 73.0015 30.8002 72.1508 30.8002 71.2806C30.8002 70.1137 30.3367 68.9945 29.5115 68.1693C28.6863 67.3442 27.5672 66.8806 26.4002 66.8806Z"
                fill="#495771"
              />
              <path
                d="M18.4804 50.1599H4.40039V51.9199H18.4804V50.1599Z"
                fill="#495771"
              />
              <path
                d="M67.7596 70.3999H61.5996V72.1599H67.7596V70.3999Z"
                fill="#495771"
              />
              <path
                d="M86.2406 72.1606H78.3206V70.4006H85.3606V57.4558L76.0854 43.1206H61.6006V41.3606H76.5606C76.7078 41.3608 76.8526 41.398 76.9818 41.4687C77.1109 41.5395 77.2203 41.6415 77.2998 41.7654L86.9798 56.7254C87.0713 56.867 87.1201 57.032 87.1206 57.2006V71.2806C87.1206 71.514 87.0279 71.7378 86.8628 71.9029C86.6978 72.0679 86.474 72.1606 86.2406 72.1606Z"
                fill="#495771"
              />
              <path
                d="M61.6003 72.1599H31.9003V70.3999H60.7202V28.1599H21.2148V26.3999H61.6003C61.8336 26.3999 62.0575 26.4926 62.2225 26.6576C62.3875 26.8227 62.4803 27.0465 62.4803 27.2799V71.2799C62.4803 71.5133 62.3875 71.7371 62.2225 71.9022C62.0575 72.0672 61.8336 72.1599 61.6003 72.1599Z"
                fill="#495771"
              />
              <path
                d="M73.0399 77.4406C71.8216 77.4406 70.6306 77.0793 69.6176 76.4025C68.6046 75.7256 67.815 74.7635 67.3488 73.6379C66.8826 72.5123 66.7606 71.2738 66.9982 70.0789C67.2359 68.8839 67.8226 67.7863 68.6841 66.9248C69.5456 66.0633 70.6432 65.4767 71.8381 65.239C73.0331 65.0013 74.2716 65.1233 75.3972 65.5895C76.5228 66.0557 77.4849 66.8453 78.1617 67.8583C78.8386 68.8713 79.1999 70.0623 79.1999 71.2806C79.1999 72.9143 78.5509 74.4812 77.3957 75.6364C76.2404 76.7916 74.6736 77.4406 73.0399 77.4406ZM73.0399 66.8806C72.1696 66.8806 71.3189 67.1387 70.5954 67.6221C69.8718 68.1056 69.3078 68.7928 68.9748 69.5968C68.6418 70.4008 68.5547 71.2855 68.7244 72.139C68.8942 72.9925 69.3133 73.7765 69.9286 74.3919C70.544 75.0072 71.328 75.4263 72.1815 75.5961C73.035 75.7658 73.9197 75.6787 74.7237 75.3457C75.5277 75.0127 76.2149 74.4487 76.6983 73.7251C77.1818 73.0015 77.4399 72.1508 77.4399 71.2806C77.4399 70.1137 76.9763 68.9945 76.1512 68.1693C75.326 67.3442 74.2068 66.8806 73.0399 66.8806Z"
                fill="#495771"
              />
              <path
                d="M80.0799 58.08H67.7599C67.5265 58.08 67.3027 57.9873 67.1376 57.8223C66.9726 57.6572 66.8799 57.4334 66.8799 57.2V48.4C66.8799 48.1666 66.9726 47.9428 67.1376 47.7778C67.3027 47.6127 67.5265 47.52 67.7599 47.52H74.7999C74.9526 47.52 75.1027 47.5598 75.2354 47.6354C75.3681 47.711 75.4788 47.8199 75.5567 47.9512L80.8367 56.7512C80.9159 56.8848 80.9583 57.037 80.9597 57.1923C80.9611 57.3476 80.9213 57.5006 80.8444 57.6355C80.7675 57.7705 80.6563 57.8827 80.522 57.9608C80.3878 58.0389 80.2352 58.08 80.0799 58.08ZM68.6399 56.32H78.5223L74.2983 49.28H68.6399V56.32Z"
                fill="#495771"
              />
              <path
                d="M18.4799 41.3606H0.879883V43.1206H18.4799V41.3606Z"
                fill="#495771"
              />
              <path
                d="M18.4794 32.5596H4.39941V34.3196H18.4794V32.5596Z"
                fill="#495771"
              />
              <rect
                x="22"
                y="40.8572"
                width="29.8571"
                height="7.85714"
                fill="#94FFF8"
              />
              <path
                d="M36.3698 43.7922H34.3678V45.8572H33.3948V40.8802H36.6218V41.6502H34.3678V43.0222H36.3698V43.7922ZM39.9806 43.9952H39.1196V45.8572H38.1396V40.8802H39.9736C40.5569 40.8802 41.0073 41.0108 41.3246 41.2722C41.6466 41.5288 41.8076 41.8998 41.8076 42.3852C41.8076 42.7118 41.7306 42.9918 41.5766 43.2252C41.4226 43.4538 41.1986 43.6312 40.9046 43.7572L41.9896 45.8082V45.8572H40.9396L39.9806 43.9952ZM39.9806 43.2322C40.2419 43.2322 40.4473 43.1622 40.5966 43.0222C40.7459 42.8822 40.8206 42.6908 40.8206 42.4482C40.8206 42.1962 40.7483 42.0025 40.6036 41.8672C40.4589 41.7272 40.2513 41.6548 39.9806 41.6502H39.1196V43.2322H39.9806ZM46.4955 43.6732H44.4935V45.0872H46.8315V45.8572H43.5205V40.8802H46.8245V41.6502H44.4935V42.9242H46.4955V43.6732ZM51.3498 43.6732H49.3478V45.0872H51.6858V45.8572H48.3748V40.8802H51.6788V41.6502H49.3478V42.9242H51.3498V43.6732Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_498_5571">
                <rect width="88" height="88" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
}
function AboutProduct() {
  return (
    <>
      <div className="border-t border-b mt-10  bg-gradient-to-b from-white via-neutral-50 to-neutral-50">
        <h6 className=" text-center text-slate-700 text-lg font-medium mt-5">
          درمورد این محصول{" "}
        </h6>
        <div className="w-80 flex m-auto justify-between mt-7    ">
          <button className="  text-slate-400 text-base font-normal border-b-2 pb-5  ">
            جزئیات محصول{" "}
          </button>

          <button className="  border-b-zeemano-auxiliary-orange border-b-2 pb-5 text-slate-700 text-base font-medium">
            پرسش و پاسخ <span className="pr-1">{"(1)"}</span>
          </button>
        </div>
        <div className="w-4/5 border-t m-auto ">
          <div className="border rounded-md bg-white mt-10">
            <div className="flex flex-col p-5 ">
              <div>
                <div className="flex pb-2">
                  <span className="text-slate-900">سوال:</span>
                  <p className="mr-5 text-slate-700 ">از جنس لاتکس هست؟</p>
                </div>
                <div className="text-slate-500 text-xs font-medium">
                  <span>مهدی</span>
                  <span>-</span>
                  <span>۳</span>
                  <span>سال پیش</span>
                </div>
              </div>
              <div className="mr-5 mt-4  ">
                <div className="flex pb-2">
                  <span className="text-slate-900">جواب : </span>
                  <p className="mr-5 text-slate-700">
                    ممنون از پرسش شما . بله از جنس لاتکس هست در صورت داشتن
                    حساسیت از محصولات بدون لاتکس استفاده کنید !
                  </p>
                </div>
                <div className="text-slate-500 text-xs font-medium">
                  <span>شیما</span>
                  <span>-</span>
                  <span>۳</span>
                  <span className="ml-2">سال پیش</span>
                  <span className="text-red-600 text-xs ml-3">
                    {"(کارشناس محصول)"}
                  </span>
                  <button className="text-slate-500 text-xs border-b ml-3 ">
                    کمک کننده نبود{" "}
                  </button>
                  <button className="text-slate-500 text-xs border-b ml-3 ">
                    کمک کننده بود{" "}
                  </button>
                  <button className="text-slate-500 text-xs border-b ml-3 ">
                    گزارش
                  </button>
                </div>
                <button className="text-zinc-400 text-xs  border-2 rounded-md px-3 py-2 mt-2">
                  جواب دهید
                </button>
              </div>

              <div></div>
            </div>
            <div className="flex flex-col p-5 ">
              <div>
                <div className="flex pb-2">
                  <span className="text-slate-900">سوال:</span>
                  <p className="mr-5 text-slate-700 ">از جنس لاتکس هست؟</p>
                </div>
                <div className="text-slate-500 text-xs font-medium">
                  <span>مهدی</span>
                  <span>-</span>
                  <span>۳</span>
                  <span>سال پیش</span>
                </div>
              </div>
              <div className="mr-5 mt-4  ">
                <div className="flex pb-2">
                  <span className="text-slate-900">جواب : </span>
                  <p className="mr-5 text-slate-700">
                    ممنون از پرسش شما . بله از جنس لاتکس هست در صورت داشتن
                    حساسیت از محصولات بدون لاتکس استفاده کنید !
                  </p>
                </div>
                <div className="text-slate-500 text-xs font-medium">
                  <span>شیما</span>
                  <span>-</span>
                  <span>۳</span>
                  <span className="ml-2">سال پیش</span>
                  <span className="text-red-600 text-xs ml-3">
                    {"(کارشناس محصول)"}
                  </span>
                  <button className="text-slate-500 text-xs border-b ml-3 ">
                    کمک کننده نبود{" "}
                  </button>
                  <button className="text-slate-500 text-xs border-b ml-3 ">
                    کمک کننده بود{" "}
                  </button>
                  <button className="text-slate-500 text-xs border-b ml-3 ">
                    گزارش
                  </button>
                </div>
                <button className="text-zinc-400 text-xs  border-2 rounded-md px-3 py-2 mt-2">
                  جواب دهید
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-3 my-3">
            <button className="text-zinc-400 text-xs  border-2 rounded-md px-3 py-1 mt-2 bg-white">
              مشاهده بیشتر
            </button>
            <button className=" text-xs border-2 border-red-600 rounded-md px-3 py-1 mt-2 text-red-600 bg-white">
              ایجاد سوال
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
function MoreProduct() {
  return (
    <>
      <div className="w-11/12 h-96 bg-orange-200 rounded-lg m-auto my-20 "></div>
    </>
  );
}
