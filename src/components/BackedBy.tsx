// import { ArrowUpRightIcon } from "@phosphor-icons/react";

// export const BackedBy = () => {
//   return (
//     <div className="h-fit w-full flex flex-row bg-gradient-to-b from-black to-black/10 p-[120px] pb-0 items-end gap-20">
//       <div className="w-fit flex flex-col items-start">
//         <div className="uppercase font-luckiest bg-green-300 w-fit px-2 text-black font-bold text-[30px] py-auto">
//           <div className="translate-y-[6px] whitespace-nowrap">Backed By</div>
//         </div>
//         <div className="uppercase w-fit font-luckiest bg-purple-500 px-4 text-white font-bold text-[48px]">
//           <div className="translate-y-[8px] whitespace-nowrap">The Best</div>
//         </div>
//       </div>
//       <div className="flex flex-row gap-4">
//         <div className="border-[0.5px] border-purple-500 flex flex-col p-10 gap-11">
//           <div className="text-white/50 font-ubuntu h-fit">
//             Incorporate a (RLHF) component to align Zoan AI's outputs with human
//             preferences.
//           </div>

//           <ArrowUpRightIcon className="text-[24px] text-green-500" />
//         </div>
//         <div className="border-[0.5px] border-purple-500 flex flex-col p-10 gap-11">
//           <div className="text-white/50 font-ubuntu">
//             Incorporate a (RLHF) component to align Zoan AI's outputs with human
//             preferences.
//           </div>

//           <ArrowUpRightIcon className="text-[24px] text-green-500" />
//         </div>
//         <div className="border-[0.5px] border-purple-500 flex flex-col p-10 gap-11">
//           <div className="text-white/50 font-ubuntu">
//             Incorporate a (RLHF) component to align Zoan AI's outputs with human
//             preferences.
//           </div>
//           <ArrowUpRightIcon className="text-[24px] text-green-500" />
//         </div>
//       </div>
//     </div>
//   );
// };
import { ArrowUpRightIcon } from "@phosphor-icons/react";

export const BackedBy = () => {
  return (
    <div className="h-fit w-full bg-gradient-to-b from-black to-black/10 p-6 sm:p-12 xl:p-[120px] pb-0">
      {/* All items in responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-4 items-end">
        {/* Header text as first grid item */}
        <div className="w-fit flex flex-col items-start justify-end h-full">
          <div className="uppercase font-luckiest bg-green-300 w-fit px-2 text-black font-bold text-xl sm:text-2xl xl:text-[30px] py-auto">
            <div className="translate-y-[4px] sm:translate-y-[5px] xl:translate-y-[6px] whitespace-nowrap">
              Backed By
            </div>
          </div>
          <div className="uppercase w-fit font-luckiest bg-purple-500 px-3 sm:px-4 text-white font-bold text-2xl sm:text-3xl xl:text-[48px]">
            <div className="translate-y-[5px] sm:translate-y-[6px] xl:translate-y-[8px] whitespace-nowrap">
              The Best
            </div>
          </div>
        </div>

        <div className="border-[0.5px] border-purple-500 flex flex-col p-6 sm:p-8 xl:p-10 gap-8 sm:gap-10 xl:gap-11">
          <div className="text-white/50 font-ubuntu h-fit text-sm sm:text-base">
            Incorporate a (RLHF) component to align Zoan AI's outputs with human
            preferences.
          </div>
          <ArrowUpRightIcon className="text-xl sm:text-2xl xl:text-[24px] text-green-500" />
        </div>

        <div className="border-[0.5px] border-purple-500 flex flex-col p-6 sm:p-8 xl:p-10 gap-8 sm:gap-10 xl:gap-11">
          <div className="text-white/50 font-ubuntu text-sm sm:text-base">
            Incorporate a (RLHF) component to align Zoan AI's outputs with human
            preferences.
          </div>
          <ArrowUpRightIcon className="text-xl sm:text-2xl xl:text-[24px] text-green-500" />
        </div>

        <div className="border-[0.5px] border-purple-500 flex flex-col p-6 sm:p-8 xl:p-10 gap-8 sm:gap-10 xl:gap-11">
          <div className="text-white/50 font-ubuntu text-sm sm:text-base">
            Incorporate a (RLHF) component to align Zoan AI's outputs with human
            preferences.
          </div>
          <ArrowUpRightIcon className="text-xl sm:text-2xl xl:text-[24px] text-green-500" />
        </div>
      </div>
    </div>
  );
};
