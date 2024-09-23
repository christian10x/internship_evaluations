// SIMULACION DE LLAMADA A API
export const getCourses = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "c0001",
          name: "Programación orientada a objetos",
          teacher: "Keyla Cabrera Alcala",
          section: "34237",
          grade: 16,
        },
        {
          id: "c0002",
          name: "Algoritmos y Estructuras de Datos",
          teacher: "Juan Pérez",
          section: "32487",
          grade: 14,
        },
        {
          id: "c0003",
          name: "Bases de Datos",
          teacher: "Laura González",
          section: "31247",
          grade: 15,
        },
        {
          id: "c0004",
          name: "Desarrollo Web",
          teacher: "Carlos Martínez",
          section: "32757",
          grade: 18,
        },
        {
          id: "c0005",
          name: "Inteligencia Artificial",
          teacher: "Sofía López",
          section: "31987",
          grade: 19,
        },
        {
          id: "c0006",
          name: "Matemáticas Discretas",
          teacher: "Ana Torres",
          section: "30487",
          grade: 17,
        },
        {
          id: "c0007",
          name: "Redes de Computadoras",
          teacher: "Luis García",
          section: "32247",
          grade: 12,
        },
        {
          id: "c0008",
          name: "Seguridad Informática",
          teacher: "María Sánchez",
          section: "31057",
          grade: 13,
        },
      ]);
    }, 1000);
  });
};

export const getCourseDetail = (courseId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const courses = [
        {
          id: "c0001",
          info: {
            name: "Programación orientada a objetos",
            section: "34237",
            status: "En curso",
            teacher: "Keyla Cabrera Alcala",
            classroom: "Aula 101",
            modality: "Presencial",
            credits: 4,
            schedule: [
              { day: "Lunes", time: "10:00 - 12:00" },
              { day: "Miércoles", time: "10:00 - 12:00" },
            ],
          },
          grades: {
            formula: "30% PC1 + 30% PC2 + 20% PC3 + 20% EF",
            pc1: 16,
            pc2: 14,
            pc3: 18,
            ef: 17,
            final_grade: 16,
            status: "En proceso",
          },
          attendance: {
            attended: 10,
            not_attended: 2,
            pending: 1,
            blank: 2,
          },
        },
        {
          id: "c0002",
          info: {
            name: "Algoritmos y Estructuras de Datos",
            section: "32487",
            status: "En curso",
            teacher: "Juan Pérez",
            classroom: "Aula 202",
            modality: "Virtual",
            credits: 3,
            schedule: [
              { day: "Martes", time: "14:00 - 16:00" },
              { day: "Jueves", time: "14:00 - 16:00" },
            ],
          },
          grades: {
            formula: "40% PC1 + 40% PC2 + 20% EF",
            pc1: 14,
            pc2: 15,
            ef: 16,
            final_grade: 14,
            status: "En proceso",
          },
          attendance: {
            attended: 8,
            not_attended: 4,
            pending: 0,
            blank: 1,
          },
        },
        // FALTAN AÑADIR CURSOS
      ];

      const course = courses.find((course) => course.id === courseId);

      if (course) {
        resolve(course);
      } else {
        reject(new Error("Course not found"));
      }
    }, 1000);
  });
};
