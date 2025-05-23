import bigCloud from "../assets/Bigcloud.png";
import cloud from "../assets/background.png";
import logo from "../assets/logo.png";

export const HeroBanner = () => {
  return (
    <div className="relative bg-black w-full h-[800px] pb-10">
      <div className="bg-white w-full">
        <img className="absolute top-0 w-full h-full" src={cloud} />
        <img className="absolute bottom-0" src={bigCloud} />
        <img
          className="absolute bottom-0 right-0 left-0 m-auto md:w-[15%] w-[30%]"
          src={logo}
        />
        <div className="relative flex flex-col items-center w-full">
          <div className="font-luckiest text-black/90 text-[200px] pt-[150px]">
            ZOAN
          </div>
        </div>
      </div>
      <div className="bg-black"></div>
    </div>
  );
};
