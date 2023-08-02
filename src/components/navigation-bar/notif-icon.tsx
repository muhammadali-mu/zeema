import Link from "next/link";

export default function NotifIcon({
  children,
  pathto = "/",
}: {
  children: any;
  pathto: string;
}) {
  return (
    <Link href={pathto} className="relative block w-6">
      <span role="button" className="w-6 h-6 block">
        {children}
      </span>
      <span className="absolute inline-flex items-center justify-center p-1 text-white bg-red-500 -top-3 -right-3 w-max min-w-[24px] h-6 border-2 border-solid border-slate-50 rounded-full">
        <p className="font-normal text-xs text-white">99</p>
      </span>
    </Link>
  );
}
