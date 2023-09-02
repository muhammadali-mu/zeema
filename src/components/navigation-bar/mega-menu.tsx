import Link from "next/link";

export default function MegaMenu({ selectTab }: { selectTab: any }) {
  return (
    <div className="relative w-full max-w-screen-2xl h-4/5 mx-auto bg-gradient-to-t from-zinc-200 via-zinc-100 to-white rounded-b-2xl">
      <Link
        href={selectTab.href}
        className="w-full flex p-4 border-b border-zinc-200"
      >
        <h3 className="text-slate-700 text-base">{selectTab.text}</h3>
      </Link>
      <div className="w-full h-[90%] p-2 mt-2 bg-blue-300"></div>
    </div>
  );
}
