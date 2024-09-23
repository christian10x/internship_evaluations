package Expedition.RetoBackend.Service;

import Expedition.RetoBackend.Model.Evaluador;
import Expedition.RetoBackend.Repository.EvaluadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EvaluadorService {

    @Autowired
    private EvaluadorRepository evaluadorRepository;

    public Optional<Evaluador> obtenerPorId(Long id){
        return evaluadorRepository.findById(id);
    }

}
