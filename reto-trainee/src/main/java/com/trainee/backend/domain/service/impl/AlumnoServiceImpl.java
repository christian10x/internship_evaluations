package com.trainee.backend.domain.service.impl;

import com.trainee.backend.domain.request.AlumnoRequest;
import com.trainee.backend.domain.service.AlumnoService;
import com.trainee.backend.infraestructure.entity.Alumno;
import com.trainee.backend.infraestructure.repository.AlumnoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AlumnoServiceImpl implements AlumnoService {

    private final AlumnoRepository alumnoRepository;

    @Override
    public Optional<Alumno> registrarAlumno(AlumnoRequest newAlumno) {
        boolean codigoRepetido = alumnoRepository.existsByCodigo(newAlumno.getCodigo());
        //validacion de codigo
        if(codigoRepetido){
            return Optional.empty();
        }
        return Optional.of(alumnoRepository.save(getAlumnoEntity(newAlumno)));
    }

    @Override
    public List<Alumno> listarAlumnos() {
        return alumnoRepository.findAll();
    }

    private Alumno getAlumnoEntity(AlumnoRequest alumnoRequest){
        return Alumno.builder()
                .codigo(alumnoRequest.getCodigo())
                .nombres(alumnoRequest.getNombres())
                .apellidos(alumnoRequest.getApellidos())
                .build();
    }
}
