import { useQuery } from "@tanstack/react-query";
import { getPayments } from "../../services/payment/payment";
import DataTable from "react-data-table-component";
import styles from "./payments.module.css"
import { IconDownload } from '@tabler/icons-react';

const Payments = () => {
  const {
    isLoading,
    error,
    data: payments,
  } = useQuery({
    queryKey: ["payments"],
    queryFn: getPayments,
  });

  if (isLoading) return <p>Cargando pagos...</p>;

  if (error) return <p>Error: {error.message}</p>;

  const paidPayments = payments.payments.filter(
    (payment) => payment.status.id === 1
  );
  const pendingPayments = payments.payments.filter(
    (payment) => payment.status.id === 2 || payment.status.id === 3
  );

  const getStatusClass = (statusId) => {
    switch (statusId) {
      case 1:
        return "green-container";
      case 2:
        return "red-container";
      case 3:
        return "orange-container";
      default:
        return '';
    }
  };

  const paidColumns = [
    { name: 'Nombre', selector: row => row.name, sortable: true },
    { name: 'Fecha', selector: row => row.date, sortable: true },
    {
      name: 'Estado',
      selector: row => (
        <div id={getStatusClass(row.status.id)}>
          <p>
          {row.status.name}
          </p>
        </div>
      ),
      sortable: true
    },
    { name: 'Mora', selector: row => row.mora, sortable: true },
    { name: 'Total', selector: row => row.total, sortable: true },
    {
      name: ' ',
      cell: row => (
        <button className={styles.downloadButton}>
          <IconDownload stroke={1.5} />
        </button>
      ),
    },
  ];


  return (
    <div>
      <h1>MIS PAGOS</h1>
      <div className={styles.section}>
      <h3>Pagos Pagados</h3>
      <DataTable
        columns={paidColumns}
        data={paidPayments}
      />

      </div>
      <div className={styles.totalContainer}>
        <div className={styles.totalDebt}>
          <div>
            <p>
            Deuda total
            </p>
          </div>
          <div className={styles.totalData}>
            <h3>
            S/{payments.total_debt}
            </h3>
            <span>
              + {payments.total_mora}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.section}>
      <h3>Pagos Pendientes</h3>
      <DataTable
        columns={paidColumns}
        data={pendingPayments}
      />
      </div>
    </div>
  );
};

export default Payments;
