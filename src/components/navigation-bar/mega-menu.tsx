import Link from "next/link";
import Image from "next/image";

export default function MegaMenu({ selectTab }: { selectTab: any }) {
  return (
    <div className="relative flex flex-col justify-start items-center w-full max-w-screen-2xl h-[640px] mx-auto bg-gradient-to-t from-zinc-200 via-zinc-100 to-white rounded-b-2xl">
      <Link
        href={selectTab.href}
        className="w-full flex p-4 border-b border-zinc-200"
      >
        <h3 className="text-slate-700 text-base">{selectTab.text}</h3>
      </Link>
      <ul className="grid grid-cols-auto-fill-200 grid-rows-auto-fill-max grid-flow-dense gap-4 w-[calc(100%-32px)] h-full max-h-[560px] mt-2  overflow-hidden">
        {selectTab.megaMenu.map(
          ({
            index,
            head,
            href,
            src,
            tags,
          }: {
            index: number;
            head: string;
            href: string;
            src: string;
            tags: any;
          }) => (
            <li
              key={index + "top"}
              className="flex flex-col gap-1 "
              style={{
                gridRow: `span ${Math.ceil(tags.length / 5 + 1)}`,
              }}
            >
              <Link
                href={href}
                className="flex flex-row gap-2 hover:border-b-[1px] hover:border-b-zinc-200 "
              >
                <Image
                  src={`/icons/Icon/Stroke${src}`}
                  alt={src}
                  width={20}
                  height={20}
                  quality={100}
                />
                <h5 className="text-base text-zeemano-auxiliary-green ">
                  {head}
                </h5>
              </Link>
              {tags.map(
                ({
                  text,
                  href,
                  index,
                }: {
                  index: number;
                  text: string;
                  href: string;
                }) => (
                  <Link
                    href={href}
                    key={index + "sub"}
                    className="text-sm font-light text-slate-600 hover:text-zeemano-500  transition-all delay-75"
                  >
                    {text}
                  </Link>
                )
              )}
            </li>
          )
        )}
      </ul>
    </div>
  );
}
