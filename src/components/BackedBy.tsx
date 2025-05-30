import { ArrowUpRightIcon } from "@phosphor-icons/react";

export const BackedBy = () => {
  return (
    <div className="h-fit w-full bg-gradient-to-b from-black to-black/10 py-[200px] max-w-[1200px] px-20 lg:px-0">
      {/* All items in responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-4 items-end">
        {/* Header text as first grid item */}
        <div className="w-fit flex flex-col items-start sm:justify-start xl:justify-end h-full">
          <div className="uppercase font-luckiest bg-green-300 w-fit px-2 text-black font-bold sm:text-[30px] text-[22px]">
            <div className="translate-y-[4px] sm:translate-y-[5px] whitespace-nowrap">
              Backed By
            </div>
          </div>
          <div className="uppercase w-fit font-luckiest bg-purple-500 px-3 sm:px-4 text-white font-bold sm:text-[48px] text-[36px]">
            <div className="translate-y-[6px] sm:translate-y-[8px] whitespace-nowrap">
              The Best
            </div>
          </div>
        </div>

        <div className="border-[0.5px] border-purple-500 flex flex-col p-6 sm:p-8 xl:p-10 gap-8 sm:gap-10 xl:gap-11">
          <div className="text-white/50 font-ubuntu font-light h-fit text-sm sm:text-base">
            Incorporate a (RLHF) component to align Zoan AI's outputs with human
            preferences.
          </div>
          <div className="group hover:bg-green-400 transition duration-300 hover:translate-x-1 hover:-translate-y-1 w-fit">
            <ArrowUpRightIcon className="text-green-500 group-hover:text-black text-xl sm:text-2xl xl:text-[24px]" />
          </div>
        </div>

        <div className="border-[0.5px] border-purple-500 flex flex-col p-6 sm:p-8 xl:p-10 gap-8 sm:gap-10 xl:gap-11">
          <div className="text-white/50 font-ubuntu  font-light text-sm sm:text-base">
            Incorporate a (RLHF) component to align Zoan AI's outputs with human
            preferences.
          </div>
          <div className="group hover:bg-green-400 transition duration-300 hover:translate-x-1 hover:-translate-y-1 w-fit">
            <ArrowUpRightIcon className="text-green-500 group-hover:text-black text-xl sm:text-2xl xl:text-[24px]" />
          </div>
        </div>

        <div className="border-[0.5px] border-purple-500 flex flex-col p-6 sm:p-8 xl:p-10 gap-8 sm:gap-10 xl:gap-11">
          <div className="text-white/50 font-ubuntu font-extralight text-sm sm:text-base">
            Incorporate a (RLHF) component to align Zoan AI's outputs with human
            preferences.
          </div>
          <div className="group hover:bg-green-400 transition duration-300 hover:translate-x-1 hover:-translate-y-1 w-fit">
            <ArrowUpRightIcon className="text-green-500 group-hover:text-black text-xl sm:text-2xl xl:text-[24px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
