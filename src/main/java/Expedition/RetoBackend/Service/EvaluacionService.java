package Expedition.RetoBackend.Service;

import Expedition.RetoBackend.Model.Evaluacion;
import Expedition.RetoBackend.Repository.EvaluacionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EvaluacionService {

    @Autowired
    private EvaluacionRepository evaluacionRepository;

    public Evaluacion guardarEvaluacion(Evaluacion evaluacion) {
        return evaluacionRepository.save(evaluacion);
    }

    public Optional<Evaluacion> obtenerEvaluacionPorId(Long id) {
        return evaluacionRepository.findById(id);
    }

}