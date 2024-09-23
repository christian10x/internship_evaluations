package Expedition.RetoBackend.Service;

import Expedition.RetoBackend.Model.Pregunta;
import Expedition.RetoBackend.Repository.PreguntaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PreguntaService {

    @Autowired
    private PreguntaRepository preguntaRepository;

    public Optional<Pregunta> obtenerPorEvaluacionPorNumero(Long evaluacionId,Long nroPregunta){
        return preguntaRepository.findByEvaluacionIdEvaluacionAndOrden(evaluacionId,nroPregunta);
    }

    public boolean perteneceAEvaluacion(Long id){
        return preguntaRepository.existsByEvaluacionIdEvaluacion(id);
    }

    public int cantidadPorEvaluacion(Long id){
        return preguntaRepository.countByEvaluacionIdEvaluacion(id);
    }

    public Pregunta guardarPregunta(Pregunta pregunta) {
        return preguntaRepository.save(pregunta);
    }

}
