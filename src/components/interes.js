import React from "react";
import './interes.css';

function Interes() {
    return (
        <div className="interes-container">
    <h3>Te puede interesar</h3>
    <div className="interes-item">
        <img src="/img/beneficios.png" alt="Beneficios" className="interes-icon"/>
        <div className="interes-texto">
            <p className="titulo">Beneficios</p>
            <p className="descripcion">Disfruta de promociones, descuentos y más en UTP</p>
        </div>
        <a href="#" className="interes-link">
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
    </div>

    <div className="interes-item">
        <img src="/img/biblioteca.png" alt="Biblioteca" className="interes-icon"/>
        <div className="interes-texto">
            <p className="titulo">Ingresa a biblioteca</p>
            <p className="descripcion">Encuentra recursos, libros y más</p>
        </div>
        <a href="#" className="interes-link">
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
    </div>

    <div class="interes-item">
        <img src="/img/bolsa-trabajo.png" alt="Bolsa de trabajo" className="interes-icon"/>
        <div className="interes-texto">
            <p className="titulo">Bolsa de trabajo</p>
            <p className="descripcion">Encuentra ofertas laborales exclusivas para ti</p>
        </div>
        <a href="#" className="interes-link">
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
    </div>

    <div className="interes-item">
        <img src="/img/empleabilidad.png" alt="Empleabilidad" className="interes-icon"/>
        <div className="interes-texto">
            <p className="titulo">Empleabilidad</p>
            <p className="descripcion">Conoce más sobre tu ruta laboral con UTP</p>
        </div>
        <a href="#" className="interes-link">
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
    </div>
</div>

    );
}

export default Interes;
