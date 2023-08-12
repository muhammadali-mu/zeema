export default function Copyright() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className="flex justify-between grow justify-self-center max-w-7xl text-white text-xs pt-3 mx-10 px-4 ">
      <p> کلیه حقوق برای زیمانو محفوظ است.</p>
      <p className="font-mono lrt:text-xs">
        Copywrite © {year} Zeemano.com All rights reserved
      </p>
    </div>
  );
}
