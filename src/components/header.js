import React from 'react';
import './horario.css';

function Horario() {
    return (
        <div className="horario-container">
            <div className="horario-header">
                <h3>Hoy, 21 de sep 2024</h3>
                <i className="fa-solid fa-calendar-days"></i>
            </div>

            <div className="horario-item presencial">
                <p className="badge presencial">Presencial</p>
                <p className="curso-titulo">Curso: Programación de Interfaces y Dispositivos Periféricos</p>
                <p className="horario-hora">14:30 - 16:45</p>
                <div className="horario-lugar">
                    <a href="#" className="lugar-link">
                        <i className="fa-solid fa-location-dot"></i> Jr. Hernán Velarde 289
                    </a>
                    <span className="aula">B0307</span>
                </div>
            </div>

            <div className="horario-item virtual">
                <p className="badge virtual">Virtual en vivo</p>
                <p className="curso-titulo">Curso: Desarrollo de Software II</p>
                <p className="horario-hora">14:30 - 16:45</p>
                <a href="#" className="horario-zoom">
                    <i className="fa-solid fa-video"></i> Unirme a zoom
                </a>
            </div>

            <div className="horario-item virtual-247">
                <p className="badge virtual-247">Virtual 24/7</p>
                <p className="curso-titulo">Tienes 2 cursos</p>
                <p className="horario-hora">Disponible 24 horas durante el ciclo</p>
                <a href="#" className="horario-utpclass">
                    <i className="fa-solid fa-laptop"></i> UTP+class
                </a>
            </div>
        </div>
    );
}

export default Horario;
