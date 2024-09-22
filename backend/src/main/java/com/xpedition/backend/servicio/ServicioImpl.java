package com.xpedition.backend.servicio;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xpedition.backend.dao.Dao;
import com.xpedition.backend.dto.Respuesta;

@Service
public class ServicioImpl implements Servicio{
    @Autowired
    private Dao dao;

    @Override
    public void insertarRespuestas(List<Map<String, Object>> respuestasJson) throws SQLException {
        dao.insertarRespuestas(respuestasJson);  // Pasamos el JSON directamente al DAO
    }
    @Override
    public Respuesta obtenerRespuesta(int alumno, int evaluacion, String pregunta) throws SQLException {
        return dao.obtenerRespuesta(alumno, evaluacion, pregunta);
    }
    @Override
    public boolean validarEvaluador(int evaluador, int evaluacion) throws SQLException {
        return dao.esEvaluadorValidado(evaluador, evaluacion);
    }
    @Override
    public void calificarRespuesta(int alumno, int evaluacion, String pregunta, int calificacion) throws SQLException {
        dao.calificarRespuesta(alumno, evaluacion, pregunta, calificacion);
    }
    @Override
    public void actualizarPesoPregunta(int evaluacion, String pregunta, int peso) throws SQLException {
        dao.actualizarPesoPregunta(evaluacion, pregunta, peso);
    }

    @Override
    public void actualizarNotaAprobatoria(int evaluacion, int notaAprobatoria) throws SQLException {
        dao.actualizarNotaAprobatoria(evaluacion, notaAprobatoria);
    }
    @Override
    public List<Respuesta> obtenerRespuestasAlumno(int alumno, int evaluacion) throws SQLException {
        return dao.obtenerRespuestasAlumno(alumno, evaluacion);
    }

    @Override
    public int obtenerNotaAlumno(int alumno, int evaluacion) throws SQLException {
        return dao.obtenerNotaAlumno(alumno, evaluacion);
    }

    @Override
    public int obtenerNotaAprobatoria(int evaluacion) throws SQLException {
        return dao.obtenerNotaAprobatoria(evaluacion);
    }
    // Método para comprobar si el alumno aprobó o no
    @Override
    public boolean esAprobado(int notaAlumno, int notaAprobatoria) {
        return notaAlumno >= notaAprobatoria;
    }
}
