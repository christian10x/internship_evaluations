import React from 'react';
import './Modal.css'; // Asegúrate de tener los estilos del modal

const CourseModal = ({ isOpen, onClose, course, sections, onSelectSection }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Seleccionar Sección para {course}</h2>
                <ul>
                    {sections.map((section, index) => (
                        <li key={index}>
                            <button className="btn" onClick={() => onSelectSection(section)}>
                                {section}
                            </button>
                        </li>
                    ))}
                </ul>
                <button className="btn" onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default CourseModal;
