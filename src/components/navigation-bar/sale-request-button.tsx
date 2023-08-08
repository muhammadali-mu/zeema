export default function SaleRequestButton() {
  return (
    <button className=" flex items-center justify-center h-10 bg-gradient-to-r p-[2px] from-zeemano-700 via-zeemano-500 to-zeemano-auxiliary-green rounded-lg animate-gradient-xy hover:shadow-md transition-all">
      <div className="flex items-center justify-center h-full w-full  bg-white back rounded-[6px] ">
        <p className="text-center whitespace-nowrap text-sm font-normal text-zeemano-700 px-4">
          درخواست خرید عمده
        </p>
      </div>
    </button>
  );
}
