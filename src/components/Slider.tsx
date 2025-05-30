import zoanLogo2 from "../assets/Zoan-Mascot-2.png";

export const Card = () => {
  return (
    <div className="flex-shrink-0 w-[320px] h-[545px] bg-gradient-to-b from-purple-400 to-purple-200 px-10">
      <div className="flex flex-col items-center gap-4">
        <img src={zoanLogo2} className="w-[240px]" />
        <div className="border-[0.5px] w-full border-purple-300" />
        <div className="flex flex-col justify-start items-start w-full">
          <div className="font-luckiest bg-white px-2 text-black font-bold text-[22px] py-auto">
            <p className="translate-y-1">AUTONOMOUS LOGIC</p>
          </div>
          <div className="w-fit font-luckiest bg-purple-400 px-2 text-black font-bold text-[22px]">
          <p className="translate-y-1">FOR HUMANS</p>
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
    <div className="relative bg-green-200 w-full py-60">
      {/* <div className="absolute top-0 left-0 w-full h-[25%] bg-gradient-to-b from-black to-black/10 z-20"></div>
      <div className="absolute top-0 left-0 w-full h-[25%] bg-black z-10"></div> */}

      <div className="md:w-[800px] mx-auto flex flex-col items-center mt-10 relative">
        <div className="absolute left-0 bottom-0 w-[0.5px] h-full bg-gradient-to-t from-green-300 via-black to-green-300"></div>

        {/* Right border with gradient */}
        <div className="absolute right-0 bottom-0 w-[0.5px] h-full bg-gradient-to-t from-green-300 via-black to-green-300"></div>

        <div className="font-luckiest uppercase text-[36px] mt-10 text-center">
          Puzzle & Style Vibrant Themes! Explore Enchanting Dream Homes
        </div>
        {/* <div className="font-luckiest uppercase text-3xl">
          Explore Enchanting Dream Homes
        </div> */}

        <div className="flex flex-row overflow-x-auto scrollbar-none md:max-w-[800px] max-w-full gap-6 mt-10">
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
