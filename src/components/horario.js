// src/components/Horario.js
import React from "react";
import './horario.css';

function Horario() {
    return (
        <div className="horario">
            <h3>Hoy, 21 de sep 2024</h3>
            <div className="event">
                <span className="type presencial">Presencial</span>
                <p>Curso: Programación de Interfaces y Dispositivos Periféricos</p>
                <span>14:30 - 16:45</span>
            </div>
            <div className="event">
                <span className="type virtual">Virtual en vivo</span>
                <p>Curso: Desarrollo de Software II</p>
                <span>14:30 - 16:45</span>
                <button>Unirme a Zoom</button>
            </div>
            <div className="event">
                <span className="type virtual24">Virtual 24/7</span>
                <p>Tienes 2 cursos disponibles 24 horas durante el ciclo</p>
            </div>
        </div>
    );
}

export default Horario;
