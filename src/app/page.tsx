import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/navigation-bar/logo";

export default function Home() {
  return (
    <main className="w-screen h-max gap-y-8 px-10 text-slate-800">
    {/* <main className="w-screen h-max grid grid-cols-[minmax(min-content, 1fr)] grid-rows-[repeat(auto-fit, max-content)] justify-items-center gap-y-8 px-10 text-slate-800 "> */}
      {/* <CardContainer title="تخفیف ویژه" pathto="/">
        <Card />
      </CardContainer>
       */}
    <Productpage/>
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
          <p className="line-through">{"۸۳,۲۰"}</p> تومان
        </p>
        <p className="font-medium text-sm text-zeemano-auxiliary-orange">
          {"۸۳,۲۰۰"} تومان
        </p>
      </div>
    </figure>
  );
};
function Productpage(){
  return <>
    {/* start of product navigition */}
   <div className="mt-5 mr-[70px]">
 <div className="flex w-full flex-row text-xs"> 
    <a className="mx-5" href="">زیمانو</a>
    <span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
  <path d="M6.5 11L1.5 6L6.5 1" stroke="#334155" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
    <a className="mx-5" href="">وسایل پانسمان و زخم</a>
    <span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
  <path d="M6.5 11L1.5 6L6.5 1" stroke="#334155" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
    <a className="mx-5" href="">دسته بندی نشده</a>
    
   </div>
    </div>
      {/* end of product navigition */}
    <div className="grid grid-cols-3 grid-rows-5 gap-4 mt-5 mr-[90px]">
      <div className="w-full h-[64px] col-span-2 col-start-2 row-start-1 ">
        <h3 className="text-slate-700 text-xl ">چسب بخیه 3M مدل STERI-STRIP در سایزبندی</h3>
        <div className="text-xs font-extralight pb-2 border-b-2 flex flex-row gap-2"> 
        <p className="inline">امتیاز کاربران به این محصول </p>
        <div className="flex flex-row">
          <div className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
         <path d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z" fill="#CBD5E1"/>
        </svg>
        </div>
        <div className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
         <path d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z" fill="#CBD5E1"/>
        </svg>
        </div>
        <div className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
         <path d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z" fill="#CBD5E1"/>
        </svg>
        </div>
        <div className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
         <path d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z" fill="#CBD5E1"/>
        </svg>
        </div>
        <div className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
         <path d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z" fill="#CBD5E1"/>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M8.5 3.5H3.5C2.11929 3.5 1 4.61929 1 6V18.5C1 19.8807 2.11929 21 3.5 21H16C17.3807 21 18.5 19.8807 18.5 18.5V13.5M13.5 1H21M21 1V8.5M21 1L8.5 13.5" stroke="#475569" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
        <div className="pt-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6 4.22222C6 3.63285 6.18061 3.06762 6.5021 2.65087C6.82359 2.23413 7.25963 2 7.71429 2H16.2857C16.7404 2 17.1764 2.23413 17.4979 2.65087C17.8194 3.06762 18 3.63285 18 4.22222V22L12 18.1111L6 22V4.22222Z" stroke="#475569" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
      <div className="mt-5 rounded-xl ">

        <Image  src={"/images/bdsoozan.jpg"} alt="product" width={20} height={20}/>
        <Image  src={"/images/bdsoozan.jpg"}  alt="product" width={20} height={20}/>
      </div>
     

        </div>
        
        <div className="w-[448px] h-[448px]">
        <Image 
          className="rounded-t-lg"
          src={"/images/bdsoozan.jpg"}
          alt="product"
          width={448}
          height={448}
          loading="lazy"
          quality={100}/>
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
                <button className="  bg-slate-50 border-slate-400 hover:bg-zeemano-500 hover:text-white text-slate-700 font-extralight py-2 px-4 border rounded"> {`s ${83} x ${3} cm `} </button>
                <button className="  bg-slate-50 border-slate-400 hover:bg-zeemano-500 hover:text-white text-slate-700 font-extralight py-2 px-4 border rounded"> {`s ${83} x ${3} cm `} </button>
                <button className="  bg-slate-50 border-slate-400 hover:bg-zeemano-500 hover:text-white text-slate-700 font-extralight py-2 px-4 border rounded"> {`s ${83} x ${3} cm `} </button>
              </div>

          </div>
          <div  className="pb-5 mb-5 flex border-b-1 border-black">
  <p>رنگ:</p>
    <div className="w-6 h-6 bg-purple-800 rounded mx-3 cursor-pointer"></div>
     <span className="text-slate-500 text-sm font-medium">بنفش</span>
      
          </div>
          <div className="border-b border-solid border-[#E4E4E7] w-3/4"></div>
          <div className="pt-5">
            <ul className="list-disc">
              <li >
                <div className="inline ml-5 ">ویژگی</div>
                <div className=" w-80 h-20 text-justify text-slate-700 text-sm font-normal"> بسیاری از جراحاتی که بر بدن اتفاق می‌افتد در صورت عمیق نبودن، نیازی به بخیه ندارند و می‌توان آن‌ها را به وسیله چسب‌های بخیه پانسمان کرد.</div>
                </li>
              </ul>


          </div>
        </div>
      </div>
      <div className="w-[327px] h-[480px] row-span-4 col-start-3 row-start-2  bg-slate-50 border-2 rounded-lg  border-slate-400 p-3   ">
        <div className="flex justify-between items-center ">
          <h4 className=" text-slate-600 text-sm font-medium">تعمین کننده</h4>
          <a className="text-zeemano-700 text-xs" href="">موجود در زیمانو پلاس</a>
        </div>
        <div className="flex mb-5 ">
        <Logo/> <span className="self-end">زیمانو</span>
        </div>
        <div className="w-9/12 m-auto h-[0.3px] bg-gradient-to-l from-white via-black to-white"> </div>
       <div className="text-right text-slate-600 text-sm font-medium">
       <div className="flex justify-between items-center pt-3 ">
          <p>قیمت بسته ای</p>
          <p>3,303,000 تومان</p>
        </div>
        <div className="flex justify-between items-center pt-3">
          <p>قیمت هر عدد  </p>
          <p>۲۹,۷۰۰ تومان</p>
        </div>
        <div className="flex justify-between items-center pt-3">
          <p> بسته بندی</p>
         <div className="">
         <button className="bg-white border-slate-400 hover:bg-zeemano-500 hover:text-white text-slate-700 font-extralight py-1 px-1 border rounded ml-3 ">عددی</button>
          <button className="bg-white border-slate-400 hover:bg-zeemano-500 hover:text-white text-slate-700 font-extralight py-1 px-1 border rounded">بسته ای</button>
         </div>
        </div>
       </div>
        <div className="w-9/12 m-auto h-[0.7px] bg-gradient-to-l from-white via-black to-white mt-5"> </div>
        
      </div>
    </div>
  
  </>
}
