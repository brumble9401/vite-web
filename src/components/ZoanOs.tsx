import gradient from "../assets/gradient.png";
import clouds from "../assets/clouds.png";
import monadSad from "../assets/monadSad.png";
import monadHappy from "../assets/monadHappy.png";
import left from "../assets/left.png"
import Chog from "../assets/Chog.png"
import Anag from "../assets/Anag.png"
import Creature from "../assets/Creature.png"
import Molandak from "../assets/Molandak.png"

export const ZoanOs = () => {
  return (
    <div className="bg-black w-full h-full flex flex-col items-center justify-center">
      <div className="relative w-full max-w-[800px] px-4 md:px-8">
        {/* Left & Right Borders */}
        <div className="absolute left-0 top-0 w-[0.5px] h-full bg-gradient-to-b from-black to-green-500" />
        <div className="absolute right-0 top-0 w-[0.5px] h-full bg-gradient-to-b from-black to-green-500" />

        <div className="relative overflow-hidden py-10">
          <div
            className="relative mx-auto w-full max-w-[560px] h-[560px] bg-indigo-900 rounded-3xl overflow-hidden z-0"
            // style={{
            //   background:
            //     "linear-gradient(180deg, #5B57A8 0%, #8A85CF 60%, #A5A1E5 100%)",
            //   boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            //   border: "2px solid #3D3985",
            // }}
            style={{
              background: 'radial-gradient(circle, #5b57a8, #645faf, #6d68b6, #7570be, #7e79c5, #847fca, #8b86cf, #918cd4, #9691d8, #9b96dc, #a09ce1, #a5a1e5)'
            }}
          >
            <img
              src={gradient}
              className="absolute z-10 w-full h-[560px] left-1/2 -translate-x-1/2 top-10"
            />
            <div className="absolute max-w-full h-[38px] w-full text-white font-ubuntu overflow-hidden whitespace-nowrap pt-1 bg-white/10 text-xs px-2">
              Solve charming interior design puzzles for clients — earning
              rewards and unlocking adorable new furniture themes along the way.
            </div>

            <img src={clouds} className="absolute z-10 bottom-0 w-full" />
            
            <img
              src={monadSad}
              className="absolute z-20 -bottom-3 left-0 h-[100px] md:h-[140px]"
            />
            <img
              src={monadHappy}
              className="absolute z-20 -bottom-3 right-0 h-[100px] md:h-[140px]"
            />
            <img src={Chog} className="absolute z-20 top-36 left-10 h-20" />
            <img src={Anag} className="absolute z-20 top-16 left-24 h-20" />
            <img src={Creature} className="absolute z-20 top-12 right-24 h-20" />
            <img src={Molandak} className="absolute z-20 top-40 right-10 h-20" />

            <div className="relative z-30 flex flex-col items-center justify-center gap-6 h-full pt-10 pb-20 px-4">
              <div className="flex flex-col items-center gap-2 text-center">
                <img src={left} className="h-6 mb-2" />
                <div className="font-luckiest text-[18px] md:text-[22px] bg-purple-400 pt-1 px-2 -rotate-2">
                  12:12
                </div>
                <div className="font-luckiest text-white text-[36px] md:text-[48px] uppercase">
                  Zoan Os
                </div>
                <div className="font-ubuntu text-white text-[14px] md:text-[16px] mx-20">
                  That AI is not just a privilege of centralized entities
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 text-white"
                  >
                    <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-purple-500 rounded-2xl"></div>
                    <div className="font-ubuntu text-sm md:text-[18px] text-center">
                      App Name
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
