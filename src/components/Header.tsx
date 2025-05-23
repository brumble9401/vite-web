// import React from "react";
// import logo from "../assets/logo.png";
// import rec from "../assets/Rectangle.png";
// import tele from "../assets/TelegramLogo.png";
// import X from "../assets/X.png";
// import dis from "../assets/Discord.png";

// const Header: React.FC = () => {
//   return (
//     <header className="fixed top-0 left-0 right-0 m-auto md:w-[800px] bg-green-200 backdrop-blur-sm z-50 border border-t-0 border-green-400">
//       <div className="container mx-auto px-4 py-3">
//         <nav className="flex items-center justify-between">
//           <div className="flex flex-row items-center gap-3">
//             <img src={logo} alt="logo" className="w-8" />
//             <img src={rec} />
//             <img src={X} className="w-4" />
//             <img src={dis} className="w-4" />
//             <img src={tele} className="w-4" />
//           </div>
//           <div className="hidden md:flex space-x-2">
//             <button className="font-luckiest text-white bg-black font-bold text-lg flex items-center justify-center px-3">
//               <p className="translate-y-[2px]">Github</p>
//             </button>
//             <button className="font-luckiest text-white bg-black font-bold text-lg flex items-center justify-center px-3">
//               <p className="translate-y-[2px]">Docs</p>
//             </button>
//             <div className="font-luckiest text-black bg-purple-400 font-bold text-lg flex items-center justify-center px-3">
//               <p className="translate-y-[2px]">ZOANADS</p>
//             </div>
//           </div>
//           <div className="flex flex-row items-center gap-2">
//             <button className="flex font-luckiest items-center justify-center gap-2 px-3 py-2 bg-black text-white text-[16px] font-extrabold rounded-xl shadow-md relative h-fit">
//               <span className="absolute top-2 left-1 w-2 h-1.5 -rotate-45 bg-white rounded-full" />
//               <p className="translate-y-[2px] text-[16px]">Connect Wallet</p>
//             </button>

//             <button className="flex font-luckiest items-center justify-center gap-2 px-3 py-2 bg-purple-300 text-black text-[16px] font-extrabold rounded-xl shadow-md relative h-fit">
//               <span className="absolute top-2 left-1 w-2 h-1.5 -rotate-45 bg-white rounded-full" />
//               <p className="translate-y-[2px] text-[16px]">Sign Up</p>
//             </button>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useState } from "react";
import logo from "../assets/logo.png";
import rec from "../assets/Rectangle.png";
import tele from "../assets/TelegramLogo.png";
import X from "../assets/X.png";
import dis from "../assets/Discord.png";
import { ListIcon } from "@phosphor-icons/react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 m-auto w-full md:w-[800px] bg-green-200 backdrop-blur-sm z-50 border border-t-0 border-green-400">
      <div className="mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          {/* Logo + Social Icons (desktop) */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-8" />
            <div className="hidden sm:flex gap-2 items-center">
              <img src={rec} alt="rec" />
              <img src={X} className="w-4" alt="X" />
              <img src={dis} className="w-4" alt="Discord" />
              <img src={tele} className="w-4" alt="Telegram" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2 items-center">
            <button className="font-luckiest text-white bg-black font-bold text-lg px-3">
              Github
            </button>
            <button className="font-luckiest text-white bg-black font-bold text-lg px-3">
              Docs
            </button>
            <div className="font-luckiest text-black bg-purple-400 font-bold text-lg px-3">
              ZOANADS
            </div>
            <button className="font-luckiest bg-black text-white text-[16px] font-extrabold px-3 py-2 rounded-xl shadow-md relative">
              <span className="absolute top-2 left-1 w-2 h-1.5 -rotate-45 bg-white rounded-full" />
              Connect Wallet
            </button>
            <button className="font-luckiest bg-purple-300 text-black text-[16px] font-extrabold px-3 py-2 rounded-xl shadow-md relative">
              <span className="absolute top-2 left-1 w-2 h-1.5 -rotate-45 bg-white rounded-full" />
              Sign Up
            </button>
          </div>

          {/* Hamburger for Mobile/Tablet */}
          <button
            className="md:hidden text-black focus:outline-none rounded-lg bg-black p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <ListIcon color="white" className="text-white" />
          </button>
        </nav>

        {/* Dropdown Menu for Mobile/Tablet */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-2 rounded-lg p-4 h-screen">
            <button className="font-luckiest text-white bg-black font-bold text-lg px-3 py-2 rounded">
              Github
            </button>
            <button className="font-luckiest text-white bg-black font-bold text-lg px-3 py-2 rounded">
              Docs
            </button>
            <div className="font-luckiest text-black bg-purple-400 font-bold text-lg px-3 py-2 rounded">
              ZOANADS
            </div>
            <button className="font-luckiest bg-black text-white text-[16px] font-extrabold px-3 py-2 rounded-xl shadow-md relative">
              <span className="absolute top-2 left-1 w-2 h-1.5 -rotate-45 bg-white rounded-full" />
              Connect Wallet
            </button>
            <button className="font-luckiest bg-purple-300 text-black text-[16px] font-extrabold px-3 py-2 rounded-xl shadow-md relative">
              <span className="absolute top-2 left-1 w-2 h-1.5 -rotate-45 bg-white rounded-full" />
              Sign Up
            </button>

            <div className="flex gap-3 sm:gap-4 justify-center items-center">
              <button className="text-black p-2 sm:p-3 rounded w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] bg-purple-200 flex items-center justify-center">
                <img src={X} alt="X" className="w-4 h-4 sm:w-auto sm:h-auto" />
              </button>
              <button className="text-black p-2 sm:p-3 rounded w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] bg-purple-200 flex items-center justify-center">
                <img
                  src={dis}
                  alt="Discord"
                  className="w-4 h-4 sm:w-auto sm:h-auto"
                />
              </button>
              <button className="text-black p-2 sm:p-3 rounded w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] bg-purple-200 flex items-center justify-center">
                <img
                  src={tele}
                  alt="Telegram"
                  className="w-4 h-4 sm:w-auto sm:h-auto"
                />
              </button>
              <button className="text-black p-2 sm:p-3 rounded w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] bg-purple-200 flex items-center justify-center">
                <img
                  src={X}
                  alt="Telegram"
                  className="w-4 h-4 sm:w-auto sm:h-auto"
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
