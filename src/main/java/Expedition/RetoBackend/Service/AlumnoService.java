package Expedition.RetoBackend.Service;


import Expedition.RetoBackend.Model.Alumno;
import Expedition.RetoBackend.Repository.AlumnoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AlumnoService {
    @Autowired
    private AlumnoRepository alumnoRepository;

    public Optional<Alumno> obtenerAlumnoPorId(Long id){
        return alumnoRepository.findById(id);
    }

}
