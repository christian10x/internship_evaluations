import { useState } from "react";
import { Link } from "react-router-dom";
import foto_perfil from "../assets/foto_perfil.svg";
//Icons
import {
  RiHome3Line,
  RiCalendar2Line,
  RiBook2Line,
  RiMoneyDollarBoxLine,
  RiMenuFill,
  RiCloseLargeLine,
} from "react-icons/ri";

export const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div
        className={`bg-rose-600 overflow-y-auto h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all z-50
        duration-300
        ${showMenu ? "left-0" : "-left-full"}`}
      >
        {/* Profile */}
        <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh]">
          <img
            src={foto_perfil}
            alt="foto de perfil del usuario"
            className="w-20 h-20 object-cover rounded-full ring-2 ring-gray-300"
          />
          <h1 className="text-2xl text-white text-center font-bold">
            Ricardo Estrada
          </h1>
          <h2 className="text-center text-white font-semibold">Carrera:</h2>
          <p className="bg-rose-400 px-3 rounded-full text-white text-center font-medium">
            Ingeniería de Sistemas
          </p>
        </div>

        {/*Navbar*/}
        <div className="bg-rose-400 px-5 py-8 rounded-tr-[80px] h-[70vh] overflow-y-auto flex flex-col justify-between gap-8">
          <nav className="flex flex-col gap-3">
            <Link
              to="/"
              className="flex items-center gap-4 text-white py-4 px-4 rounded-xl hover:bg-rose-600/50 transition-colors"
            >
              <RiHome3Line /> Inicio
            </Link>
            <Link
              to="/Horario"
              className="flex items-center gap-4 text-white py-4 px-4 rounded-xl hover:bg-rose-600/50 transition-colors"
            >
              <RiCalendar2Line /> Horarios
            </Link>
            <Link
              to="/Cursos"
              className="flex items-center gap-4 text-white py-4 px-4 rounded-xl hover:bg-rose-600/50 transition-colors"
            >
              <RiBook2Line /> Cursos
            </Link>
            <Link
              to="/Pagos"
              className="flex items-center gap-4 text-white py-4 px-4 rounded-xl hover:bg-rose-600/50 transition-colors"
            >
              <RiMoneyDollarBoxLine /> Pagos
            </Link>
          </nav>
          <div className="bg-rose-600/50 text-white font-semibold p-4 rounded-xl">
            <p className="text-slate-200">Necesitas ayuda?</p>
            <Link href="#" className="hover:text-rose-200">
              Contáctanos
            </Link>
          </div>
        </div>
      </div>

      {/* Button mobile */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden fixed right-4 bottom-4 text-2xl bg-rose-600 p-2.5 rounded-full text-white z-50"
      >
        {showMenu ? <RiCloseLargeLine /> : <RiMenuFill />}
      </button>
    </>
  );
};
