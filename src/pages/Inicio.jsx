import React, { useState } from "react";
import logo_utp_1 from "../assets/logo_utp_1.png";

export const Inicio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 1;

  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold py-3">
        Bienvenido, <span className="text-rose-600">Ricardo</span>
      </h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto text-center">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 p-6">
            <img src={logo_utp_1} alt="UTP Logo" className="h-12 mb-4" />
            <h2 className="text-3xl font-bold mb-4">¡Ahorra en tus cuotas!</h2>
            <p className="mb-4">
              Aprovecha el{" "}
              <span className="bg-red-600 text-white px-2 py-1 rounded">
                descuento en tus cuotas
              </span>{" "}
              pagando hasta un día antes del vencimiento.
            </p>
            <p className="text-sm mb-4">
              Recuerda: Este beneficio aplica solo si pagas hasta un día antes
              de la fecha de vencimiento.
            </p>
            <div className="bg-red-600 text-white p-4 rounded-lg mb-4">
              <p className="font-bold">
                ¡Realiza el pago desde cualquier banco!
              </p>
              <button className="mt-2 bg-white text-red-600 px-4 py-2 rounded font-bold">
                Conoce nuestros canales de pago aquí
              </button>
            </div>
            <div className="flex space-x-4">
              <div className="bg-emerald-500 text-white p-4 rounded-lg text-center flex-1">
                <p className="text-3xl font-bold">5%</p>
                <p>de dscto</p>
                <p className="font-bold">BBVA y Scotiabank</p>
              </div>
              <div className="bg-emerald-500 text-white p-4 rounded-lg text-center flex-1">
                <p className="text-3xl font-bold">2.5%</p>
                <p>de dscto</p>
                <p className="font-bold">Interbank y BCP</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 bg-gray-100 p-6 relative">
            <h3 className="text-xl font-bold mb-4">
              Calendario de vencimientos próximos
            </h3>
            <div className="space-y-2">
              {[
                "1ra cuota",
                "2da cuota",
                "3ra cuota",
                "4ta cuota",
                "5ta cuota",
              ].map((cuota, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    currentSlide === 0 ? "block" : "hidden"
                  }`}
                >
                  <div className="w-4 h-4 bg-red-600 rounded-full mr-2"></div>
                  <span className="font-bold">{cuota}</span>
                  <span className="ml-auto text-red-600 font-bold">
                    {
                      [
                        "16 de agosto",
                        "14 de setiembre",
                        "14 de octubre",
                        "14 de noviembre",
                        "14 de diciembre",
                      ][index]
                    }
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-800 text-white text-xs p-2">
          <p>
            Condiciones: Descuento por pronto pago aplica hasta un día hábil
            antes del vencimiento (sin considerar domingos ni feriados). No
            aplica para cuotas vencidas. El pago en ventanilla de los bancos
            está sujeto al cobro de comisiones por parte de la entidad
            financiera.
          </p>
        </div>
      </div>
    </>
  );
};
