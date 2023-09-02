import LoginButton from "./login-button";
import Logo from "./logo";
import NotifIcon from "./notif-icon";
import SaleRequestButton from "./sale-request-button";
import Navigation from "./navigation";
import Search from "./search";
import MegaMenu from "./mega-menu";
import { BackDrop } from "../ui-kit/back-drop";

const navigationTab = [
  {
    id: "_4264638",
    text: "لوازم پزشکی",
    href: "/",
    megaMenu: [
      {
        head: "تجهیزات ارتوپدی",
        src: "/reflexes_reflex_hammer_tool_doctor_medical_medicine.svg",
        href: "/",
        tags: [
          { text: "باند کشی", href: "/" },
          { text: "لوازم شکسته بندی", href: "/" },
          { text: "لاانگشتی طبی", href: "/" },
          { text: "کالای خواب طبی", href: "/" },
          { text: "بالش طبی", href: "/" },
          { text: "بالش دور گردنی", href: "/" },
          { text: "پشتی  طبی", href: "/" },
          { text: "آتل", href: "/" },
          { text: "آتل انگشت", href: "/" },
          { text: "آتل پا", href: "/" },
        ],
      },
      {
        head: "ساپورت طبی",
        src: "/broken_arm_patient_medical_medicine.svg",
        href: "/",
        tags: [
          { text: "مچ بند طبی پا و قوزک بند  ", href: "/" },
          { text: "شانه بند طبی", href: "/" },
          { text: "کمربند طبی", href: "/" },
          { text: "گردنبند طبی", href: "/" },
          { text: "مچ بند طبی دست", href: "/" },
          { text: "زانو بند  طبی", href: "/" },
          { text: "آرنج بند طبی", href: "/" },
          { text: "قوزبند طبی", href: "/" },
          { text: "جوراب واریس", href: "/" },
        ],
      },
      {
        head: "وسایل پانسمان و زخم",
        src: "/finger_cut_blood_injury_hand_medical.svg",
        href: "/",
        tags: [
          { text: "درمان زخم و کنترل عفونت", href: "/" },
          { text: "سیفتی باکس", href: "/" },
          { text: "چسب زخم", href: "/" },
          { text: "زخم بستر", href: "/" },
          { text: "چسب زخم بستر", href: "/" },
          { text: "تشک مواج", href: "/" },
          { text: "پماد زخم بستر", href: "/" },
          { text: "ضدعفونی کننده زخم", href: "/" },
          { text: "اسپری ضد عفونی کننده زخم", href: "/" },
          { text: "بتادین", href: "/" },
          { text: "چسب پانسمان", href: "/" },
          { text: "چسب ضد حساسیت", href: "/" },
          { text: "جسب بینی", href: "/" },
          { text: "پماد سوختگی", href: "/" },
          { text: "گاز طبی", href: "/" },
          { text: "گاز غیر استریل", href: "/" },
          { text: "گاز وازلینه", href: "/" },
          { text: "گاز استریل", href: "/" },
          { text: "پنبه بهداشتی", href: "/" },
        ],
      },
      {
        head: "وسایل تزریقات",
        src: "/vaccine_syringe_injection_medical_medicine.svg",
        href: "/",
        tags: [
          { text: "سرنگ", href: "/" },
          { text: "سرنگ انسولین", href: "/" },
          { text: "سرنگ آوا", href: "/" },
          { text: "سرنگ تزریق ژل لب", href: "/" },
          { text: "آنژیوکت", href: "/" },
          { text: "سه راهی آنژیوکت", href: "/" },
          { text: "سرسوزن", href: "/" },
          { text: "سرنگ سرسوزن مزوتراپی", href: "/" },
          { text: "سرسوزن کانولا", href: "/" },
          { text: "سوزن بیوپسی", href: "/" },
          { text: "پمپ شیمی درمانی", href: "/" },
          { text: "رگ بند", href: "/" },
        ],
      },
      {
        head: "سوند ادراری",
        src: "/bladder.svg",
        href: "/",
        tags: [
          { text: "کاندوم شیت", href: "/" },
          { text: "لوله ادرار", href: "/" },
          { text: "کیسه ادرار", href: "/" },
          { text: "ژل پزشکی", href: "/" },
          { text: "ژل سونوگرافی", href: "/" },
          { text: "زنان و زایمان", href: "/" },
          { text: "درمان درد و التهاب", href: "/" },
          { text: "کیسه فصد خون", href: "/" },
        ],
      },
      {
        head: "ابزار جراحی",
        src: "/scalpel_surgery_medical_medicine.svg",
        href: "/",
        tags: [
          { text: "دستکش جراحی", href: "/" },
          { text: "نخ بخیه", href: "/" },
          { text: "تیغ جراحی", href: "/" },
          { text: "استپلر پوستی", href: "/" },
        ],
      },
      {
        head: "تجهیزات توانبخشی",
        src: "/wheelchair_handicap_disabled_medical.svg",
        href: "/",
        tags: [
          { text: "واکر", href: "/" },
          { text: "عصا طبی", href: "/" },
          { text: "عصا چوبی", href: "/" },
        ],
      },
      {
        head: "البسه پزشکی",
        src: "",
        href: "/",
        tags: [
          { text: "روپوش پزشکی", href: "/" },
          { text: "کلاه یکبار مصرف", href: "/" },
        ],
      },
      {
        head: "منسوجات",
        src: "/",
        href: "/",
        tags: [],
      },
      {
        head: "ضدعفونی کننده",
        src: "",
        href: "/",
        tags: [],
      },
      {
        head: "دستگاه فیزیوتراپی",
        src: "",
        href: "/",
        tags: [],
      },
      {
        head: "لوازم عمومی پزشکی",
        src: "",
        href: "/",
        tags: [],
      },
    ],
  },
  {
    id: "_4265639",
    text: "محصولات بهداشتی",
    megaMenu: [
      {
        head: "تجهیزات ارتوپدی",
        src: "/reflexes_reflex_hammer_tool_doctor_medical_medicine.svg",
        href: "/",
      },
    ],
  },
  {
    id: "_4264638",
    text: "دستگاه ها و لوازم",
    megaMenu: [
      {
        head: "تجهیزات ارتوپدی",
        src: "/reflexes_reflex_hammer_tool_doctor_medical_medicine.svg",
        href: "/",
      },
    ],
  },
  {
    id: "_42364739",
    text: "محصولات پوست و مو",
    megaMenu: [
      {
        head: "تجهیزات ارتوپدی",
        src: "/reflexes_reflex_hammer_tool_doctor_medical_medicine.svg",
        href: "/",
      },
    ],
  },
  {
    id: "_42356739",
    text: "خوراکی  سلامت",
    src: "",
    href: "/foodHealth",
  },
  {
    id: "_42387439",
    text: "تخفیف ویژه",
    src: "/coupon_sales_discount_shopping_offer.svg",
    href: "/",
  },
];

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
    <>
      <header className="flex flex-col justify-start items-center drop-shadow-md w-full h-min bg-transparent sticky top-0 z-50">
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

        <Navigation navigation={navigationTab} />
      </header>
      <BackDrop>
        <MegaMenu selectTab={navigationTab[0]} />
      </BackDrop>
    </>
  );
}
