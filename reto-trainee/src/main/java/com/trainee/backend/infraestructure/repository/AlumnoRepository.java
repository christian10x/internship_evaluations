package com.trainee.backend.infraestructure.repository;

import com.trainee.backend.infraestructure.entity.Alumno;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AlumnoRepository extends JpaRepository<Alumno, Integer> {
    Optional<Alumno> findByCodigo(String codigo);
    boolean existsByCodigo(String codigo);
}
