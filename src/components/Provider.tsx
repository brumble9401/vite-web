export const Provider = () => {
  return (
    <div className="bg-black md:w-[800px] w-full flex flex-col items-center justify-center gap-0">
      <div className="relative w-full h-full overflow-hidden">
        {/* Top gradient border */}
        <div className="absolute top-0 left-0 w-full h-[0.5px] bg-gradient-to-r from-black via-green-500 to-black" />

        {/* Left border with gradient */}
        <div className="absolute left-0 top-0 w-[0.5px] h-full bg-gradient-to-b from-black to-green-500"></div>

        {/* Right border with gradient */}
        <div className="absolute right-0 top-0 w-[0.5px] h-full bg-gradient-to-b from-black to-green-500"></div>

        {/* bottom mask to ensure border starts as black */}
        {/* <div className="absolute bottom-0 left-0 w-full h-[20%] bg-black z-10"></div> */}

        <div className="relative z-20 flex flex-col h-full justify-center items-center gap-6 m-20">
          <div className="bg-green-200 font-luckiest text-[22px] px-2 pt-2">
            Our Providers
          </div>
          <div className="font-ubuntu text-white/50 text-center">
            That AI is not just a privilege of centralized entities
          </div>
          <div></div>
        </div>
      </div>

      <div className="relative w-full h-full overflow-hidden">
        {/* Top gradient border */}
        <div className="absolute top-0 left-0 w-full h-[0.5px] bg-gradient-to-r from-black via-green-500 to-black" />

        {/* Left border with gradient */}
        <div className="absolute left-0 top-0 w-[0.5px] h-full bg-gradient-to-t from-black to-green-500"></div>

        {/* Right border with gradient */}
        <div className="absolute right-0 top-0 w-[0.5px] h-full bg-gradient-to-t from-black to-green-500"></div>

        <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-gradient-to-r from-black via-green-500 to-black" />

        <div className="relative z-20 flex flex-col h-full justify-center items-center gap-6 m-20">
          <div className="bg-purple-300 font-luckiest text-[22px] px-2 pt-2">
            Backed By
          </div>
          <div className="font-ubuntu text-white/50 text-center">
            Zoan is building this foundation
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
