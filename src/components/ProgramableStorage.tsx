import { ArrowUpRightIcon } from "@phosphor-icons/react";
import zoanMascot from "../assets/Zoan-Mascot.png";

export const ProgramableStorage = () => {
  return (
    <div className="border-x-[0.5px] md:w-[800px] h-fit py-20">
      <div className="relative w-full h-full overflow-hidden">
        {/* Left border with gradient */}
        <div className="absolute left-0 bottom-0 w-[0.5px] h-full bg-gradient-to-t from-black to-green-500"></div>

        {/* Right border with gradient */}
        <div className="absolute right-0 bottom-0 w-[0.5px] h-full bg-gradient-to-t from-black to-green-500"></div>

        {/* Bottom border */}
        <div className="absolute top-0 left-0 w-full h-[0.5px] bg-green-500"></div>

        {/* bottom mask to ensure border starts as black */}
        {/* <div className="absolute bottom-0 left-0 w-full h-[20%] bg-black z-10"></div> */}

        <div className="flex flex-col items-center">
          <img src={zoanMascot} className="w-[320px] h-[320px]" />
          <div className="flex flex-col items-center justify-center mt-20">
            <div className="font-luckiest uppercase text-3xl text-green-300">
              Programmable Storage
            </div>
            <div className="font-luckiest uppercase text-3xl text-green-300">
              is a decentralized
            </div>
          </div>
          <div className="text-white/50 font-ubuntu px-20 mt-10 text-center">
            Unlike general-purpose blob storage, Programmable Storage is
            designed to anchor logic structures, blueprint executions, and
            inference states in a manner that is provably correct,
            version-controlled, and runtime-compatible.
          </div>

          <div className="group mt-20 hover:bg-green-400 transition duration-300 hover:translate-x-1 hover:-translate-y-1">
            <ArrowUpRightIcon
              className="text-green-500 group-hover:text-black"
              size={32}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
