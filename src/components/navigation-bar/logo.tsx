import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image
        className="m-4 cursor-pointer"
        src={"/zeemano-logo.svg"}
        alt="zeemano"
        width={40}
        height={40}
        quality={100}
      />
    </Link>
  );
}
