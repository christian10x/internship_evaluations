// SIMULACION DE LLAMADA A API
export const getSchedule = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
            {
                Id: 1,
                Subject: 'Programación orientada a objetos',
                Teacher: 'Keyla Cabrera Alcala',
                Section: '34237',
                StartTime: new Date(2024, 8, 23, 9, 0),
                EndTime: new Date(2024, 8, 23, 11, 0), 
              },
              {
                Id: 2,
                Subject: 'Algoritmos y Estructuras de Datos',
                Teacher: 'Juan Pérez',
                Section: '32487',
                StartTime: new Date(2024, 8, 24, 8, 30),
                EndTime: new Date(2024, 8, 24, 10, 30),
              },
              {
                Id: 3,
                Subject: 'Bases de Datos',
                Teacher: 'Laura González',
                Section: '31247',
                StartTime: new Date(2024, 8, 25, 10, 0),
                EndTime: new Date(2024, 8, 25, 12, 0), 
              },
              {
                Id: 4,
                Subject: 'Desarrollo Web',
                Teacher: 'Carlos Martínez',
                Section: '32757',
                StartTime: new Date(2024, 8, 26, 14, 0),
                EndTime: new Date(2024, 8, 26, 16, 0),
              },
              {
                Id: 5,
                Subject: 'Inteligencia Artificial',
                Teacher: 'Sofía López',
                Section: '31987',
                StartTime: new Date(2024, 8, 27, 11, 0),
                EndTime: new Date(2024, 8, 27, 13, 0),
              },
              {
                Id: 6,
                Subject: 'Matemáticas Discretas',
                Teacher: 'Ana Torres',
                Section: '30487',
                StartTime: new Date(2024, 8, 28, 8, 0),
                EndTime: new Date(2024, 8, 28, 10, 0),
              },
              {
                Id: 7,
                Subject: 'Redes de Computadoras',
                Teacher: 'Luis García',
                Section: '32247',
                StartTime: new Date(2024, 8, 29, 14, 0),
                EndTime: new Date(2024, 8, 29, 16, 0),
              },
              {
                Id: 8,
                Subject: 'Seguridad Informática',
                Teacher: 'María Sánchez',
                Section: '31057',
                StartTime: new Date(2024, 8, 30, 10, 30),
                EndTime: new Date(2024, 8, 30, 12, 30),
              },
        ]);
      }, 1000);
    });
  };