export default function Search() {
  return (
    <form className="grow">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-slate-600 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className=" flex flex-row justify-end gap-4 items-center w-72 sm:w-full lg:w-96 h-10 p-3 pr-10 appearance-none text-sm font-light text-zinc-900 bg-slate-100 focus:outline-dashed focus:outline-1 focus:outline-slate-600 focus:outline-offset-2  focus:border-slate-500 placeholder-zinc-700 border border-zinc-300 rounded-lg"
          placeholder="جست و جو محصول یا برند در زیمانو "
          required
        />

        <button type="submit" className="sr-only absolute left-2.5 bottom-2.5 ">
          Search
        </button>
      </div>
    </form>
  );
}
