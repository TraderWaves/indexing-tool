export const Hero = () => {
  return (
    <div className="relative h-full">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 flex items-center justify-center md:top-6 lg:top-0">
        <div className="h-[200px] w-1/2 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 opacity-40 blur-2xl md:h-[150px] lg:h-[100px] lg:w-1/3"></div>
      </div>

      <div className="mt-20 px-5">
        <div className="relative z-10 flex flex-col gap-1">
          <h1 className="text-center text-4xl font-bold leading-tight">
            Unlock Your Potential with the Best Prop Firms
          </h1>
          <h2 className="text-center text-sm leading-5 text-slate-500 opacity-80">
            We help you find the right prop firm, so you can focus on what matters: trading
          </h2>
        </div>
      </div>
    </div>
  );
};
