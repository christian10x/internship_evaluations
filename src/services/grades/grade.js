export const getLastGrades = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "pc0001",
          name: "Practica Calificada 1",
          course: { id: "c0001", name: "Programación Orientada a Objetos" },
          grade: 16,
          status: { id: "1", name: "Calificada" },
        },
        {
          id: "pc0002",
          name: "Practica Calificada 1",
          course: { id: "c0002", name: "Algoritmos y Estructuras de Datos" },
          grade: 14,
          status: { id: "1", name: "Calificada" },
        },
        {
          id: "pc0003",
          name: "Practica Calificada 1",
          course: { id: "c0003", name: "Bases de Datos" },
          grade: "--",
          status: { id: "2", name: "Pendiente" },
        },
        {
          id: "pc0004",
          name: "Practica Calificada 1",
          course: { id: "c0004", name: "Desarrollo Web" },
          grade: "NS",
          status: { id: "3", name: "No rendida" },
        },
        {
          id: "pc0005",
          name: "Practica Calificada 1",
          course: { id: "c0005", name: "Inteligencia Artificial" },
          grade: 18,
          status: { id: "1", name: "Calificada" },
        },
      ]);
    }, 1000);
  });
};
