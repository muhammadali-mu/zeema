export default function LoginButton() {
  return (
    <button className="flex flex-row justify-center items-center gap-3 h-10 w-max px-4 bg-white border-[1.6px] border-solid border-zinc-300 rounded-lg ">
      <div className="flex flex-row justify-center items-center text-slate-600 text-center whitespace-nowrap text-sm font-normal">
        <svg fill="none" width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M16.2222 6.44444C16.2222 7.62318 15.754 8.75365 14.9205 9.58714C14.087 10.4206 12.9565 10.8889 11.7778 10.8889C10.599 10.8889 9.46858 10.4206 8.63508 9.58714C7.80159 8.75365 7.33333 7.62318 7.33333 6.44444C7.33333 5.2657 7.80159 4.13524 8.63508 3.30175C9.46858 2.46825 10.599 2 11.7778 2C12.9565 2 14.087 2.46825 14.9205 3.30175C15.754 4.13524 16.2222 5.2657 16.2222 6.44444ZM11.7778 14.2222C9.71498 14.2222 7.73667 15.0417 6.27806 16.5003C4.81944 17.9589 4 19.9372 4 22H19.5556C19.5556 19.9372 18.7361 17.9589 17.2775 16.5003C15.8189 15.0417 13.8406 14.2222 11.7778 14.2222Z"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-slate-600"
          />
        </svg>
        <p className="flex flex-row justify-center items-center px-2 ">ورود</p>
        <p className=" block px-2  border-r border-zinc-200">ثبت نام</p>
      </div>
    </button>
  );
}
