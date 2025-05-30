import { ArrowUpRightIcon } from "@phosphor-icons/react";

export const LogicExplain = () => {
  return (
    <div className="border-[0.5px] border-green-500 w-full md:w-[800px] flex flex-col sm:flex-row gap-6">
      {/* Left Block */}
      <div className="sm:border-r-[0.5px] border-b-[0.5px] border-green-500 w-full group hover:bg-green-300 transition duration-500">
        <div className="flex flex-col items-start justify-evenly h-full p-6 md:p-10 gap-6 md:gap-10">
          <div className="relative">
            <div className="uppercase font-luckiest -rotate-1 bg-green-300 w-fit px-4 text-black font-bold text-[30px] transition duration-500 group-hover:bg-white">
              <div className="translate-y-[5px] transition duration-500">Logic Compiler</div>
            </div>
            <div className="uppercase w-fit font-luckiest -rotate-1 bg-purple-300 group-hover:bg-purple-400 px-4 text-black font-bold text-[30px] transition duration-500">
            <div className="translate-y-[5px] group-hover:text-white transition duration-500">Architecture</div>
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
      <div className="sm:border-l-[0.5px] border-t-[0.5px] border-green-500 w-full group hover:bg-green-300 transition duration-500">
        <div className="flex flex-col items-start justify-evenly h-full p-6 md:p-10 gap-6 md:gap-10">
          <div className="relative">
            <div className="uppercase font-luckiest -rotate-1 bg-green-300 w-fit px-2 text-black font-bold text-[30px] group-hover:bg-white transition duration-500">
              <div className="translate-y-[5px] transition duration-500">The Sandbox</div>
            </div>
            <div className="uppercase w-fit font-luckiest -rotate-1 bg-purple-300 px-2 text-black font-bold text-[30px] group-hover:bg-purple-400">
              <div className="translate-y-[5px] transition duration-500 group-hover:text-white">Pipeline</div>
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
