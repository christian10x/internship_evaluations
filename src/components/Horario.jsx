import { useState, useEffect, useContext } from "react";
import { HorarioContext } from "./HorarioContext";
import TablaTitulo from "./TablaTitulo";
import Button from "./Button";

function TransformarLista(cursosSeleccionados) {
  const horario = {};
  
  cursosSeleccionados.forEach(curso => {
    for (const dia in curso) {
      const cursos = curso[dia].cursos;

      if (!horario[dia]) {
        horario[dia] = Array(16).fill(null).map(() => []);
      }

      cursos.forEach(curso => {
        const inicio = curso.hora_inicio - 7;
        const fin = curso.hora_fin - 7;
  
        for (let i = inicio; i < fin; i++) {
          horario[dia][i].push(curso.nombre_curso);
        }
      });
    }
  });

  return horario;
}

export default function Horario() {
  const [lista_horario, setLista_horario] = useState({});
  const { cursosSeleccionados } = useContext(HorarioContext);

  const horas = Array.from({ length: 16 }, (_, i) => i + 7);

  useEffect(() => {
    console.log(cursosSeleccionados)
    if (Object.keys(cursosSeleccionados).length > 0) {
      const resultado = TransformarLista(cursosSeleccionados);
      setLista_horario(resultado);
    }
  }, [cursosSeleccionados]);
  
  return(
    <>
      <div className="listado listado-horario">
        <TablaTitulo titulo="Previsualización de Horario"/>
        <table>
          <thead>
            <tr>
              <th>Hora</th>
              <th>Lunes</th>
              <th>Martes</th>
              <th>Miércoles</th>
              <th>Jueves</th>
              <th>Viernes</th>
              <th>Sábado</th>
            </tr>
          </thead>
          <tbody>
            {horas.map((hora, i) => (
              <tr key={i}>
                <td>{hora}:00</td> {/* Columna Hora */}
                {Object.keys(lista_horario).map((dia, index) => (
                  <td 
                    key={index} 
                    className={lista_horario[dia][i].length > 1 ? "td_cruceHorario" : ""}
                  >
                    {
                      lista_horario[dia][i].length > 0
                      ? lista_horario[dia][i].join(", ") // Cruce de cursos mostrados con comas
                      : "-" // "-" para rellenar vacíos
                    } 
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="nota">*Los cursos en rojo indican cruce de horario</p>
        <div className="btn">
          <Button text="Confirmar Matrícula" linkTo="/matricula/confirmacion"/>
        </div>
      </div>
    </>
  );
}
