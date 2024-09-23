// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css';
import { Link } from 'react-router-dom';
import CourseModal from '../components/courseModal.component';
import SaveModal from '../../utp/components/saveModal.component';
import './Header.css';
import './Profile.css';

function App() {
    return (
        <div className="container">
            <Header />
            <main>
                <div className="left-panel">
                    <Profile />
                    <EnrolledCourses />
                </div>
                <div className="right-panel">
                    <Courses />
                </div>
            </main>
        </div>
    );
}

const Header = () => (
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
);

const Profile = () => {
    const [studentInfo, setStudentInfo] = useState(null);

    useEffect(() => {
        const fetchStudentInfo = async () => {
            try {
                const response = await axios.get('https://my-json-server.typicode.com/VictorHerrera10/VictorHerrera10-db/db');
                setStudentInfo(response.data.student);
            } catch (error) {
                console.error('Error fetching student info:', error);
            }
        };

        fetchStudentInfo();
    }, []);

    if (!studentInfo) {
        return <div>Loading...</div>;
    }

    return (
        <section className="profile">
            <h2>MATRICULA ESTUDIANTE</h2>
            <img src={studentInfo.photo} alt="Perfil" />
            <div className="profile-info">
                <p><strong>Nombres:</strong> {studentInfo.name}</p>
                <p><strong>Carrera:</strong> {studentInfo.career}</p>
                <p><strong>Ciclo:</strong> {studentInfo.cycle}</p>
                <p><strong>Código alumno:</strong> U20201E188</p>
                <p className="credits-title"><strong>Número de créditos:</strong></p>
                <p className="credit-item">Obligatorios <span className="credit-box">{studentInfo.credits.obligatory}</span></p>
                <p className="credit-item">Electivos <span className="credit-box2">{studentInfo.credits.electives}</span></p>
            </div>
        </section>
    );
};

// Modificar el componente EnrolledCourses para incluir la funcionalidad de eliminar curso y mostrar el conteo
const EnrolledCourses = () => {
    const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);

    const studentInfo = {
        name: 'Víctor Raúl Herrera Castillo',
        career: 'Ingeniería de Sistemas',
        cycle: '2024-02',
        studentCode: 'U20201E188',
        mandatoryCredits: 124,
        electiveCredits: 12,
    };

    const enrolledCourses = [
        { name: 'Física 2 - SX569', credits: '4 créditos' },
        { name: 'Cálculo 2 - SX569', credits: '3 créditos' },
        { name: 'Fotografía - TF968', credits: '3 créditos' },
    ];

    const handleSaveClick = () => {
        setIsSaveModalOpen(true);
    };

    return (
        <section className="enrolled-courses">
            <h2>CURSOS MATRICULADOS</h2>
            <p><strong>Número de créditos matriculados:</strong></p>
            <p className="credit-item">Obligatorios <span className="credit-box">{studentInfo.mandatoryCredits}</span></p>
            <p className="credit-item">Electivos <span className="credit-box">{studentInfo.electiveCredits}</span></p>
            <div className="course-list">
                {enrolledCourses.map((course, index) => (
                    <CourseCard
                        key={index}
                        name={course.name}
                        credits={course.credits}
                        mode="Presencial"
                        status="inscrito"
                    />
                ))}
            </div>
            <div className="buttons">
                <Link to="/schedule">
                    <button className="btn">Ver Horario</button>
                </Link>
                <button className="btn" onClick={handleSaveClick}>Guardar</button>
            </div>
            <SaveModal
                isOpen={isSaveModalOpen}
                onClose={() => setIsSaveModalOpen(false)}
                studentInfo={studentInfo}
                enrolledCourses={enrolledCourses}
            />
        </section>
    );
};


const Courses = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mandatoryCourses, setMandatoryCourses] = useState([]);
    const [electiveCourses, setElectiveCourses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://my-json-server.typicode.com/VictorHerrera10/VictorHerrera10-db/db');
                const courses = response.data.courses;
                setMandatoryCourses(courses.filter(course => course.type === 'Obligatorio'));
                setElectiveCourses(courses.filter(course => course.type === 'Electivo'));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    const handleCourseClick = (course) => {
        setSelectedCourse(course);
        setIsModalOpen(true);
    };

    const handleSelectSection = (section) => {
        console.log(`Se seleccionó la ${section} para el curso ${selectedCourse}`);
        setIsModalOpen(false);
        setSelectedCourse(null);
    };

    return (
        <section className="courses">
            <div className="course-card mandatory-courses">
                <h2>CURSOS OBLIGATORIOS</h2>
                <p>Estos cursos forman parte de tu plan de estudios y son necesarios para cumplir con los requisitos de
                    tu carrera.</p>
                <ul className="additional-info">
                    <li>Debes matricularte en todos los cursos obligatorios indicados para este ciclo.</li>
                    <li>Si no seleccionas uno de estos cursos, el sistema no te permitirá avanzar en el proceso de
                        matrícula.
                    </li>
                    <li>Recuerda revisar los horarios y seleccionar las secciones disponibles para evitar cruces de
                        horarios.
                    </li>
                </ul>
            </div>
            <div className="course-list">
                {mandatoryCourses.map((course) => (
                    <CourseCard
                        key={course.id}
                        name={course.name}
                        credits={course.credits}
                        status={course.status}
                        onClick={() => handleCourseClick(course)}
                    />
                ))}
            </div>

            <div className="mt-3 course-card elective-courses">
                <h2>CURSOS ELECTIVOS</h2>
                <p>Los cursos electivos te permiten explorar temas adicionales y complementar tu formación
                    académica.</p>
                <ul className="additional-info">
                    <li>Puedes elegir libremente entre las opciones disponibles, según tu interés y los créditos
                        disponibles en tu plan de estudios.
                    </li>
                    <li>Tienes la opción de seleccionar más de un curso electivo, pero asegúrate de que no haya
                        conflictos de horario con tus cursos obligatorios.
                    </li>
                </ul>
            </div>
            <div className="course-list">
                {electiveCourses.map((course) => (
                    <CourseCard
                        key={course.id}
                        name={course.name}
                        credits={course.credits}
                        status={course.status}
                        onClick={() => handleCourseClick(course)}
                    />
                ))}
            </div>

            <CourseModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                course={selectedCourse}
                sections={selectedCourse ? selectedCourse.sections : []}
                onSelectSection={handleSelectSection}
            />
        </section>
    );
};

const CourseCard = ({name, credits, status, onClick}) => (
    <div style={{display: 'flex', cursor: 'pointer', color: 'black', flexDirection: 'column'}}
         className={`course-card ${status}`} onClick={onClick}>
        <h5 className='fw-bold'>{name}</h5>
        <span>4 créditos</span>
        <span>4 secciones disponibles</span>
        <span>Presencial / Virtual</span>
        <span className={`status ${status}`}>{status}</span>
    </div>
);

export default App;
