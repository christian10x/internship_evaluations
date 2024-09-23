// src/components/CursosCiclo.js
import React from "react";
import './cursosCiclo.css';

function CursosCiclo() {
    return (
        <div className="cursos-ciclo">
            <h3>Este ciclo llevas 7 cursos</h3>
            <div className="curso">
                <p>Desarrollo de Software II</p>
                <span>Virtual en vivo</span>
            </div>
            <div className="curso">
                <p>Teoría de Lenguajes de Programación y Métodos de Traducción II</p>
                <span>Virtual en vivo</span>
            </div>
            <div className="curso">
                <p>Diseño y Desarrollo de Juegos Interactivos I</p>
                <span>Presencial</span>
            </div>
        </div>
    );
}

export default CursosCiclo;
