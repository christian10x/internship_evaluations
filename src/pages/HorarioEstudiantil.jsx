import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const diasSemana = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sabados",
];
const horasClase = [
  "8:00",
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
];

const clases = [
  {
    dia: "Lunes",
    hora: "8:00",
    materia: "Matemáticas",
    color: "bg-red-200",
    profesor: "Dr. García",
  },
  {
    dia: "Lunes",
    hora: "10:00",
    materia: "Historia",
    color: "bg-blue-200",
    profesor: "Dra. Rodríguez",
  },
  {
    dia: "Martes",
    hora: "9:00",
    materia: "Física",
    color: "bg-green-200",
    profesor: "Dr. Martínez",
  },
  {
    dia: "Miércoles",
    hora: "11:00",
    materia: "Literatura",
    color: "bg-yellow-200",
    profesor: "Dra. López",
  },
  {
    dia: "Jueves",
    hora: "14:00",
    materia: "Biología",
    color: "bg-purple-200",
    profesor: "Dr. Sánchez",
  },
  {
    dia: "Viernes",
    hora: "13:00",
    materia: "Química",
    color: "bg-pink-200",
    profesor: "Dra. Fernández",
  },
];

export const HorarioEstudiantil = () => {
  const [claseSeleccionada, setClaseSeleccionada] = useState(null);

  const cerrarModal = () => setClaseSeleccionada(null);
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl text-center font-bold mb-4">
          Horario Universitario
        </h1>
        <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2"></th>
                {diasSemana.map((dia) => (
                  <th key={dia} className="border p-2 font-semibold">
                    {dia}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {horasClase.map((hora) => (
                <tr key={hora}>
                  <td className="border p-2 font-semibold">{hora}</td>
                  {diasSemana.map((dia) => {
                    const clase = clases.find(
                      (c) => c.dia === dia && c.hora === hora
                    );
                    return (
                      <td key={`${dia}-${hora}`} className="border p-2">
                        {clase && (
                          <div
                            className={`${clase.color} p-2 rounded cursor-pointer transition-all duration-200 hover:opacity-80`}
                            onClick={() => setClaseSeleccionada(clase)}
                          >
                            {clase.materia}
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {claseSeleccionada && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full relative">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Detalles de la clase</h2>
                <button
                  onClick={cerrarModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <AiOutlineClose size={24} />
                </button>
              </div>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Materia:</span>{" "}
                  {claseSeleccionada.materia}
                </p>
                <p>
                  <span className="font-semibold">Día:</span>{" "}
                  {claseSeleccionada.dia}
                </p>
                <p>
                  <span className="font-semibold">Hora:</span>{" "}
                  {claseSeleccionada.hora}
                </p>
                <p>
                  <span className="font-semibold">Profesor:</span>{" "}
                  {claseSeleccionada.profesor}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HorarioEstudiantil;
