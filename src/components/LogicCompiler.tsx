import pattern from "../assets/pattern.png";
import zoanFire from "../assets/Zoan-Mascot-Fire.png";

export const LogicCompiler = () => {
  return (
    <div className="relative w-full h-full bg-black">
      <img
        src={pattern}
        className="absolute inset-0 w-full h-full object-cover z-10"
        alt="Background pattern"
      />

      <div className="relative z-20 p-4 md:m-[60px] xl:m-[120px] xl:mx-auto m-6 max-w-[1200px] bg-black h-fit">
        {/* Top border */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-purple-500"></div>

        {/* Left border with gradient */}
        <div className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-purple-500 to-purple-200"></div>

        {/* Right border with gradient */}
        <div className="absolute right-0 top-0 w-[2px] h-full bg-gradient-to-b from-purple-500 to-purple-200"></div>

        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-200"></div>

        <div className="flex flex-col">
          {/* Header Section */}
          <div className="flex flex-col gap-20 lg:flex-row items-center justify-between px-4 md:px-10 lg:px-20 lg:py-0 py-10">
            {/* Title */}
            <div className="relative text-center lg:text-left">
              <div className="uppercase font-luckiest -rotate-1 bg-green-300 w-fit px-2 font-bold">
                <div className="text-black text-[48px] translate-y-[8px] mx-4">Logic Compiler</div>
              </div>
              <div className="uppercase font-luckiest -rotate-1 bg-purple-500 px-2 text-black font-bold text-[40px] sm:text-[50px] md:text-[60px]">
                <div className="translate-y-[10px] text-white text-20 tracking-wider mx-4">Architecture</div>
              </div>
            </div>

            {/* Mascot Image */}
            <img
              src={zoanFire}
              alt="Zoan Fire Mascot"
              className="w-[200px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto"
            />
          </div>

          {/* Content Section */}
          <div className="relative z-20 bg-purple-200 w-full h-fit flex flex-col lg:flex-row px-6 sm:px-12 lg:px-20 py-10 mt-10 gap-8">
            {/* Empty placeholder */}
            <div className="w-full lg:w-[40%]"></div>

            {/* Text content */}
            <div className="font-ubuntu text-black w-full text-sm sm:text-base leading-relaxed">
              Consequat eget non tristique cras et faucibus. Facilisi cras quis
              accumsan aliquam nam. Tellus nibh sit facilisi eget tempor ut.
              Tincidunt aliquam pharetra sit eget et sit urna adipiscing justo.
              Malesuada et non sed curabitur. Porttitor elit lobortis massa
              pellentesque massa nunc vitae. Ut dui habitant urna eu platea.
              Amet id imperdiet ullamcorper amet. Neque nunc diam facilisi
              luctus mollis sapien pulvinar massa aliquet. Etiam aliquet tempus
              tristique sit aliquet ultrices a. Diam praesent ac tellus ultrices
              eu gravida pellentesque facilisi urna. Nunc habitant amet at nec.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
