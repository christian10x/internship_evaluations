package com.alvaroUTP.alvaroSara.repository;

import com.alvaroUTP.alvaroSara.entity.Curso;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CursoRepository extends JpaRepository<Curso, String> {
}