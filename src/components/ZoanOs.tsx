// import gradient from "../assets/gradient.png";
// import clouds from "../assets/clouds.png";
// import monadSad from "../assets/monadSad.png";
// import monadHappy from "../assets/monadHappy.png";

// export const ZoanOs = () => {
//   return (
//     <div className="bg-black md:w-[800px] h-full flex flex-col items-center justify-center gap-0">
//       <div className="relative w-full h-full overflow-hidden">
//         {/* Top gradient border */}
//         {/* <div className="absolute top-0 left-0 w-full h-[0.5px] bg-gradient-to-r from-black via-green-500 to-black" /> */}

//         {/* Left border with gradient */}
//         <div className="absolute left-0 top-0 w-[0.5px] h-full bg-gradient-to-b from-black to-green-500"></div>

//         {/* Right border with gradient */}
//         <div className="absolute right-0 top-0 w-[0.5px] h-full bg-gradient-to-b from-black to-green-500"></div>

//         {/* bottom mask to ensure border starts as black */}
//         {/* <div className="absolute bottom-0 left-0 w-full h-[20%] bg-black z-10"></div> */}

//         <div className="relative overflow-hidden">
//           <img
//             src={gradient}
//             className="absolute z-10 w-[560px] h-[560px] rounded-3xl mx-auto left-0 right-0 my-20"
//           />
//           <div
//             className="mx-auto w-[560px] h-[560px] relative bg-indigo-900 rounded-3xl overflow-hidden my-20"
//             style={{
//               background:
//                 "linear-gradient(180deg, #5B57A8 0%, #8A85CF 60%, #A5A1E5 100%)",
//               height: "560px",
//               boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
//               border: "2px solid #3D3985",
//             }}
//           >
//             <div className="absolute max-w-[560px] h-[38px] text-white font-ubuntu overflow-hidden whitespace-nowrap pt-1 bg-white/10">
//               Solve charming interior design puzzles for clients — earning
//               rewards and unlocking adorable new furniture themes along the way.
//               Solve charming interior design puzzles for clients — earning
//               rewards and unlocking adorable new furniture themes along the
//               way.Solve charming interior design puzzles for clients — earning
//               rewards and unlocking adorable new furniture themes along the way.
//             </div>
//             <img src={clouds} className="absolute z-10 bottom-0" />
//             <img
//               src={monadSad}
//               className="absolute z-20 -bottom-3 -left-5 h-[140px]"
//             />
//             <img
//               src={monadHappy}
//               className="absolute z-20 -bottom-3 -right-5 h-[140px]"
//             />
//             <div className="relative z-30 flex flex-col items-center justify-center gap-16 h-full">
//               <div className="flex flex-col items-center gap-4 px-24">
//                 <div className="font-luckiest text-[22px] bg-purple-400 pt-1 px-2 -rotate-2">
//                   12:12
//                 </div>
//                 <div className="h-[38px]">
//                   <div className="font-luckiest text-white text-[48px]">
//                     Zoan Os
//                   </div>
//                 </div>
//                 <div className="font-ubuntu text-white text-[16px] text-center mt-2">
//                   That AI is not just a privilege of centralized entities
//                 </div>
//               </div>
//               <div className="flex flex-row w-full items-center justify-between px-[76px]">
//                 <div className="flex flex-col gap-2 items-center justify-between">
//                   <div className="w-[80px] h-[80px] bg-purple-500/100 rounded-2xl"></div>
//                   <div className="font-ubuntu text-[18px] text-white">
//                     App Name
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-2 items-center justify-center">
//                   <div className="w-[80px] h-[80px] bg-purple-500/100 rounded-2xl"></div>
//                   <div className="font-ubuntu text-[18px] text-white">
//                     App Name
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-2 items-center justify-center">
//                   <div className="w-[80px] h-[80px] bg-purple-500/100 rounded-2xl"></div>
//                   <div className="font-ubuntu text-[18px] text-white">
//                     App Name
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-2 items-center justify-center">
//                   <div className="w-[80px] h-[80px] bg-purple-500/100 rounded-2xl"></div>
//                   <div className="font-ubuntu text-[18px] text-white">
//                     App Name
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
import gradient from "../assets/gradient.png";
import clouds from "../assets/clouds.png";
import monadSad from "../assets/monadSad.png";
import monadHappy from "../assets/monadHappy.png";

export const ZoanOs = () => {
  return (
    <div className="bg-black w-full h-full flex flex-col items-center justify-center">
      <div className="relative w-full max-w-[800px] px-4 md:px-8">
        {/* Left & Right Borders */}
        <div className="absolute left-0 top-0 w-[0.5px] h-full bg-gradient-to-b from-black to-green-500" />
        <div className="absolute right-0 top-0 w-[0.5px] h-full bg-gradient-to-b from-black to-green-500" />

        <div className="relative overflow-hidden py-10">
          <img
            src={gradient}
            className="absolute z-10 w-full max-w-[560px] h-[560px] rounded-3xl left-1/2 -translate-x-1/2 top-10"
          />
          <div
            className="relative mx-auto w-full max-w-[560px] h-[560px] bg-indigo-900 rounded-3xl overflow-hidden z-20"
            style={{
              background:
                "linear-gradient(180deg, #5B57A8 0%, #8A85CF 60%, #A5A1E5 100%)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              border: "2px solid #3D3985",
            }}
          >
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

            <div className="relative z-30 flex flex-col items-center justify-center gap-12 h-full pt-10 pb-20 px-4">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="font-luckiest text-[18px] md:text-[22px] bg-purple-400 pt-1 px-2 -rotate-2">
                  12:12
                </div>
                <div className="font-luckiest text-white text-[36px] md:text-[48px]">
                  Zoan Os
                </div>
                <div className="font-ubuntu text-white text-[14px] md:text-[16px] mt-2">
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
