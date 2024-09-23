// src/components/navbar.js
import React from "react";
import { Link, useLocation } from 'react-router-dom';  // Importar useLocation
import './navbar.css';

function Navbar() {
  const location = useLocation();  // Obtener la ruta actual

  return (
    <menu className="navbar">
      <div className="navbar-item">
        <i className="fa-solid fa-bars"></i>
      </div>

      <Link to="/" className={`navbar-item ${location.pathname === '/' ? 'active' : ''}`}>
        <i className="fa-solid fa-house"></i>
        <p className={location.pathname === '/' ? 'active' : ''}>Inicio</p>
        </Link>


      <Link to="/calendar" className={`navbar-item ${location.pathname === '/calendar' ? 'active' : ''}`}>
        <i className="fa-solid fa-calendar"></i>
        <p>Calendario</p>
      </Link>

      <Link to="/courses" className={`navbar-item ${location.pathname === '/courses' ? 'active' : ''}`}>
        <i className="fa-solid fa-book"></i>
        <p>Cursos</p>
      </Link>

      <Link to="/payments" className={`navbar-item ${location.pathname === '/payments' ? 'active' : ''}`}>
        <i className="fa-solid fa-wallet"></i>
        <p>Pagos</p>
      </Link>
    </menu>
  );
}

export default Navbar;
