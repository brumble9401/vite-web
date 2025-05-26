import { ArrowUpRightIcon } from "@phosphor-icons/react";

export const LogicExplain = () => {
  return (
    <div className="border-[0.5px] border-green-500 w-full md:w-[800px] flex flex-col sm:flex-row gap-6">
      {/* Left Block */}
      <div className="sm:border-r-[0.5px] border-b-[0.5px] border-green-500 w-full group hover:bg-green-500">
        <div className="flex flex-col items-start justify-evenly h-full p-6 md:p-10 gap-6 md:gap-10">
          <div className="relative">
            <div className="uppercase font-luckiest -rotate-1 bg-green-300 w-fit px-2 pt-2 text-black font-bold text-xl sm:text-2xl md:text-[30px]">
              Logic Compiler
            </div>
            <div className="uppercase absolute top-10 sm:top-11 w-fit left-[1px] font-luckiest -rotate-1 bg-purple-300 px-2 py-1 text-black font-bold text-xl sm:text-2xl md:text-[30px] pt-2 sm:pt-3">
              Architecture
            </div>
          </div>
          <div className="text-white/50 font-ubuntu mt-10 text-sm sm:text-base group-hover:text-black">
            The GLB is the transformation core of Zoanetic, which interacts
            directly with the user's natural request. This engine takes in the
            raw request from the user and transforms it into a GLB.
          </div>
          <div className="text-white/50 font-ubuntu text-sm sm:text-base group-hover:text-black">
            GLBs represent the atomic unit of deployable intelligence in Zoan
            AI.
          </div>

          <div className="flex w-full justify-end">
            <ArrowUpRightIcon
              className="text-green-500 group-hover:text-black group-hover:bg-green-100"
              size={32}
            />
          </div>
        </div>
      </div>

      {/* Right Block */}
      <div className="sm:border-l-[0.5px] border-t-[0.5px] border-green-500 w-full group hover:bg-green-500">
        <div className="flex flex-col items-start justify-evenly h-full p-6 md:p-10 gap-6 md:gap-10">
          <div className="relative">
            <div className="uppercase font-luckiest -rotate-1 bg-green-300 w-fit px-2 pt-2 text-black font-bold text-xl sm:text-2xl md:text-[30px]">
              The Sandbox
            </div>
            <div className="uppercase absolute top-10 sm:top-11 w-fit left-[1px] font-luckiest -rotate-1 bg-purple-300 px-2 py-1 text-black font-bold text-xl sm:text-2xl md:text-[30px] pt-2 sm:pt-3">
              Pipeline
            </div>
          </div>
          <div className="text-white/50 font-ubuntu mt-10 text-sm sm:text-base group-hover:text-black ">
            One of the core challenges in Zoan AI’s architecture is transforming
            natural-language prompts into correct, composable, and secure
            on-chain logic.
          </div>
          <div className="text-white/50 font-ubuntu text-sm sm:text-base group-hover:text-black">
            The Zoan Sandbox introduces a closed feedback verification loop to
            ensure that logic generated from prompts
          </div>

          <div className="flex w-full justify-end">
            <ArrowUpRightIcon
              className="text-green-500 group-hover:text-black group-hover:bg-green-100"
              size={32}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
