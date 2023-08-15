import Image from "next/image";
import Link from "next/link";
import Copyright from "./copyright";
import Navigation from "./navigation";

const ListOfCertificate = [
  { name: "CreativeCompanyCertificate", href: "/", alt: "" },
  { name: "eSymbol", href: "/", alt: "" },
  { name: "OfficialDistributor", href: "/", alt: "" },
  { name: "OnlineShoppingCommunity", href: "/", alt: "" },
  { name: "Organizing", href: "/", alt: "" },
  { name: "VirtualBusinessUnion", href: "/", alt: "" },
];

export default function PrimaryFooter() {
  return (
    <footer>
      <Navigation/>
      <section className="relative flex justify-center gap-2 h-max w-full bg-gradient-to-tr  from-zeemano-auxiliary-green from-30%  to-zeemano-500">
        <Image
          className="absolute"
          src={"/pattern/footer_pattern_background.svg"}
          alt="product"
          fill
          loading="lazy"
          quality={100}
        />
        <div className="flex flex-col gap-3 justify-center w-full max-w-7xl my-5">
          <div className="grid grid-cols-2 gap-10 w-full">
            <div className="text-white w-full">
              <div className="flex flex-row justify-start content-center gap-3">
                <h4 className="flex gap-3 text-lg my-3 font-medium text-white">
                  <Image
                    className="rounded-t-lg filter-slate-50 filter invert saturate-100 hue-rotate-180 "
                    src={
                      "/icons/Icon/Stroke/caduceus_pharmacy_medical_medicine.svg"
                    }
                    alt="caduceus_pharmacy_medical_medicine"
                    width={40}
                    height={40}
                    loading="lazy"
                    quality={100}
                  />
                  رسالت تجهیزات پزشکی زیمانو
                </h4>
              </div>

              <div className="flex flex-col justify-start content-start gap-5 h-max font-thin text-md indent-4 leading-[24px] mr-5">
                <p className="whitespace-pre-line break-keep ">
                  {`ما در زیمانو به کسانی که نظام توزیع تجهیزات پزشکی مصرفی و محصولات بهداشتی را ناکارآمد می بینند، از طریق عرضه آنلاین ( دیجیتال ) این محصولات، با قیمت شفاف و کیفیت مطلوب، کمک می کنیم تا هر جای کشور که هستند، محصولات مورد نظر خود را در کوتاه ترین زمان ممکن و با صرف حداقل هزینه دریافت کنند.`}
                </p>
                <p className="whitespace-pre-line break-keep ">
                  {`زیمانو بستری فراهم آورده است تا تأمین کنندگان تجهیزات پزشکی بدون دغدغه فروش برای محصولات تجهیزات پزشکی خود بتوانند آنرا وارد یا تولید کنند، و از طرفی خیال مصرف کننده تجهیزات پزشکی برای تأمین کالای مورد نیازش راحت باشد که لوازم و تجهیزات پزشکی خود را بدون واسطه از تأمین کننده اصلی و در بستر سایت تجهیزات پزشکی و بهداشتی زیمانو تأمین می نماید.`}
                </p>
              </div>
            </div>
            <ul className="grid grid-cols-3 justify-self-end w-max gap-4 p-4">
              {ListOfCertificate.map(({ name, href, alt }) => (
                <li
                  className="flex justify-center items-center rounded-lg bg-white h-32 w-44"
                  key={name}
                >
                  <Link href={href} className="relative p-3 h-24 w-36">
                    <Image
                      src={`/certificate/${name}.svg`}
                      fill
                      alt={alt}
                      quality={100}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <hr className="w-full max-w-6xl bg-zinc-100 mx-auto"></hr>
          <Copyright />
        </div>
      </section>
    </footer>
  );
}
