import { Navigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import RowSemana from "./RowSemana";
import TablaTitulo from "./TablaTitulo";
import Secciones from "../data/secciones.json"
import { HorarioContext } from "./HorarioContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Buscar(json, id) {
  for (let index = 0; index < json.length; index++) {
    const curso = json[index];
    if (curso.id_curso === parseInt(id)) {
      return curso;
    }
  }
  return null;
}

export default function ListadoSecciones() {
  const { cursoId } = useParams();
  const [cursoEncontrado, setCursoEncontrado] = useState(null);
  const { seleccionarCurso } = useContext(HorarioContext);
  const navigate = useNavigate();

  const handleSeleccionarSeccion = (seccion, n_curso) => {
    alert("Curso guardado con éxito");
    seleccionarCurso(seccion, n_curso);
    navigate("/");
  };

  useEffect(() => {
    const cursoEncontrado = Buscar(Secciones, cursoId);
    setCursoEncontrado(cursoEncontrado);
  }, [cursoId]);
  
  return(
    <>
      <div className="listado listado-secciones">
        <TablaTitulo titulo={cursoEncontrado ? cursoEncontrado.curso : "Curso no encontrado"}/>
        <table>
          <RowSemana fheader="Secciones"/>
          <tbody>
            {cursoEncontrado && cursoEncontrado.secciones ? ( // Verifica que no sea null
            cursoEncontrado.secciones.map(seccion => (
              <tr className="tr_centrar" key={seccion.id_seccion} onClick={() => handleSeleccionarSeccion(seccion, cursoEncontrado.curso)} style={{cursor: "pointer"}}>
                <td>{seccion.id_seccion}</td>
                <td>{seccion.horario.lunes}</td>
                <td>{seccion.horario.martes}</td>
                <td>{seccion.horario.miercoles}</td>
                <td>{seccion.horario.jueves}</td>
                <td>{seccion.horario.viernes}</td>
                <td>{seccion.horario.sabado}</td>
              </tr>
            ))
            ) : (
              <tr>
                <td colSpan="7">No hay secciones disponibles</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}