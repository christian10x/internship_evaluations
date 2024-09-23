// src/pages/CoursesPage.js
import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'; // Importamos el ArcElement
import 'chart.js/auto'; // Importar para asegurar los componentes de gráficos se carguen correctamente
import '../css/coursepage.css';

// Registrar el elemento gráfico Arc
Chart.register(ArcElement);

const courses = [
  { id: 1, title: 'Gestión de proyectos', code: '1I33N', status: 'En curso', docente: 'Salas Ugarte, Jimena', modalidad: 'Virtual 24/7', seccion: 14613, creditos: 3, evaluaciones: {TareaAcadémica: 20, AvanceProyecto1: '-', AvanceProyecto2: '-', ParticipaciónClase: '-', ProyectoFinal: '-'}, attendance: 85 },
  { id: 2, title: 'Inteligencia de Negocios', code: '1I62N', status: 'En curso', docente: 'Doe, John', modalidad: 'Virtual en vivo', seccion: 14614, creditos: 3, evaluaciones: {TareaAcadémica: 18, AvanceProyecto1: 16, AvanceProyecto2: '-', ParticipaciónClase: 20, ProyectoFinal: '-'}, attendance: 90 },
  { id: 3, title: 'Programación de Interfaces y Dispositivos Periféricos', code: '1S08F', status: 'En curso', docente: 'Smith, Jane', modalidad: 'Presencial', seccion: 14615, creditos: 3, evaluaciones: {TareaAcadémica: '-', AvanceProyecto1: '-', AvanceProyecto2: '-', ParticipaciónClase: '-', ProyectoFinal: '-'}, attendance: 75 },
  { id: 4, title: 'Ética Profesional', code: '1N12I', status: 'En curso', docente: 'Martínez, Pablo', modalidad: 'Virtual 24/7', seccion: 14616, creditos: 3, evaluaciones: {TareaAcadémica: '-', AvanceProyecto1: '-', AvanceProyecto2: '-', ParticipaciónClase: '-', ProyectoFinal: '-'}, attendance: 92 },
];

const CoursesPage = () => {
  const [expandedCourse, setExpandedCourse] = useState(null); // Estado para el toggle
  const [selectedCourse, setSelectedCourse] = useState(null); // Estado para el gráfico
  const [averageAttendance, setAverageAttendance] = useState(0); // Estado para la asistencia promedio

  // Calcular el promedio de asistencia al cargar la página
  useEffect(() => {
    const totalAttendance = courses.reduce((acc, course) => acc + course.attendance, 0);
    const average = totalAttendance / courses.length;
    setAverageAttendance(average); // Establecer el promedio de asistencia
  }, []);

  const toggleCourse = (id) => {
    if (expandedCourse === id) {
      setExpandedCourse(null); // Colapsar si ya está expandido
      setSelectedCourse(null);  // Limpiar gráfico de torta
    } else {
      setExpandedCourse(id); // Expandir curso
      setSelectedCourse(courses.find((course) => course.id === id)); // Actualizar el curso para el gráfico
    }
  };

  // Datos para el gráfico de torta
  const attendanceData = selectedCourse
    ? {
        labels: ['Asistencias', 'Faltas'],
        datasets: [
          {
            label: '% Asistencias',
            data: [selectedCourse.attendance, 100 - selectedCourse.attendance],
            backgroundColor: ['#36A2EB', '#FF6384'],
            hoverBackgroundColor: ['#36A2EB', '#FF6384'],
          },
        ],
      }
    : {
        labels: ['Asistencias', 'Faltas'],
        datasets: [
          {
            label: '% Asistencias promedio',
            data: [averageAttendance, 100 - averageAttendance],
            backgroundColor: ['#36A2EB', '#FF6384'],
            hoverBackgroundColor: ['#36A2EB', '#FF6384'],
          },
        ],
      };

  return (
    <div className="container">
      <h1>Mis Cursos</h1>
      <div className="courses-layout">
        {/* Sección izquierda para detalles del curso */}
        <div className="courses-details">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <h2 onClick={() => toggleCourse(course.id)} style={{ cursor: 'pointer' }}>
                {course.title} ({course.code})
                {expandedCourse === course.id ? ' ▲' : ' ▼'}
              </h2>
              <p>{course.status}</p>
              {expandedCourse === course.id && (
                <div className="course-details">
                  <p><strong>Docente:</strong> {course.docente}</p>
                  <p><strong>Modalidad:</strong> {course.modalidad}</p>
                  <p><strong>Sección:</strong> {course.seccion}</p>
                  <p><strong>Créditos:</strong> {course.creditos}</p>
                  <h3>Evaluaciones</h3>
                  <ul>
                    <li>Tarea Académica: {course.evaluaciones.TareaAcadémica}</li>
                    <li>Avance Proyecto 1: {course.evaluaciones.AvanceProyecto1}</li>
                    <li>Avance Proyecto 2: {course.evaluaciones.AvanceProyecto2}</li>
                    <li>Participación en Clase: {course.evaluaciones.ParticipaciónClase}</li>
                    <li>Proyecto Final: {course.evaluaciones.ProyectoFinal}</li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Sección derecha para el gráfico de torta */}
        <div className="attendance-chart">
          <div>
            <h2>{selectedCourse ? `Asistencia en ${selectedCourse.title}` : 'Asistencia promedio'}</h2>
            <Pie data={attendanceData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
