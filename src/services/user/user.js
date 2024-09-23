export const getUser = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: 'Keyla',
          lastname: 'Cabrera Alcalá',
          career: 'Ingeniería de Software',
          sede: 'UTP - Lima Sur',
          code: 'U20201247',
          account: {
            total: 1801.00,
            paid: 1,
            expire: 2,
          },
        });
      }, 1000);
    });
  };