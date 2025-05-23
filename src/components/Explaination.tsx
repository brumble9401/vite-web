import LeftThunder from "../assets/LeftThunder.png";
import RightThunder from "../assets/RightThunder.png";

export const Explaination = () => {
  return (
    <div className="bg-black w-full h-fit flex flex-col items-center">
      <div className="relative md:w-[800px] h-full overflow-hidden">
        {/* Left border with gradient */}
        <div className="absolute left-0 top-0 w-[0.5px] h-full bg-gradient-to-b from-black to-purple-500"></div>

        {/* Right border with gradient */}
        <div className="absolute right-0 top-0 w-[0.5px] h-full bg-gradient-to-b from-black to-purple-500"></div>

        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-purple-500"></div>

        {/* Top mask to ensure border starts as black */}
        <div className="absolute top-0 left-0 w-full h-[20%] bg-black z-10"></div>

        <div className="absolute z-20 flex flex-row items-start justify-center w-full h-full">
          // <img className="w-[350px]" src={LeftThunder} />
          // <img className="w-[350px]" src={RightThunder} />
          //{" "}
        </div>

        {/* Content container */}
        <div className="flex flex-col items-center justify-between px-8 text-center z-20 relative mt-[120px] mb-[160px] gap-10">
          {/* Title section with the same style as in the image */}
          <div className="relative mb-8 mt-10">
            <div className="font-luckiest -rotate-1 bg-green-300 px-2 pt-2 text-black font-bold text-4xl py-auto">
              AUTONOMOUS LOGIC
            </div>
            <div className="absolute top-11 mx-auto w-fit left-0 right-0 font-luckiest -rotate-1 bg-purple-300 px-2 py-1 text-black font-bold text-4xl pt-3">
              FOR HUMANS
            </div>
          </div>

          {/* Description text */}
          <p className="text-white/50 font-ubuntu max-w-lg mt-6">
            In a world where artificial intelligence is reshaping the way we
            build, interact, and make decisions, Zoan introduces a layer of
            computational infrastructure, one that allows logic itself to become
            modular, programmable, and ownable.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="bg-purple-300 font-luckiest text-2xl hover:bg-indigo-200 text-black px-8 pt-3 pb-1 w-[160px] rounded-lg font-bold">
              WHY
            </button>
            <button className="bg-green-300 font-luckiest text-2xl hover:bg-lime-300 text-black px-8 pt-3 pb-1 w-[160px] rounded-lg font-bold">
              WHAT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
