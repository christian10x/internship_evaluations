import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SchedulePage = () => {
    const navigate = useNavigate();
    return (
        <>
            <header className="header">
                <div className="header-logo">
                    <img src="https://res.cloudinary.com/djia8bsvr/image/upload/v1727060006/crwtyws8oaford8wwqd7.png" alt="UTP Logo" />
                    <span className="header-university">Universidad Tecnológica del Perú</span>
                </div>
                <div className="header-info">
                    <h1 className="header-title">Matrícula en Línea UTP - 2024 II</h1>
                    <div className="header-student">Estudiante: Víctor Herrera</div>
                </div>
            </header>
            <div className='container mt-2'>
                <h4 className='text-center fw-bold'>Horario de clases</h4>
                <div style={{ background: 'black', padding: '5px' }}>
                    <table className='table text-center bg-white'>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>Lunes</td>
                                <td>Martes</td>
                                <td>Miercoles</td>
                                <td>Jueves</td>
                                <td>Viernes</td>
                                <td>Sabado</td>
                            </tr>
                            <tr>
                                <td>7:00</td>
                                <td className='bg-warning'>WSX321 - SH02</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>8:00</td>
                                <td className='bg-warning'>WSX321 - SH02</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>9:00</td>
                                <td ></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className='bg-warning'>WSX321 - SH02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>10:00</td>
                                <td ></td>
                                <td></td>
                                <td className='bg-warning'>WSX321 - SH02</td>
                                <td></td>
                                <td className='bg-danger'>WSX321 - SH02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>11:00</td>
                                <td></td>
                                <td></td>
                                <td className='bg-warning'>WSX321 - SH02</td>
                                <td></td>
                                <td className='bg-warning'>WSX321 - SH02</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>12:00</td>
                                <td ></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>13:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>14:00</td>
                                <td></td>
                                <td className='bg-warning'>WSX321 - SH02</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>15:00</td>
                                <td ></td>
                                <td className='bg-warning'>WSX321 - SH02</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>16:00</td>
                                <td ></td>
                                <td className='bg-warning'>WSX321 - SH02</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>17:00</td>
                                <td ></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>16:00</td>
                                <td ></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>17:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>18:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className='bg-warning'>WSX321 - SH02</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>19:00</td>
                                <td ></td>
                                <td></td>
                                <td></td>
                                <td className='bg-warning'>WSX321 - SH02</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>20:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>21:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>22:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>23:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='text-end mt-4'>
                    <button className='btn bt-success' onClick={() => navigate('/')}>Guardar</button>
                </div>
            </div>
        </>
    );
};

export default SchedulePage;
