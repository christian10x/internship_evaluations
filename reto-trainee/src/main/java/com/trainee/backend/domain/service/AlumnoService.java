package com.trainee.backend.domain.service;

import com.trainee.backend.domain.request.AlumnoRequest;
import com.trainee.backend.infraestructure.entity.Alumno;

import java.util.List;
import java.util.Optional;

public interface AlumnoService {
    Optional<Alumno> registrarAlumno(AlumnoRequest newAlumno);
    List<Alumno> listarAlumnos();
}
