// src/pages/PaymentsPage.js
import React, { useState } from 'react';
import '../css/paymentspage.css'; // Importar el CSS personalizado

const payments = [
  { item: '101020040001', description: 'CUOTAS 01', amount: '0.00', dueDate: '16/08/24', status: 'PAGADO', action: 'Descargar' },
  { item: '101020040002', description: 'CUOTAS 02', amount: '0.00', dueDate: '14/09/24', status: 'PAGADO', action: 'Descargar' },
  { item: '101020040003', description: 'CUOTAS 03', amount: '604.00', dueDate: '14/10/24', status: 'PENDIENTE DE PAGO', action: 'Descargar' },
  { item: '101020040004', description: 'CUOTAS 04', amount: '604.00', dueDate: '14/11/24', status: 'PENDIENTE DE PAGO', action: 'Descargar' },
  { item: '101020040005', description: 'CUOTAS 05', amount: '604.00', dueDate: '14/12/24', status: 'PENDIENTE DE PAGO', action: 'Descargar' },
  { item: '101220090118', description: 'REINSCRI.REGULAR 80-20 y 50-50', amount: '0.00', dueDate: '15/08/24', status: 'PAGADO', action: 'Descargar' },
];

const PaymentsPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('2024 - Ciclo 2 Agosto');

  return (
    <div className="payments-container">
      <h1>ESTADO DE CUENTA</h1>
      <div className="payments-summary">
        <p><strong>Deuda vencida:</strong> S/. 0.00</p>
        <p><strong>Deuda total:</strong> S/. 1812.00</p>
      </div>

      <div className="payments-period">
        <label htmlFor="period">PERIODO</label>
        <select id="period" value={selectedPeriod} onChange={(e) => setSelectedPeriod(e.target.value)}>
          <option value="2024 - Ciclo 2 Agosto">2024 - Ciclo 2 Agosto</option>
          <option value="2024 - Ciclo 1 Marzo">2024 - Ciclo 1 Marzo</option>
          {/* Agrega más periodos si es necesario */}
        </select>
      </div>

      <table className="payments-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Descripción</th>
            <th>Monto</th>
            <th>Vencimiento</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index}>
              <td>{payment.item}</td>
              <td>{payment.description}</td>
              <td>{payment.amount}</td>
              <td>{payment.dueDate}</td>
              <td>{payment.status}</td>
              <td><a href="#">{payment.action}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentsPage;
