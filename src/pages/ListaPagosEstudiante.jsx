import React from "react";

const pagos = [
  {
    id: 1,
    fecha: "2024-08-01",
    concepto: "Mensualidad Agosto",
    monto: 780,
    estado: "Pagado",
  },
  {
    id: 2,
    fecha: "2024-09-01",
    concepto: "Mensualidad Septiembre",
    monto: 780,
    estado: "Atrasado",
  },
  {
    id: 3,
    fecha: "2024-10-01",
    concepto: "Mensualidad Octubre",
    monto: 780,
    estado: "Pendiente",
  },
  {
    id: 4,
    fecha: "2024-11-01",
    concepto: "Mensualidad Noviembre",
    monto: 780,
    estado: "Pendiente",
  },
  {
    id: 4,
    fecha: "2024-12-01",
    concepto: "Mensualidad Diciembre",
    monto: 780,
    estado: "Pendiente",
  },
  {
    id: 5,
    fecha: "2025-03-15",
    concepto: "Matrícula Marzo",
    monto: 500,
    estado: "Pendiente",
  },
];

export const ListaPagosEstudiante = () => {
  const getBadgeColor = (estado) => {
    switch (estado) {
      case "Pagado":
        return "bg-green-100 text-green-800";
      case "Pendiente":
        return "bg-yellow-100 text-yellow-800";
      case "Atrasado":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      <div className="w-full max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-bold text-center mb-6">
          ESTADO DE CUENTA
        </h2>
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-300">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Fecha
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Concepto
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Monto
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Estado
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pagos.map((pago) => (
                <tr key={pago.id} className="hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {pago.fecha}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {pago.concepto}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                    S/ {pago.monto.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getBadgeColor(
                        pago.estado
                      )}`}
                    >
                      {pago.estado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListaPagosEstudiante;
