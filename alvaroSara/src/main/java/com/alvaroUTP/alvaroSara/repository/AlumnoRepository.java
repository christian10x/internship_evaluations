package com.alvaroUTP.alvaroSara.repository;

import com.alvaroUTP.alvaroSara.entity.Alumno;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlumnoRepository extends JpaRepository<Alumno, Long> {
}