package com.xpedition.backend.servicio;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import com.xpedition.backend.dto.Respuesta;

public interface Servicio {
    public void insertarRespuestas(List<Map<String, Object>> respuestasJson) throws SQLException;
    public Respuesta obtenerRespuesta(int alumno, int evaluacion, String pregunta) throws SQLException;
    public boolean validarEvaluador(int evaluador, int evaluacion) throws SQLException;
    public void calificarRespuesta(int alumno, int evaluacion, String pregunta, int calificacion) throws SQLException;
    public void actualizarPesoPregunta(int evaluacion, String pregunta, int peso) throws SQLException;
    public void actualizarNotaAprobatoria(int evaluacion, int notaAprobatoria) throws SQLException;
    public List<Respuesta> obtenerRespuestasAlumno(int alumno, int evaluacion) throws SQLException;
    public int obtenerNotaAlumno(int alumno, int evaluacion) throws SQLException;
    public int obtenerNotaAprobatoria(int evaluacion) throws SQLException;
    public boolean esAprobado(int notaAlumno, int notaAprobatoria);
} 
