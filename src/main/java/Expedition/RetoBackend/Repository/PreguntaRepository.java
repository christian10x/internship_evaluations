package Expedition.RetoBackend.Repository;

import Expedition.RetoBackend.Model.Pregunta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PreguntaRepository extends JpaRepository<Pregunta, Long> {
    boolean existsByEvaluacionIdEvaluacion(Long idEvaluacion);
    int countByEvaluacionIdEvaluacion(Long idEvaluacion);
    Optional<Pregunta> findByEvaluacionIdEvaluacionAndOrden(Long idEvaluacion, Long orden);
    List<Pregunta> findByEvaluacionIdEvaluacion(Long idEvaluacion);
}
