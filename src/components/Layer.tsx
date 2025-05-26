import LeftThunder from "../assets/HThunderLeft.png";
import RightThunder from "../assets/HThunderRight.png";
import Icon1 from "../assets/Frame.png";
import Icon2 from "../assets/Frame1.png";

export const Layers = () => {
  return (
    <div className="relative md:w-[800px] h-full md:p-20 p-6 border border-t-0 flex flex-col gap-6">
      {/* Left border with gradient */}
      <div className="absolute left-0 bottom-0 w-[0.5px] h-full bg-gradient-to-t from-black via-purple-900 to-purple-500"></div>

      {/* Right border with gradient */}
      <div className="absolute right-0 bottom-0 w-[0.5px] h-full bg-gradient-to-t from-black via-purple-900 to-purple-500"></div>

      {/* Bottom border */}
      <div className="absolute top-0 left-0 w-full h-[0.5px] bg-purple-500"></div>

      {/* bottom mask to ensure border starts as black */}
      <div className="absolute bottom-0 left-0 w-full h-[20%] bg-black z-10"></div>

      <div className="relative z-20 w-full h-fit bg-purple-300">
        <img
          src={LeftThunder}
          className="absolute w-full h-full object-contain"
        />
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-between p-10 gap-6">
          <div className="flex flex-col items-center justify-center">
            <img src={Icon1} className="w-[40px] h-[40px]" />
            <div className="font-luckiest text-[22px] mt-4">
              THE CONSUMER INTELLIGENCE LAYER
            </div>
            <div className="bg-purple-500 font-luckiest text-[22px] text-white pt-1 px-2 mt-1">
              89.99999%
            </div>
          </div>
          <div className="font-ubuntu text-black/70 text-center text-[15px]">
            Compiled by <b>Architects</b>, Structured by Creators, Interacted by
            Consumers, and verified by <b>Validators</b>. Community first.
          </div>
        </div>
      </div>
      <div className="relative z-20 w-full h-fit bg-green-300">
        <img
          src={RightThunder}
          className="absolute w-full h-full object-contain"
        />
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-evenly p-10 gap-6">
          <div className="flex flex-col items-center justify-center">
            <img src={Icon2} className="w-[40px] h-[40px]" />
            <div className="font-luckiest text-[22px] mt-4">
              The Protocol Extension Layer
            </div>
            <div className="bg-green-500 font-luckiest text-[22px] text-white pt-1 px-2 mt-1">
              19.99999%
            </div>
          </div>
          <div className="font-ubuntu text-black/70 text-center text-[15px]">
            A modular development framework that allows any blockchain or
            enterprise to integrate logic infrastructure directly into protocol
            stack.
          </div>
        </div>
      </div>
    </div>
  );
};
