import Image from "next/image";

const blog = [
  {
    imgurl: "/images/blog/foot.png",
    date: "27 اردیبهشت 1402",
    source: "دانشنامه وبلاگ",
    header: "نحوه شستشو و پانسمان زخم دیابتی (بررسی با جزئیات)",
    detail:
      "دیابت جزو بیماری های خاموشی می باشد که به مرور زمان می تواند مشکلات بسیار زیادی را برای فرد بیمار به وجود آورد. بر اساس تحقیقاتی که در چند سال گذشته انجام شده، محققان متوجه شدند که مبتلایان به بیماری دیابت همواره در معرض ابتلا به زخم های متعدد می باشند. به عنوان مثال زخم پای دیابتی و عفونت ناشی از آن جزو یکی از عوارض بسیار شایع در بیماران دیابتی است. زخم پای دیابتی می تواند احتمال بستری شدن بیماران را تا حدود بسیار زیادی بالا برده و در صورت درمان نشدن، سبب قطع عضو فرد نیز شود. درصد قابل توجهی از افرادی که به دیابت مبتلا هستند دچار این زخم ها شده و به مرور زمان نیازمند جراحی نیز می شوند. پس شما اگر با نحوه شستشو و پانسمان زخم دیابتی آشنایی پیدا کنید می توانید از به وجود آمدن چنین مشکلی جلوگیری نمایید.",
    big: true,
    style: "col-start-2 row-start-1",
    bg: "linear-gradient(0deg, #FFF0E5 0%, rgba(226, 232, 240, 0.00) 100%)",
    href: "/",
  },
  {
    imgurl: "/images/blog/hair.png",
    date: "27 اردیبهشت 1402",
    source: "دانشنامه وبلاگ",
    header: " علائم کمبود اکسیژن خون(درمان + پیشگیری)",
    detail: "",
    big: false,
    style: "col-start-2 row-start-1",
    bg: "linear-gradient(66deg, rgba(148, 255, 248, 0.21) 0%, rgba(207, 250, 254, 0.40) 100%);",
    href: "/",
  },
  {
    imgurl: "/images/blog/hypoxemia.png",
    date: "27 اردیبهشت 1402",
    source: "دانشنامه وبلاگ",
    header: "برداشتن چربی شکم بدون جراحی (بررسی تمام روش ها)",
    detail: "",
    big: false,
    style: "col-start-2 row-start-2",
    bg: "linear-gradient(135deg, rgba(103, 232, 249, 0.10) 0%, rgba(177, 96, 41, 0.06) 100%)",
    href: "/",
  },
  {
    imgurl: "/images/blog/losing.png",
    date: "27 اردیبهشت 1402",
    source: "دانشنامه وبلاگ",
    header: "عوارض حرف زدن بعد از عمل بینی",
    detail: "",
    big: false,
    style: "col-start-1 row-start-2",
    bg: "linear-gradient(66deg, rgba(148, 255, 248, 0.21) 0%, rgba(207, 250, 254, 0.40) 100%);",
    href: "/",
  },
  {
    imgurl: "/images/blog/talking.png",
    date: "27 اردیبهشت 1402",
    source: "دانشنامه وبلاگ",
    header: "مراقبت های بعد از مزوتراپی مو (اهمیت + مزایا)",
    detail: "",
    big: false,
    style: "col-start-1 row-start-1",
    bg: "linear-gradient(135deg,  rgba(232, 137, 29, 0.03)100%, rgba(226, 232, 240, 0.32) 0%);",
    href: "/",
  },
];
export default function Blog() {
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2 gap-3 max-w-screen-xl  place-items-center my-16 ">
        {/* <div className=" h-full w-full col-span-2 row-span-2 col-start-3 row-start-1 bg-red-900 rounded-xl "></div> */}
        {blog.map((e) =>
          e.big ? (
            <div
              key={e.detail}
              className="group h-full w-full col-span-2 row-span-2 col-start-3 row-start-1 rounded-xl cursor-pointer"
              style={{ background: `${e.bg}` }}
            >
              <div className="w-full flex flex-col ">
                <Image
                  className="bg-blend-darken rounded-t-md"
                  style={{ height: "50vh", width: "100%" }}
                  src={e.imgurl}
                  width={500}
                  height={500}
                  quality={100}
                  alt=""
                />
                <div className="p-5 ">
                  <div className="flex justify-end text-left text-xs">
                    <a href="" className=" ">
                      {e.source}
                    </a>
                    <div className="border-l border-slate-700 mx-2"></div>
                    <a href="">{e.date}</a>
                  </div>
                  <h5 className="text-slate-800 text-lg py-5 ">{e.header}</h5>
                  <p className="text-slate-700 text-sm">{e.detail}</p>
                </div>
              </div>
            </div>
          ) : (
            <div
              key={e.detail}
              className={` group h-full w-[306px] rounded-xl cursor-pointer ${e.style}`}
              style={{ background: `${e.bg}` }}
            >
              <div className="w-full flex flex-col ">
                <Image
                  className="bg-blend-darken rounded-t-md"
                  style={{ height: "100%", width: "100%" }}
                  src={e.imgurl}
                  width={5000}
                  height={5000}
                  quality={100}
                  alt=""
                />
                <div className="p-5 ">
                  <div className="flex justify-end text-left text-xs">
                    <a href="" className=" ">
                      {e.source}
                    </a>
                    <div className="border-l border-slate-700 mx-2"></div>
                    <a href="">{e.date}</a>
                  </div>
                  <h5 className="text-slate-800 text-lg my-5 ">{e.header}</h5>
                  <p className="text-slate-700 text-sm">{e.detail}</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}
