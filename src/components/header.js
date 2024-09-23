// src/components/Header.js
import React from "react";
import './header.css';

function Header() {
    return (
        <header className="header">
            <img src="/img/intranet_logo.png" alt="UTP+Intranet Logo" />

            <div className="user-info">
                <i class="fa-regular fa-bell text-3xl pr-[20px]"></i>
                <div className="estudiante">
                    <p>Hola, Morelia Paola</p>
                    <p>Estudiante</p>
                </div>
                
                <img src="/img/logo_perfil.png" alt="User Avatar" className="avatar" />
                <img src="/img/arrow_down.png" alt="Flecha abajo" className="flecha" />
            </div>
            
        </header>
    );
}

export default Header;
