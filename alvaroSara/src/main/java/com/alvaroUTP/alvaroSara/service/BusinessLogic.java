package com.alvaroUTP.alvaroSara.service;

import com.alvaroUTP.alvaroSara.entity.*;
import com.alvaroUTP.alvaroSara.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BusinessLogic implements IBusinessLogic{
    @Autowired
    private CalificacionRepository calificacionRepository;
    @Autowired
    private CursoRepository cursoRepository;
    @Autowired
    private SeccionRepository seccionRepository;
    @Autowired
    private AlumnoRepository alumnoRepository;
    @Autowired
    private MatriculaRepository matriculaRepository;
    @Autowired
    private EvaluacionRepository evaluacionRepository;

    @Override
    public void crearCalificacion(double nota, String id_curso, String id_seccion,String id_alumno,String id_evaluacion) {
        Evaluacion evaluacion = evaluacionRepository.getReferenceById(Long.valueOf(id_evaluacion));
        Matricula matricula = matriculaRepository.findByDatos(id_curso,id_alumno,id_seccion);

        Calificacion calificacion = new Calificacion();
        calificacion.setMatricula(matricula);
        calificacion.setEvaluacion(evaluacion);
        calificacion.setNota(nota);
        calificacionRepository.save(calificacion);
    }

    @Override
    public List<Calificacion> listCalificaciones() {
        return calificacionRepository.findAll();
    }

    @Override
    public List<Calificacion> listCalificacionesByCurso(String id_curso) {
        return calificacionRepository.findByCurso(id_curso);
    }

    @Override
    public List<Calificacion> listCalificacionesBySeccion(String id_seccion) {
        return calificacionRepository.findBySeccion(id_seccion);
    }


}
