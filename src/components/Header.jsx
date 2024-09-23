import React from "react";
import logo_utp from "../assets/logo_utp.png";

//Icons
import { RiSearch2Line } from "react-icons/ri";

export const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-4 p-5 shadow-sm">
      <img src={logo_utp} alt="Logo de la UTP" />
      <form className="w-full md:w-auto">
        <div className="relative">
          <RiSearch2Line className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type="text"
            className="bg-gray-200 outline-none py-2 pl-8 pr-4 rounded-xl w-full md:w-auto"
            placeholder="Buscar"
          />
        </div>
      </form>
    </header>
  );
};
