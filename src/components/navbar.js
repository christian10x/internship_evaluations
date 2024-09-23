import React from "react";
import "./navbar.css";

function Navbar() {
    return (
        <menu class="navbar">
            <div class="navbar-item">
                <i class="fa-solid fa-bars"></i>
            </div>

            <a href="index.html" className="navbar-item home active">
                <i class="fa-solid fa-house"></i>
                <p className="active">Inicio</p>
            </a>

            <a href="calendario.html" class="navbar-item">
                <i class="fa-solid fa-calendar"></i>
                <p>Calendario</p>
            </a>

            <a href="cursos.html" class="navbar-item">
                <i class="fa-solid fa-book"></i>
                <p>Cursos</p>
            </a>

            <a href="pagos.html" class="navbar-item">
                <i class="fa-solid fa-house"></i>
                <p>Pagos</p>
            </a>
        </menu>

    );
}

export default Navbar;
