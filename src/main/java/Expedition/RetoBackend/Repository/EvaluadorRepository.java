package Expedition.RetoBackend.Repository;

import Expedition.RetoBackend.Model.Evaluador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EvaluadorRepository extends JpaRepository<Evaluador, Long> {}
