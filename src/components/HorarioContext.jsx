import { createContext, useState } from "react";

export const HorarioContext = createContext();

export const HorarioProvider = ({ children }) => {
  const [cursosSeleccionados, setCursosSeleccionados] = useState([]);

  const transformarHorario = (seccion, n_curso) => {
    const diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
    const horarioTransformado = {};

    diasSemana.forEach((dia) => {
      const horarioDia = seccion.horario[dia];
      
      if (horarioDia && horarioDia !== "-") {
        const [hora_inicio, hora_fin] = horarioDia.split('-').map(Number);
        
        if (!horarioTransformado[dia]) {
          horarioTransformado[dia] = { cursos: [] };
        }
        
        horarioTransformado[dia].cursos.push({
          nombre_curso: n_curso,
          seccion: seccion.id_seccion,
          hora_inicio,
          hora_fin
        });
      }
    });

    return horarioTransformado;
  };

  const seleccionarCurso = (seccion, n_curso) => {
    const cursoTransformado = transformarHorario(seccion, n_curso);
    setCursosSeleccionados(prev => [...prev, cursoTransformado]);
  };

  return (
    <HorarioContext.Provider value={{ cursosSeleccionados, seleccionarCurso }}>
      {children}
    </HorarioContext.Provider>
  );
};
