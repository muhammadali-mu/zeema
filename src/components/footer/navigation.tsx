import Link from "next/link";
import Image from "next/image";

const footerNavList = [
  { text: "محصولات دیابتی", href: "/" },
  { text: "تجهیزات پزشکی خانگی", href: "/" },
  { text: "تجهیزات کلینیک زیبایی", href: "/" },
  { text: "  وسایل پانسمان و زخم", href: "/" },
  { text: "محصولات پزشکی ورزشی", href: "/" },
  { text: "فروشگاه", href: "/" },
  { text: "زیمانو پلاس", href: "/" },
  { text: "سوالات متداول", href: "/" },
  { text: "شرایط و قوانین", href: "/" },
  { text: "نحوه ارسال", href: "/" },
  { text: "درباره ما", href: "/" },
  { text: "حساب کاربری", href: "/" },
  { text: "پیگیری سفارش", href: "/" },
  { text: "کیف پول", href: "/" },
];

const socialMedia = [
  { name: "Instagram - Negative", href: "/" },
  { name: "LinkedIn - Negative", href: "/" },
  { name: "Telegram - Negative", href: "/" },
];

export default function Navigation() {
  return (
    <section className="flex justify-center w-full border-t border-zinc-100">
      <div className="flex justify-start flex-1 gap-5 max-w-7xl my-5">
        <nav
          aria-label="primary-navigation"
          className="flex justify-between grow max-w-3xl gap-20 text-xs font-light"
        >
          <ul className="grid grid-rows-5 grid-flow-col gap-3 my-4 mx-5 w-full">
            {footerNavList.map(({ text, href }) => (
              <li className="" key={text}>
                <Link
                  href={href}
                  className="text-sm text-slate-700 hover:text-slate-900 hover:font-normal"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col align-middle justify-center gap-3 flex-auto max-w-sm text-slate-700 ">
          <strong className="text-sm font-medium">آدرس دفتر مرکزی :</strong>
          <p className="text-sm">
            ضلع شمال غربی پل سیدخندان، نبش خیابان پیشداد، پلاک 1 واحد 9
          </p>
          <a
            href="+982191302797"
            className="text-sm font-normal text-slate-700 hover:text-slate-900 hover:font-medium "
          >
            تلفن تماس : 02191302797
          </a>

          <div className="flex justify-start gap-8">
            {socialMedia.map(({ name, href }) => (
              <Link href={href} className="relative w-8 h-8" key={name}>
                <Image
                  src={`/icons/Icon/Stroke/${name}.svg`}
                  fill
                  alt={name}
                  quality={100}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
