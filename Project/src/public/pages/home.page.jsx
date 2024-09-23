import React, { useState } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import CourseModal from '../components/courseModal.component';
import SaveModal from '../../utp/components/saveModal.component';
import './Header.css';
import './Profile.css';

function App() {
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    const addCourse = (course) => {
        setEnrolledCourses([...enrolledCourses, course]);
    };

    const removeCourse = (index) => {
        setEnrolledCourses(enrolledCourses.filter((_, i) => i !== index));
    };

    return (
        <div className="container">
            <Header />
            <main>
                <div className="left-panel">
                    <Profile />
                    <EnrolledCourses enrolledCourses={enrolledCourses} removeCourse={removeCourse} />
                </div>
                <div className="right-panel">
                    <Courses addCourse={addCourse} />
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

const Profile = () => (
    <section className="profile">
        <h2>MATRICULA ESTUDIANTE</h2>
        <img src="https://res.cloudinary.com/djia8bsvr/image/upload/v1726960494/lgo85j9pcoqysduke6im.jpg" alt="Perfil" />
        <div className="profile-info">
            <p><strong>Nombres:</strong> Víctor Raúl Herrera Castillo</p>
            <p><strong>Carrera:</strong> Ingeniería de Sistemas</p>
            <p><strong>Ciclo:</strong> 2024-02</p>
            <p><strong>Código alumno:</strong> U20201E188</p>
            <p className="credits-title"><strong>Número de créditos:</strong></p>
            <p className="credit-item">Obligatorios <span className="credit-box">124</span></p>
            <p className="credit-item">Electivos    <span className="credit-box2">12</span></p>
        </div>
    </section>
);

const EnrolledCourses = ({ enrolledCourses, removeCourse }) => {
    const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);

    const studentInfo = {
        name: 'Víctor Raúl Herrera Castillo',
        career: 'Ingeniería de Sistemas',
        cycle: '2024-02',
        studentCode: 'U20201E188',
        mandatoryCredits: 124,
        electiveCredits: 12,
    };

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
                    <div key={index} className="enrolled-course">
                        <span>{course.name} - {course.section} ({course.isMandatory ? 'Obligatorio' : 'Electivo'})</span>
                        <button onClick={() => removeCourse(index)}>Eliminar</button>
                    </div>
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

const Courses = ({ addCourse }) => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const sectionsForCourses = {
        'Física 2': ['Sección 1', 'Sección 2', 'Sección 3'],
        'Cálculo 2': ['Sección 1', 'Sección 4'],
        'Fotografía': ['Sección 2', 'Sección 3', 'Sección 5'],
    };

    const handleCourseClick = (course) => {
        setSelectedCourse(course);
        setIsModalOpen(true);
    };

    const handleSelectSection = (section) => {
        addCourse({
            name: selectedCourse,
            section: section,
            isMandatory: selectedCourse !== 'Fotografía'
        });
        setIsModalOpen(false);
        setSelectedCourse(null);
    };

    return (
        <section className="courses">
            <div className="course-card mandatory-courses">
                <h2>CURSOS OBLIGATORIOS</h2>
                <p>Estos cursos forman parte de tu plan de estudios y son necesarios para cumplir con los requisitos de tu carrera.</p>
                <ul className="additional-info">
                    <li>Debes matricularte en todos los cursos obligatorios indicados para este ciclo.</li>
                    <li>Si no seleccionas uno de estos cursos, el sistema no te permitirá avanzar en el proceso de matrícula.</li>
                    <li>Recuerda revisar los horarios y seleccionar las secciones disponibles para evitar cruces de horarios.</li>
                </ul>
            </div>
            <div className="course-list">
                <CourseCard
                    name="Física 2 - SX569"
                    credits="4 créditos"
                    status="pendiente"
                    onClick={() => handleCourseClick('Física 2')}
                />
                <CourseCard
                    name="Cálculo 2 - SX569"
                    credits="3 créditos"
                    status="inscrito"
                    onClick={() => handleCourseClick('Cálculo 2')}
                />
                <CourseCard
                    name="Fotografía - TF968"
                    credits="3 créditos"
                    status="inscrito"
                    onClick={() => handleCourseClick('Fotografía')}
                />
            </div>

            <div className="course-card elective-courses">
                <h2>CURSOS ELECTIVOS</h2>
                <p>Estos cursos son opcionales y puedes elegirlos según tus intereses y necesidades.</p>
                <ul className="additional-info">
                    <li>Puedes seleccionar los cursos electivos que desees, siempre y cuando cumplas con los requisitos previos.</li>
                    <li>Recuerda revisar los horarios y seleccionar las secciones disponibles para evitar cruces de horarios.</li>
                </ul>
            </div>
            <div className="course-list">
                <CourseCard
                    name="Fotografía - TF968"
                    credits="3 créditos"
                    status="disponible"
                    onClick={() => handleCourseClick('Fotografía')}
                />
            </div>

            <CourseModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                course={selectedCourse}
                sections={sectionsForCourses[selectedCourse] || []}
                onSelectSection={handleSelectSection}
            />
        </section>
    );
};

const CourseCard = ({ name, credits, status, onClick }) => (
    <div style={{ display: 'flex', cursor: 'pointer', color: 'black', flexDirection: 'column' }} className={`course-card ${status}`} onClick={onClick}>
        <h5 className='fw-bold'>{name}</h5>
        <span>{credits}</span>
        <span>4 secciones disponibles</span>
        <span>Presencial / Virtual</span>
        <span className={`status ${status}`}>{status}</span>
        <button onClick={onClick}>Check</button>
    </div>
);

export default App;