export const getPayments = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        payments: [
          {
            name: "Cuota 1",
            date: "12/10/2025",
            status: {
              id: 1,
              name: "Pagada",
            },
            mora: 0,
            total: 100,
          },
          {
            name: "Cuota 2",
            date: "12/11/2025",
            status: {
              id: 2,
              name: "Vencida",
            },
            mora: 10,
            total: 100,
          },
          {
            name: "Cuota 3",
            date: "12/12/2025",
            status: {
              id: 3,
              name: "Pendiente",
            },
            mora: 0,
            total: 100,
          },
        ],
        total_debt: 300,
        total_mora: 10,
      });
    }, 1000);
  });
};
