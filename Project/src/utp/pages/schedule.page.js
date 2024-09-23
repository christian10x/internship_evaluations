import React from 'react';
import { Link } from 'react-router-dom';

const SchedulePage = () => {
    return (
        <div>
            <h2>Horario del Estudiante</h2>
            {/* Aquí puedes agregar la estructura de tu horario */}
            <p>Este es el horario de tus cursos matriculados.</p>

            {/* Botón para regresar a la página de cursos matriculados */}
            <Link to="/">
                <button className="btn">Regresar a Cursos Matriculados</button>
            </Link>
        </div>
    );
};

export default SchedulePage;
