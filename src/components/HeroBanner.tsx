import bigCloud from "../assets/Bigcloud.png";
import cloud from "../assets/background.png";
import logo from "../assets/logo.png";
import cloudLeft from '../assets/cloud-left.png';
import cloudRight from '../assets/cloud-right.png';

export const HeroBanner = () => {
  return (
    <div className="relative bg-black w-full xl:[800px] lg:[800px] md:h-[870px] [700px] h-[620px] pb-10 mb-10">
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
          className="absolute md:bottom-0 sm:-bottom-5 -bottom-10 right-0 left-10 mx-auto xl:w-[22%] md:w-[30%] sm:w-[40%] w-[70%]"
          src={logo}
        />
        <img 
          fetchPriority="high"
          className="absolute md:bottom-10 sm:-bottom-5 -bottom-20 right-0 -left-[430px] mx-auto w-[6%]"
          src={cloudLeft}
        />
        <img 
          fetchPriority="high"
          className="absolute md:bottom-4 sm:-bottom-5 -bottom-20 right-0 left-[400px] mx-auto w-[6%]"
          src={cloudRight}
        />
        <div className="relative flex flex-col items-center h-full top-10 w-full gap-2">
          <div className="font-luckiest text-black/80 md:text-[170px] text-[130px] md:pt-[80px] pt-[0px]">
            <p className="md:translate-y-20 translate-y-12 -rotate-1">ZOAN</p>
          </div>
          <div className="font-luckiest -rotate-1 bg-purple-400 px-4 py-1 text-black font-bold text-3xl md:text-[30px] pt-3 uppercase ">
            De-AI Consumer Layer
          </div>
        </div>
      </div>
      {/* <div className="bg-black h-[50px] w-full"></div> */}
    </div>
  );
};
