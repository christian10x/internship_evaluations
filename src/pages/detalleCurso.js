// src/pages/CourseDetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'; // Importar el ArcElement
import 'chart.js/auto';
import '../css/coursepage.css';

// Registrar los elementos
Chart.register(ArcElement);

const courseDetails = {
  1: {
    title: 'Gestión de proyectos',
    evaluations: {
      TareaAcadémica: 20,
      AvanceProyecto1: '-',
      AvanceProyecto2: '-',
      ParticipaciónClase: '-',
      ProyectoFinal: '-',
    },
    attendance: 85, // Porcentaje de asistencia
  },
  2: {
    title: 'Inteligencia de Negocios',
    evaluations: {
      TareaAcadémica: 18,
      AvanceProyecto1: 16,
      AvanceProyecto2: '-',
      ParticipaciónClase: 20,
      ProyectoFinal: '-',
    },
    attendance: 90, // Porcentaje de asistencia
  },
  // Agrega más detalles de cursos aquí...
};

const CourseDetailsPage = () => {
  const { id } = useParams();
  const course = courseDetails[id];

  // Datos para el gráfico de tarta
  const attendanceData = {
    labels: ['Asistencias', 'Faltas'],
    datasets: [
      {
        label: '% Asistencias',
        data: [course.attendance, 100 - course.attendance],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  return (
    <div>
      <h1>{course.title}</h1>
      <div className="evaluations">
        <h2>Evaluaciones:</h2>
        <ul>
          <li>Tarea Académica: {course.evaluations.TareaAcadémica}</li>
          <li>Avance Proyecto 1: {course.evaluations.AvanceProyecto1}</li>
          <li>Avance Proyecto 2: {course.evaluations.AvanceProyecto2}</li>
          <li>Participación en Clase: {course.evaluations.ParticipaciónClase}</li>
          <li>Proyecto Final: {course.evaluations.ProyectoFinal}</li>
        </ul>
      </div>
      <div className="attendance">
        <h2>Asistencia:</h2>
        <Pie data={attendanceData} />
      </div>
    </div>
  );
};

export default CourseDetailsPage;
