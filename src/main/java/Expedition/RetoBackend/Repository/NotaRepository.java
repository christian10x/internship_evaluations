package Expedition.RetoBackend.Repository;

import Expedition.RetoBackend.Model.Nota;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface NotaRepository extends JpaRepository<Nota, Long> {
    Optional<Nota> findByEvaluacionIdEvaluacionAndAlumnoIdAlumno(Long idEvaluacion, Long idAlumno);
}
