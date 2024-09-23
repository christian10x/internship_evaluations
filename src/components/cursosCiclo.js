import React from "react";
import './cursosCiclo.css';

function CursosCiclo() {
    const cursos = [
        { id: 1, tipo: "virtual", nombre: "Desarrollo de Software II", label: "Virtual en vivo" },
        { id: 2, tipo: "virtual", nombre: "Teoría de Lenguajes de Programación y Métodos de Traducción II", label: "Virtual en vivo" },
        { id: 3, tipo: "presencial", nombre: "Diseño y Desarrollo de Juegos Interactivos I", label: "Presencial" },
        { id: 4, tipo: "virtual", nombre: "Ingeniería de Software I", label: "Virtual en vivo" },
        { id: 5, tipo: "virtual", nombre: "Matemáticas Discretas", label: "Virtual en vivo" },
        { id: 6, tipo: "presencial", nombre: "Diseño Gráfico", label: "Presencial" }
    ];

    return (
        <div className="cursos-ciclo-container">
            <div className="header-cursos">
                <h3>Este ciclo llevas 7 cursos</h3>
            </div>

            <div className="cursos-ciclo-scroll">
                {cursos.map((curso) => (
                    <a href="#" key={curso.id} className={`curso ${curso.tipo}`}>
                        <i className={`fa-solid fa-${curso.tipo === 'virtual' ? 'video' : 'chalkboard-user'}`}></i>
                        <p>{curso.nombre}</p>
                        <p className={`label ${curso.tipo}`}>{curso.label}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default CursosCiclo;
