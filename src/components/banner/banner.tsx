import Image from "next/image";

const banerdetail = [
  {
    title: "سنسور قند خون ",
    details: "دستگاه های سیستم پایش مداوم قند خون ",
    importantpoint: "بدون سوزن",
    image: "/images/banner/FrestyLibr2__08126(1)1.png",
    imgwidth: 158,
    imgheight: 158,
    image1: "/images/banner/ezgif1.png",
    imgwidth1: 113,
    imgheight1: 113,
    left: 145,
    bottom: 70,
    imgleft: 430,
    imgbottom: 0,
    img1left: 380,
    img1bottom: 40,
    style: "w-[620px]",
    bg: " linear-gradient(360deg,rgba(103, 232, 249, 0.40)  0%, rgba(0, 162, 162, 0.40) 100%)",
    bgsvg: "/images/banner/Frame.svg",
    href: "/",
  },
  {
    title: "دستگاه تصفیه هوا خانگی",
    details: "دستگاه های سیستم پایش مداوم قند خون ",
    importantpoint: "",
    image: "/images/banner/pngegg1.png",
    imgwidth: 85,
    imgheight: 192,
    image1: null,
    imgwidth1: null,
    imgheight1: null,
    left: 8,
    bottom: 90,
    imgleft: 190,
    imgbottom: 1,
    img1left: 20,
    img1bottom: 30,
    style: "w-[330px]",
    bg: "linear-gradient(90deg,rgba(232, 137, 29, 0.10)  0%, rgba(43, 253, 246, 0.24) 100%)",
    bgsvg: null,
    href: "/",
  },
  {
    title: "نوار تست قند خون",
    details: "کنترل دیابت و چک آپ اهمیت ویژه ای دارد ",
    importantpoint: "",
    image: "/images/banner/pngwing1.png",
    imgwidth: 100,
    imgheight: 104,
    image1: null,
    imgwidth1: null,
    imgheight1: null,
    left: 20,
    bottom: 90,
    imgleft: 20,
    imgbottom: 70,
    img1left: 20,
    img1button: 30,
    style: "w-[320px]",
    bg: "linear-gradient(45deg,rgba(0, 98, 116, 0.80)  0%,  rgba(253, 243, 232, 0.80)100%)",
    bgsvg: null,
    href: "/",
  },
];

export default function Banner() {
  return (
    <>
      <div className=" flex justify-between max-w-screen-xl gap-4 h-48 my-6 ">
        {banerdetail.map((e) => (
          <div
            className={`group flex flex-row rounded-lg p-2 relative  ${e.style}`}
            style={{
              background: `${e.bg}`,
            }}
            key={e.title}
          >
            <div
              style={{
                backgroundImage: `url(${e.bgsvg})`,
                width: "50%",
                height: "90%",
                position: "absolute",
                zIndex: -1,
                right: 1,
              }}
            ></div>
            <div
              className=""
              style={{
                position: "absolute",
                left: `${e.left}px`,
                bottom: `${e.bottom}px`,
                zIndex: 1,
              }}
            >
              <h3 className="text-slate-700 text-base font-medium ">
                {e.title}
              </h3>
              <p className="text-slate-600 text-xs">{e.importantpoint}</p>
              <p className="w-[120px] text-slate-600 text-xs">{e.details}</p>
            </div>

            <div className="">
              <Image
                className="group-hover:scale-y-90"
                style={{
                  position: "absolute",
                  left: `${e.imgleft}px`,
                  bottom: `${e.imgbottom}px`,
                  zIndex: 1,
                }}
                src={e.image}
                width={e.imgwidth}
                height={e.imgheight}
                alt={e.title}
                loading="lazy"
                quality={100}
              />
              {e.image1 ? (
                <Image
                  style={{
                    position: "absolute",
                    left: `${e.img1left}px`,
                    bottom: `${e.img1bottom}px`,
                  }}
                  src={e.image1}
                  width={e.imgwidth1}
                  height={e.imgheight1}
                  alt={e.title}
                  loading="lazy"
                  quality={100}
                />
              ) : null}
            </div>

            <button
              style={{ direction: "rtl" }}
              className=" flex w-32 h-8 px-3 bg-slate-800 bg-opacity-80 rounded-xl justify-between items-center  absolute bottom-4 left-5 text-white text-xs font-medium"
            >
              مشاهده و خرید
              <span>
                <Image
                  className="text-zeemano-auxiliary-orange"
                  src={"/icons/icon/Stroke/chevronleft.svg"}
                  width={16}
                  height={16}
                  alt=""
                />
              </span>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
