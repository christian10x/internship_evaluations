package Expedition.RetoBackend.Repository;

import Expedition.RetoBackend.Model.RespuestaAlumno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RespuestaAlumnoRepository extends JpaRepository<RespuestaAlumno, Long> {

    Optional<RespuestaAlumno> findByEvaluacionIdEvaluacionAndAlumnoIdAlumnoAndPreguntaOrden(Long idEvaluacion, Long idAlumno,Long nroPregunta);
    List<RespuestaAlumno> findByEvaluacionIdEvaluacionAndAlumnoIdAlumnoOrderByPreguntaOrdenAsc(Long idEvaluacion, Long idAlumno);
    Optional<RespuestaAlumno> findByEvaluacionIdEvaluacionAndPreguntaOrden(Long idEvaluacion, Long ordenPregunta);
    boolean existsByEvaluacionIdEvaluacionAndAlumnoIdAlumno(Long idEvaluacion, Long idAlumno);
}
