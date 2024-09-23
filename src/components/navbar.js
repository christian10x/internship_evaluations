import React from "react";
import "./navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <menu class="navbar">
            <div class="navbar-item">
                <i class="fa-solid fa-bars"></i>
            </div>

            <Link to="/home" className="navbar-item home active">
                <i class="fa-solid fa-house"></i>
                <p className="active">Inicio</p>
            </Link>

            <Link to="/calendar" class="navbar-item">
                <i class="fa-solid fa-calendar"></i>
                <p>Calendario</p>
            </Link>

            <Link to="/courses" class="navbar-item">
                <i class="fa-solid fa-book"></i>
                <p>Cursos</p>
            </Link>

            <a href="pagos.html" class="navbar-item">
                <i class="fa-solid fa-house"></i>
                <p>Pagos</p>
            </a>
        </menu>

    );
}

export default Navbar;
