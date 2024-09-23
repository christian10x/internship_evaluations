import React from 'react';
import './horario.css';

function Horario() {
    return (
        <div className="horario-container">
            <div className="horario-header">
                <span>Hoy, 21 de sep 2024</span>
                <i className="fa fa-calendar-days"></i>
            </div>
            <div className="horario-item presencial">
                <span className="badge presencial">Presencial</span>
                <span className="curso-titulo">Curso: Programación de Interfaces y Dispositivos Periféricos</span>
                <span className="horario-hora">14:30 - 16:45</span>
                <div className="horario-lugar">
                    <a href="#" className="lugar-link">Jr. Hernán Velarde 289</a>
                    <span className="aula">B0307</span>
                </div>
            </div>

            <div className="horario-item virtual_vivo">
                <span className="badge virtual_vivo">Virtual en vivo</span>
                <span className="curso-titulo">Curso: Desarrollo de Software II</span>
                <span className="horario-hora">14:30 - 16:45</span>
                <a href="#" className="horario-zoom">Unirme a zoom</a>
            </div>

            <div className="horario-item virtual_247">
                <span className="badge virtual_247">Virtual 24/7</span>
                <span className="curso-titulo">Tienes 2 cursos</span>
                <span className="horario-hora">Disponible 24 horas durante el ciclo</span>
                <a href="#" className="horario-utpclass">UTP+class</a>
            </div>
        </div>
    );
}

export default Horario;
