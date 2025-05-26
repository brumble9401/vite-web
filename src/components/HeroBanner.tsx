import bigCloud from "../assets/Bigcloud.png";
import cloud from "../assets/background.png";
import logo from "../assets/logo.png";

export const HeroBanner = () => {
  return (
    <div className="relative bg-black w-full xl:[800px] lg:[800px] md:h-[800px] [700px] h-[620px] pb-10">
      <div className="bg-white w-full">
        <img
          fetchPriority="high"
          className="absolute top-0 w-full h-full object-cover"
          src={cloud}
        />
        <img
          fetchPriority="high"
          className="absolute bottom-0"
          src={bigCloud}
        />
        <img
          fetchPriority="high"
          className="absolute md:-bottom-5 sm:-bottom-5 -bottom-20 right-0 left-0 mx-auto xl:w-[20%] md:w-[30%] sm:w-[40%] w-[70%]"
          src={logo}
        />
        <div className="relative flex flex-col items-center h-full top-10 w-full">
          <div className="font-luckiest text-black/90 md:text-[200px] text-[130px] md:pt-[20px] pt-[0px]">
            <p className="md:translate-y-20 translate-y-12 -rotate-1">ZOAN</p>
          </div>
          <div className="font-luckiest -rotate-1 bg-purple-400 px-2 py-1 text-black font-bold text-3xl md:text-4xl pt-3 uppercase ">
            De-AI Consumer Layer
          </div>
        </div>
      </div>
      <div className="bg-black"></div>
    </div>
  );
};
