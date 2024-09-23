import React from "react";
import "./navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <menu class="navbar">
            <div class="navbar-item">
                <i class="fa-solid fa-bars"></i>
            </div>

            <a href="index.html" className="navbar-item home active">
                <i class="fa-solid fa-house"></i>
                <Link src="/src/pages/home.js" className="active">Inicio</Link>
            </a>

            <a href="calendario.html" class="navbar-item">
                <i class="fa-solid fa-calendar"></i>
                <Link to="/calendar"z>Calendario</Link>
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
