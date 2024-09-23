import React from 'react';
import './Modal.css'; // Asegúrate de tener los estilos del modal

const CourseModal = ({ isOpen, onClose, course, sections, onSelectSection }) => {
    if (!isOpen) return null;
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2 className='text-start'>Física 2</h2>
                <hr />
                <div style={{ display: 'flex', gap: '20px', fontSize: '0.9rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span>Código del curso</span>
                        <span style={{ background: 'black', color: 'white', padding: '3px 10px' }}>SX921</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span>Tipo</span>
                        <span style={{ background: 'black', color: 'white', padding: '3px 10px' }}>Obligatorio</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span>Total de créditos</span>
                        <span style={{ background: 'black', color: 'white', padding: '3px 10px' }}>5</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span>Modalidad</span>
                        <span style={{ background: 'black', color: 'white', padding: '3px 10px' }}>Presencial / Virtual</span>
                    </div>
                </div>
                <div className="mt-2 text-start">
                    <span className='fw-bold'>Cantidad de curso disponibles</span>
                    <div>
                        <div>
                            <span>Presencales: </span>
                            <span>9</span>
                        </div>
                        <div>
                            <span>Virtuales: </span>
                            <span>3</span>
                        </div>
                    </div>
                </div>
                <h6 className="fw-bold">
                    <br />
                    Lista de secciones disponibles
                    <table className='table mt-2'>
                        <tbody>
                            <tr style={{ background: 'gray' }}>
                                <td>Presencial</td>
                                <td>WS71</td>
                                <td>Angela Daniel Velazques Trujillo</td>
                                <td>Miercoles</td>
                                <td>17:00 - 19:00</td>
                                <td>check</td>
                            </tr>
                            <tr>
                                <td>Presencial</td>
                                <td>WS71</td>
                                <td>Angela Daniel Velazques Trujillo</td>
                                <td>Miercoles</td>
                                <td>17:00 - 19:00</td>
                                <td>check</td>
                            </tr>
                            <tr style={{ background: 'gray' }}>
                                <td>Presencial</td>
                                <td>WS71</td>
                                <td>Angela Daniel Velazques Trujillo</td>
                                <td>Miercoles</td>
                                <td>17:00 - 19:00</td>
                                <td>check</td>
                            </tr>
                            <tr>
                                <td>Presencial</td>
                                <td>WS71</td>
                                <td>Angela Daniel Velazques Trujillo</td>
                                <td>Miercoles</td>
                                <td>17:00 - 19:00</td>
                                <td>check</td>
                            </tr>
                        </tbody>
                    </table>
                </h6>
                <button className="btn" onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default CourseModal;
