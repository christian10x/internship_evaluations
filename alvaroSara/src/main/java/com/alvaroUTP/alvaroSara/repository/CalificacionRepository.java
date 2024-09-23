package com.alvaroUTP.alvaroSara.repository;

import com.alvaroUTP.alvaroSara.entity.Calificacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CalificacionRepository extends JpaRepository<Calificacion, Long> {

    @Query("SELECT c FROM Calificacion c WHERE c.matricula.curso.id =:id" )
    public List<Calificacion> findByCurso(@Param("id") String id);

    @Query("SELECT c FROM Calificacion c WHERE c.matricula.seccion.id =:id" )
    public List<Calificacion> findBySeccion(@Param("id") String id);

}
