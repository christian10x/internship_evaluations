package com.alvaroUTP.alvaroSara.repository;

import com.alvaroUTP.alvaroSara.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface MatriculaRepository extends JpaRepository<Matricula, Long> {

    @Query("SELECT m FROM Matricula m WHERE m.curso.id =:id_curso AND m.alumno.id =:id_alumno AND m.seccion.id =:id_seccion" )
    public Matricula findByDatos(@Param("id_curso") String id_curso,@Param("id_alumno") String id_alumno,@Param("id_seccion") String id_seccion);

}
