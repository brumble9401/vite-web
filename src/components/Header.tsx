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
      <div className="mx-auto md:px-4 py-3">
        <nav className="flex items-center justify-between px-4">
          {/* Logo + Social Icons (desktop) */}
          <div className="flex items-center gap-3">
            <img fetchPriority="high" src={logo} alt="logo" className="w-8" />
            <div className="hidden sm:flex gap-2 items-center">
              <img fetchPriority="high" src={rec} alt="rec" />
              <img fetchPriority="high" src={X} className="w-4" alt="X" />
              <img
                fetchPriority="high"
                src={dis}
                className="w-4"
                alt="Discord"
              />
              <img
                fetchPriority="high"
                src={tele}
                className="w-4"
                alt="Telegram"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <div className="flex flex-row gap-2">
              <button className="font-luckiest text-white bg-black font-bold px-2">
                <p className="translate-y-1">Github</p>
              </button>
              <button className="font-luckiest text-white bg-black font-bold px-2">
                <p className="translate-y-1">Docs</p>
              </button>
              <div className="font-luckiest text-black bg-purple-400 font-bold px-2">
                <p className="translate-y-1">ZOANADS</p>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <button className="font-luckiest bg-black text-white text-[16px] font-extrabold px-4 py-2 pt-1 rounded-xl shadow-md relative group hover:bg-green-500 hover:duration-500">
                <span
                  className="absolute top-2 left-1 bg-white -rotate-45 transition group-hover:-translate-y-[1px]"
                  style={{
                    width: "10px",
                    height: "6px",
                    borderRadius: "50%",
                  }}
                ></span>
                <p className="translate-y-1 uppercase group-hover:text-black">
                  Connect Wallet
                </p>
              </button>
              <button className="font-luckiest bg-purple-300 text-black text-[16px] font-extrabold px-4 py-2 pt-1 rounded-xl shadow-md relative group hover:bg-purple-400 hover:duration-500">
                <span
                  style={{
                    width: "10px",
                    height: "6px",
                    borderRadius: "50%",
                  }}
                  className="absolute top-2 left-1 -rotate-45 bg-white rounded-full transition group-hover:-translate-y-[1px]"
                />
                <p className="translate-y-1 uppercase">Sign Up</p>
              </button>
            </div>
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
          <div className="md:hidden mt-4 flex flex-col gap-2 rounded-lg h-full items-center justify-evenly pb-28 h-screen relative bg-green-100 bg-[url('/seamless-pattern-green.png')] bg-[length:300px_300px] bg-repeat w-full">
            <div className="absolute w-full h-full top-0 z-0 opacity-40 bg-white"></div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-6">
              <button className="font-luckiest text-white bg-black font-bold text-lg px-3 py-2 rounded w-fit">
                <p className="translate-y-1">Github</p>
              </button>
              <button className="font-luckiest text-white bg-black font-bold text-lg px-3 py-2 rounded w-fit">
                <p className="translate-y-1">Docs</p>
              </button>
              <div className="font-luckiest text-black bg-purple-400 font-bold text-lg px-3 py-2 rounded w-fit">
                <p className="translate-y-1">ZOANADS</p>
              </div>
            </div>

            <img src={rec} alt="rec" className="relative z-10 w-2 h-2" />

            <div className="flex flex-row items-center justify-center gap-2">
              <button className="font-luckiest bg-black text-white text-[16px] font-extrabold px-4 py-2 pt-1 rounded-xl shadow-md relative group hover:bg-green-500 hover:duration-500">
                <span
                  className="absolute top-2 left-1 bg-white -rotate-45 transition group-hover:-translate-y-[1px]"
                  style={{
                    width: "10px",
                    height: "6px",
                    borderRadius: "50%",
                  }}
                ></span>
                <p className="translate-y-1 uppercase group-hover:text-black">
                  Connect Wallet
                </p>
              </button>
              <button className="font-luckiest bg-purple-300 text-black text-[16px] font-extrabold px-4 py-2 pt-1 rounded-xl shadow-md relative group hover:bg-purple-400 hover:duration-500">
                <span
                  style={{
                    width: "10px",
                    height: "6px",
                    borderRadius: "50%",
                  }}
                  className="absolute top-2 left-1 -rotate-45 bg-white rounded-full transition group-hover:-translate-y-[1px]"
                />
                <p className="translate-y-1 uppercase">Sign Up</p>
              </button>
            </div>

            <img src={rec} alt="rec" className="relative z-10 w-2 h-2" />

            <div className="relative z-10 flex gap-3 sm:gap-4 justify-center items-center">
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

            <img src={rec} alt="rec" className="relative z-10 w-2 h-2" />

            <div className="relative z-10 flex flex-col">
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-black font-ubuntu text-sm sm:text-base ">
                <span>BRAND KITS</span>
                <span>TERMS</span>
                <span>PRIVACY</span>
                <span>BLOGS</span>
              </div>

              <div className="mt-2 font-ubuntu text-black/50 text-xs sm:text-sm text-center px-4">
                Copyright © 2024. NIKA STUDIO. All rights reserved.
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
