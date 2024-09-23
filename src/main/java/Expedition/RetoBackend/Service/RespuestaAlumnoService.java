package Expedition.RetoBackend.Service;

import Expedition.RetoBackend.Model.RespuestaAlumno;
import Expedition.RetoBackend.Repository.AsignacionEvaluadorRepository;
import Expedition.RetoBackend.Repository.RespuestaAlumnoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RespuestaAlumnoService {

    @Autowired
    private RespuestaAlumnoRepository respuestaAlumnoRepository;

    @Autowired
    private AsignacionEvaluadorRepository asignacionEvaluadorRepository;

    public RespuestaAlumno guardarRespuesta(RespuestaAlumno respuestaAlumno) {
        return respuestaAlumnoRepository.save(respuestaAlumno);
    }

    public RespuestaAlumno actualizarRespuesta(RespuestaAlumno newRespuesta){
        return  respuestaAlumnoRepository.save(newRespuesta);
    }

    public RespuestaAlumno obtenerRespuesta(Long idEvaluacion, Long idAlumno, Long nroPregunta) {
        return respuestaAlumnoRepository.findByEvaluacionIdEvaluacionAndAlumnoIdAlumnoAndPreguntaOrden(idEvaluacion, idAlumno,nroPregunta).orElse(null);
    }

    public Optional<RespuestaAlumno> preguntaRespondida(Long idEvaluacion,Long nroPregunta){
        return respuestaAlumnoRepository.findByEvaluacionIdEvaluacionAndPreguntaOrden(idEvaluacion,nroPregunta);
    }

    public boolean alumnoTieneRespuestas(Long idEvaluacion, Long idAlumno){
        return respuestaAlumnoRepository.existsByEvaluacionIdEvaluacionAndAlumnoIdAlumno(idEvaluacion,idAlumno);
    }

    public boolean evaluadorPuedeCalificar(Long idEvaluacion,Long idEvaluador){
        return !asignacionEvaluadorRepository.existsByEvaluacionIdEvaluacionAndEvaluadorIdEvaluador(idEvaluacion, idEvaluador);
    }

    public RespuestaAlumno calificarRespuesta(Long idEvaluacion, Long idPregunta, double calificacion) {
        RespuestaAlumno respuesta = preguntaRespondida(idEvaluacion, idPregunta).orElse(null);
        if (respuesta != null) {
            respuesta.setCalificacion(calificacion);
            return respuestaAlumnoRepository.save(respuesta);
        }
        return null;
    }
}
