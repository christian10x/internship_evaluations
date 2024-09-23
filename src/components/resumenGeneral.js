// src/components/ResumenGeneral.js
import React from "react";
import './resumenGeneral.css';

function ResumenGeneral() {
    return (
        <div className="resumen-general">
            <h3>Resumen general</h3>
            <div className="resumen-content">
                <div className="resumen-left">
                    <p>Campus: Lima Centro</p>
                    <p>Cursos matriculados: 07</p>
                    <p>Promedio: -</p>
                    <p>Ciclo relativo: 08</p>
                </div>
                <div className="resumen-right">
                    <p>Cantidad de créditos: 19</p>
                    <p>Horas semanales: 22</p>
                    <p>Mérito - Orden: -</p>
                    <p>Mérito - Pertenece: -</p>
                </div>
            </div>
        </div>
    );
}

export default ResumenGeneral;
