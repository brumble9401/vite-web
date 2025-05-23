import footerCloud from "../assets/illus-footer.png";
import X from "../assets/X.png";
import Discord from "../assets/Discord.png";
import Tele from "../assets/TelegramLogo.png";

export const Footer = () => {
  return (
    <footer className="relative h-[600px] sm:h-[700px] lg:h-[1000px] w-full bg-green-300 bg-[url('/seamless-pattern-green.png')] bg-[length:200px_200px] sm:bg-[length:250px_250px] lg:bg-[length:300px_300px] bg-repeat">
      {/* Bottom black half */}
      <div className="absolute bottom-0 w-full h-1/3 bg-black z-0" />

      {/* Cloud image over both backgrounds */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={footerCloud}
          alt="Clouds"
          className="absolute object-cover w-full h-full"
        />
      </div>

      {/* Main footer content on top of cloud */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-10 pt-16 sm:pt-20 lg:pt-28 px-4">
        <div className="text-center">
          <h2 className="text-4xl sm:text-6xl lg:text-[90px] font-bold text-green-300 font-luckiest uppercase">
            <p className="translate-y-[8px] sm:translate-y-[12px] lg:translate-y-[20px]">
              ZOAN
            </p>
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl font-medium text-purple-400 font-luckiest mt-2">
            DE-AI OS CONSUMER LAYER
          </p>
        </div>

        <div className="flex gap-3 sm:gap-4">
          <button className="bg-white text-black p-2 sm:p-3 rounded w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] bg-purple-200 flex items-center justify-center">
            <img src={X} alt="X" className="w-4 h-4 sm:w-auto sm:h-auto" />
          </button>
          <button className="bg-white text-black p-2 sm:p-3 rounded w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] bg-purple-200 flex items-center justify-center">
            <img
              src={Discord}
              alt="Discord"
              className="w-4 h-4 sm:w-auto sm:h-auto"
            />
          </button>
          <button className="bg-white text-black p-2 sm:p-3 rounded w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] bg-purple-200 flex items-center justify-center">
            <img
              src={Tele}
              alt="Telegram"
              className="w-4 h-4 sm:w-auto sm:h-auto"
            />
          </button>
          <button className="bg-white text-black p-2 sm:p-3 rounded w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] bg-purple-200 flex items-center justify-center">
            <img
              src={Tele}
              alt="Telegram"
              className="w-4 h-4 sm:w-auto sm:h-auto"
            />
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-white/50 font-ubuntu text-sm sm:text-base">
          <span>BRAND KITS</span>
          <span>TERMS</span>
          <span>PRIVACY</span>
          <span>BLOGS</span>
        </div>

        <div className="mt-2 font-ubuntu text-white/30 text-xs sm:text-sm text-center px-4">
          Copyright © 2024. NIKA STUDIO. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
