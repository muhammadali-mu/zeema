import Link from "next/link";

export default function NotifIcon({
  children,
  pathto = "/",
  notificationLength = 0,
}: {
  children: any;
  pathto: string;
  notificationLength: number;
}) {
  return (
    <Link
      href={pathto}
      className="relative flex place-content-center items-center w-10 aspect-square rounded-full hover:bg-white group transition-all "
    >
      <span role="button" className="w-6 h-6 block">
        {children}
      </span>
      {notificationLength && (
        <span className="absolute inline-flex items-center justify-center p-1 text-white bg-red-500/80 group-hover:bg-red-500 top-0 right-0 lg:-top-2 lg:-right-2 w-1 h-1 lg:w-max lg:min-w-[24px] lg:h-6 border-2 border-solid border-white rounded-full animate-pulse lg:animate-none transition-all">
          <p className="font-normal text-xs text-white hidden lg:block pt-[2px]">
            {notificationLength}
          </p>
        </span>
      )}
    </Link>
  );
}
