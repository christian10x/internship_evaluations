import React, { useState } from "react";
import img_course from "../assets/img_course.png";

const cursos = [
  {
    id: 1,
    nombre: "Arquitectura Orientada al Servicio",
    codigo: "34941",
    tipo: "Presencial",
    progreso: 10,
    docente: "Profesor Juan",
    modalidad: "Presencial",
    horario: ["Sábado: 18:30 - 20:00", "Sábado: 20:15 - 21:45"],
    horasSemanales: 4.0,
    creditos: 3.0,
    nroVez: 1,
    seccion: "34941",
    calificaciones: [
      { nombre: "Avance de trabajo final 1 (ATF1)", nota: 18 },
      { nombre: "Avance de trabajo final 2 (ATF2)", nota: null },
      { nombre: "Avance de trabajo final 3 (ATF3)", nota: null },
      { nombre: "Trabajo final (TF)", nota: null },
    ],
    formula: "20%*[ATF1] + 20%*[ATF2] + 20%*[ATF3] + 40%*[TF]",
    asistencias: [
      { fecha: "2023-09-01", estado: "Presente" },
      { fecha: "2023-09-08", estado: "Ausente" },
      { fecha: "2023-09-15", estado: "Presente" },
    ],
  },
  {
    id: 2,
    nombre: "Inteligencia de Negocios",
    codigo: "34934",
    tipo: "Presencial",
    progreso: 29,
    docente: "Profesor Pedro",
    modalidad: "Presencial",
    horario: ["Sábado: 18:30 - 20:00", "Sábado: 20:15 - 21:45"],
    horasSemanales: 4.0,
    creditos: 3.0,
    nroVez: 1,
    seccion: "34941",
    calificaciones: [
      { nombre: "Avance de trabajo final 1 (ATF1)", nota: 18 },
      { nombre: "Avance de trabajo final 2 (ATF2)", nota: null },
      { nombre: "Avance de trabajo final 3 (ATF3)", nota: null },
      { nombre: "Trabajo final (TF)", nota: null },
    ],
    formula: "20%*[ATF1] + 20%*[ATF2] + 20%*[ATF3] + 40%*[TF]",
    asistencias: [
      { fecha: "2023-09-01", estado: "Presente" },
      { fecha: "2023-09-08", estado: "Ausente" },
      { fecha: "2023-09-15", estado: "Presente" },
    ],
  },
  {
    id: 3,
    nombre: "Calidad de Servicio de TI",
    codigo: "34934",
    tipo: "Presencial",
    progreso: 29,
    docente: "Profesor Miguel",
    modalidad: "Presencial",
    horario: ["Sábado: 18:30 - 20:00", "Sábado: 20:15 - 21:45"],
    horasSemanales: 4.0,
    creditos: 3.0,
    nroVez: 1,
    seccion: "34941",
    calificaciones: [
      { nombre: "Avance de trabajo final 1 (ATF1)", nota: 18 },
      { nombre: "Avance de trabajo final 2 (ATF2)", nota: null },
      { nombre: "Avance de trabajo final 3 (ATF3)", nota: null },
      { nombre: "Trabajo final (TF)", nota: null },
    ],
    formula: "20%*[ATF1] + 20%*[ATF2] + 20%*[ATF3] + 40%*[TF]",
    asistencias: [
      { fecha: "2023-09-01", estado: "Presente" },
      { fecha: "2023-09-08", estado: "Ausente" },
      { fecha: "2023-09-15", estado: "Presente" },
    ],
  },
];

const periodos = ["Periodo actual", "Periodo anterior"];

function DetallesCurso({ curso, onClose }) {
  const [tabActiva, setTabActiva] = useState("información");

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      id="my-modal"
    >
      <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
        <div className="mt-3">
          <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">
            {curso.nombre}
          </h3>
          <div className="mt-2 px-7 py-3">
            <div className="flex justify-center space-x-4 mb-4">
              <button
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  tabActiva === "información"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setTabActiva("información")}
              >
                Información
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  tabActiva === "asistencias"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setTabActiva("asistencias")}
              >
                Asistencias
              </button>
            </div>
            {tabActiva === "información" && (
              <div>
                <h4 className="font-bold mb-2 text-lg">En curso</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p>
                      <span className="font-semibold">Docente:</span>{" "}
                      {curso.docente}
                    </p>
                    <p>
                      <span className="font-semibold">Modalidad de curso:</span>{" "}
                      {curso.modalidad}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Horario:</p>
                    <ul className="list-disc list-inside">
                      {curso.horario.map((horario, index) => (
                        <li key={index}>{horario}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-6">
                  <div>
                    <p className="font-semibold">Horas semanales:</p>
                    <p>{curso.horasSemanales}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Créditos:</p>
                    <p>{curso.creditos}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Nro vez:</p>
                    <p>{curso.nroVez}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Sección:</p>
                    <p>{curso.seccion}</p>
                  </div>
                </div>
                <h4 className="font-bold mb-2">Evaluaciones:</h4>
                <table className="w-full mb-4">
                  <tbody>
                    {curso.calificaciones.map((cal, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2">{cal.nombre}</td>
                        <td className="py-2 text-right">
                          {cal.nota !== null ? cal.nota : "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="bg-blue-100 p-3 rounded">
                  <p className="font-semibold">Fórmula: {curso.formula}</p>
                </div>
              </div>
            )}
            {tabActiva === "asistencias" && (
              <div>
                <h4 className="font-bold mb-2">Asistencias</h4>
                <ul>
                  {curso.asistencias.map((asist, index) => (
                    <li key={index} className="mb-1">
                      {new Date(asist.fecha).toLocaleDateString()}:{" "}
                      {asist.estado}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="items-center px-4 py-3">
            <button
              id="ok-btn"
              className="px-4 py-2 bg-rose-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={onClose}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const CursosEstudiante = () => {
  const [periodoSeleccionado, setPeriodoSeleccionado] =
    useState("Periodo actual");
  const [mostrarOpciones, setMostrarOpciones] = useState(false);
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null);

  const verDetalles = (curso) => {
    setCursoSeleccionado(curso);
  };

  return (
    <>
      <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Mis cursos</h1>
          <div className="flex items-center">
            <span className="mr-2 text-gray-600">Filtrar por</span>
            <div className="relative">
              <button
                onClick={() => setMostrarOpciones(!mostrarOpciones)}
                className="bg-white border border-gray-300 rounded-md px-4 py-2 inline-flex items-center justify-between w-48"
              >
                <span>{periodoSeleccionado}</span>
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {mostrarOpciones && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                  {periodos.map((periodo) => (
                    <button
                      key={periodo}
                      onClick={() => {
                        setPeriodoSeleccionado(periodo);
                        setMostrarOpciones(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      {periodo}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          2024 - Ciclo 2 Agosto PREG (001) (Actual)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cursos.map((curso) => (
            <div
              key={curso.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={img_course}
                alt={curso.nombre}
                className=" w-full h-40 object-cover"
              />
              <div className="relative">
                <div className="absolute bottom-2 right-2 bg-yellow-400 text-white px-2 py-1 rounded">
                  {curso.progreso}%
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-center text-lg mb-2">
                  {curso.nombre}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {curso.codigo} - {curso.tipo}
                </p>
                <div className="flex justify-center">
                  <button
                    onClick={() => verDetalles(curso)}
                    className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded text-sm"
                  >
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cursoSeleccionado && (
          <DetallesCurso
            curso={cursoSeleccionado}
            onClose={() => setCursoSeleccionado(null)}
          />
        )}
      </div>
    </>
  );
};

export default CursosEstudiante;
