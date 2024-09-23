import { Link } from "react-router-dom";
import Cursos from "../data/cursos.json"
import Button from '../components/Button'

export default function ListadoCursos() {
  return(
    <>
      <div className="listado listado-cursos">
        <h2 className="tabla-titulo">Lista de Asignaturas</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre de Asignatura</th>
              <th>Tipo</th>
              <th>Créditos</th>
            </tr>
          </thead>
          <tbody>
            {
              Cursos.map(curso => {
                return(
                  <tr>
                    <td>
                      <Link to={`/curso/${curso.id_curso}`}>{curso.nombre_curso}</Link>
                    </td>
                    <td className="td_centrar">{curso.tipo}</td>
                    <td className="td_centrar">{curso.n_creditos}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
        <div className="btn">
          <Button text="Previsualizar Horario" linkTo="/matricula/horario"/>
        </div>
      </div>
    </>
  );
}
