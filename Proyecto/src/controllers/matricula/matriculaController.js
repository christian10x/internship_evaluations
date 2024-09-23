import MatriculaGral from '../../models/matricula/MatriculaGral.js';
import MatriculaDetalle from '../../models/matricula/MatriculaDetalle.js';
import CursosXDocenteXHorario from '../../models/matricula/CursosXDocenteXHorario.js';
import CursosXDocente from '../../models/matricula/CursosXDocente.js';
import Horarios from '../../models/matricula/Horarios.js';
import Cursos from '../../models/matricula/Cursos.js';

export default {
  registrarMatricula: async (req, res) => {
    const { alumno, evaluacion, cursos } = req.body[0]; 

    try {
      const nuevaMatricula = await MatriculaGral.create({
        SOCIO_ALUMNO_ID: alumno,
        PERIODO_ID: evaluacion,
        LOG_FECHA_CREACION: new Date(),
        LOG_USUARIO_CREACION: "sistema",
      });

      for (const curso of cursos) {
        const [cursoKey] = Object.keys(curso);
        const cursoNombre = curso[cursoKey]; 
        const horarios = curso[`horario_1`];

        const cursoDB = await Cursos.findOne({
          where: { CURSO_NOMBRE: cursoNombre }
        });

        if (!cursoDB) {
          return res.status(404).send({ message: `Curso ${cursoNombre} no encontrado` });
        }

        for (const horario of horarios) {
          const [dia1, dia2] = Object.keys(horario); 
          const horaDia1 = horario[dia1];
          const horaDia2 = horario[dia2];

          const cursoHorario = await CursosXDocente.findOne({
            where: {
                CURSO_ID: cursoDB.CURSO_ID,
            }
          });

          if (!cursoHorario) {
            return res.status(404).send({ message: `No se encontro el horario para el curso ${cursoNombre}` });
          }

          const cursoHorarioDocente = await CursosXDocenteXHorario.findOne({
            where: {
                CURSO_X_DOCENTE_ID: cursoHorario.CURSO_X_DOCENTE_ID,
            }
          });

          if (!cursoHorarioDocente) {
            return res.status(404).send({ message: `No se encontró el horario para el curso ${cursoNombre}` });
          }

         
          await MatriculaDetalle.create({
            MATRICULA_ID: nuevaMatricula.MATRICULA_ID,
            CURSO_X_DOCENTE_X_HORARIO_ID: cursoHorarioDocente.CURSO_X_DOCENTE_X_HORARIO_ID,
            LOG_FECHA_CREACION: new Date(),
            LOG_USUARIO_CREACION: "sistema", 
          });
        }
      }

      return res.status(200).send({ message: "Matrícula realizada con éxito" });
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: "Error al realizar la matrícula" });
    }
  },

  obtenerHorarioPorCursoYAlumno: async (req, res) => {
    const { AlumnoId, cursoId } = req.query;

    try {
      const matriculaGral = await MatriculaGral.findOne({
        where: { 
            SOCIO_ALUMNO_ID: AlumnoId,
            LOG_FECHA_INACTIVACION: null
         }
      });

      if (!matriculaGral) {
        return res.status(404).send({ message: 'No se encontró la matrícula del alumno.' });
      }

      const matriculaDetalles = await MatriculaDetalle.findAll({
        where: { MATRICULA_ID: matriculaGral.MATRICULA_ID },
        include: [
          {
            model: CursosXDocenteXHorario,
            where: { CURSO_X_DOCENTE_X_HORARIO_ID: cursoId },
            include: [
              {
                model: Horarios,
                attributes: ['DIA', 'HORA_INICIO', 'HORA_FIN']
              }
            ]
          }
        ]
      });

      if (matriculaDetalles.length === 0) {
        return res.status(404).send({ message: 'No se encontró la matrícula o el curso.' });
      }

      const horarios = matriculaDetalles.map(detalle => detalle.CursosXDocenteXHorario.Horario);
      return res.json(horarios);
    } catch (error) {
      console.error('Error al obtener horario:', error);
      return res.status(500).send({ message: 'Error al obtener horario' });
    }
  },

  obtenerCursosConHorarios: async (req, res) => {
    const { AlumnoId } = req.query;
  
    try {
      const matriculaDetalles = await MatriculaDetalle.findAll({
        include: [
          {
            model: MatriculaGral,
            where: { SOCIO_ALUMNO_ID: AlumnoId },
          },
          {
            model: CursosXDocenteXHorario,
            include: [Horarios],
          }
        ]
      });
  
      console.log(matriculaDetalles); 
  
      const horarios = matriculaDetalles.map(detalle => {
        const cursoHorario = detalle.CursosXDocenteXHorario;
  
        if (cursoHorario && cursoHorario.Horario) {
          return {
            dia: cursoHorario.Horario.DIA,
            horaInicio: cursoHorario.Horario.HORA_INICIO,
            horaFin: cursoHorario.Horario.HORA_FIN,
            cursoId: cursoHorario.CURSO_X_DOCENTE_X_HORARIO_ID
          };
        } else {
          return { mensaje: `No se encontró horario para el curso con ID: ${detalle.CURSO_X_DOCENTE_X_HORARIO_ID}` };
        }
      });
  
      return res.json(horarios);
    } catch (error) {
      console.error('Error al obtener cursos con horarios:', error);
      return res.status(500).send({ message: 'Error al obtener cursos con horarios' });
    }
  }
  
};
