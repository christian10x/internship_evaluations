package com.alvaroUTP.alvaroSara.service;

import com.alvaroUTP.alvaroSara.entity.Calificacion;
import com.alvaroUTP.alvaroSara.entity.Curso;
import com.alvaroUTP.alvaroSara.entity.Evaluacion;
import com.alvaroUTP.alvaroSara.entity.Seccion;

import java.util.List;

public interface IBusinessLogic {
    public void crearCalificacion(double nota, String id_curso, String id_seccion,String id_alumno,String id_evaluacion);

    public List<Calificacion> listCalificaciones();

    public List<Calificacion> listCalificacionesByCurso(String id_curso);
    public List<Calificacion> listCalificacionesBySeccion(String id_seccion);

}
