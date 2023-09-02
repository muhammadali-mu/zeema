export const BackDrop = ({ children }: { children: any }) => {
  return (
    <div className="fixed top-[104px] w-full h-full z-40 bg-zinc-950 bg-opacity-60 backdrop-blur ">
      {children}
    </div>
  );
};
