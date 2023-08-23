import Image from "next/image";

const logo = [
  { imgurl: "/images/trust/coloplast.svg", href: "/" },
  { imgurl: "/images/trust/Group.svg", href: "/" },
  { imgurl: "/images/trust/helma.svg", href: "/" },
  { imgurl: "/images/trust/logo1.svg", href: "/" },
  { imgurl: "/images/trust/page-1-1.svg", href: "/" },
  { imgurl: "/images/trust/page-1.svg", href: "/" },
  { imgurl: "/images/trust/Vector.svg", href: "/" },
];
export default function Trust() {
  return (
    <>
      <div className="w-full h-52 max-w-screen-xl my-8 mx-16   ">
        <p className="text-center text-slate-800 text-3xl">
          {"مورد اعتماد برندهای پزشکی"}
        </p>
        <div className="w-full h-full flex gap-10 pt-10  justify-center ">
          {logo.map((e) => (
            <Image
              className="cursor-pointer"
              src={e.imgurl}
              width={100}
              height={40}
              key={e.imgurl}
              alt=""
            />
          ))}
        </div>
      </div>
    </>
  );
}
