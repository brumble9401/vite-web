import cloud from "../assets/illus.png";
import zoanLogo2 from "../assets/Zoan-Mascot-2.png";

export const Card = () => {
  return (
    <div className="flex-shrink-0 w-[320px] bg-gradient-to-b from-purple-400 to-purple-200 p-10">
      <div className="flex flex-col items-center gap-10">
        <img src={zoanLogo2} />
        <div className="border-[0.5px] w-full border-purple-300" />
        <div className="flex flex-col justify-start items-start w-full">
          <div className="font-luckiest bg-green-300 px-2 pt-2 text-black font-bold text-[22px] py-auto">
            AUTONOMOUS LOGIC
          </div>
          <div className="w-fit font-luckiest bg-purple-300 px-2 py-1 text-black font-bold text-[22px] pt-3">
            FOR HUMANS
          </div>
        </div>
        <div className="font-ubuntu text-black/70">
          Elit consequat sed a non nullam congue elementum. Mollis nulla ut
          blandit sed eu arcu. Dui quam orci amet duis at urna vehicula nisi
          non. Ultrices dui mattis sagittis enim ut.
        </div>
      </div>
    </div>
  );
};

export const Slider = () => {
  return (
    <div className="relative bg-green-300 bg-[url('/seamless-pattern-green.png')] bg-[length:300px_300px] bg-repeat w-full">
      <img
        src={cloud}
        className="relative top-10 z-20 object-cover h-[800px] w-full"
      />
      <div className="absolute top-0 left-0 w-full h-[25%] bg-gradient-to-b from-black to-black/10 z-20"></div>
      <div className="absolute top-0 left-0 w-full h-[25%] bg-black z-10"></div>

      <div className="md:w-[800px] mx-auto flex flex-col items-center mt-10 relative">
        <div className="absolute left-0 bottom-0 w-[0.5px] h-full bg-gradient-to-t from-green-300 via-black to-green-300"></div>

        {/* Right border with gradient */}
        <div className="absolute right-0 bottom-0 w-[0.5px] h-full bg-gradient-to-t from-green-300 via-black to-green-300"></div>

        <div className="font-luckiest uppercase text-3xl mt-10">
          Puzzle & Style Vibrant Themes!
        </div>
        <div className="font-luckiest uppercase text-3xl">
          Explore Enchanting Dream Homes
        </div>

        <div className="flex flex-row overflow-x-auto scrollbar-none max-w-[800px] gap-6 mt-10">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="h-[45px]"></div>
      </div>
    </div>
  );
};
