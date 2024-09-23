package Expedition.RetoBackend.Repository;

import Expedition.RetoBackend.Model.AsignacionEvaluador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AsignacionEvaluadorRepository extends JpaRepository<AsignacionEvaluador, Long> {

    boolean existsByEvaluacionIdEvaluacionAndEvaluadorIdEvaluador(Long idEvaluacion, Long idEvaluador);
}