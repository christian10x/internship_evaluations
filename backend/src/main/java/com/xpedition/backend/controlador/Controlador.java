package com.xpedition.backend.controlador;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.xpedition.backend.dto.Respuesta;
import com.xpedition.backend.servicio.Servicio;

@RestController
@CrossOrigin(origins = {"*"})
public class Controlador {
    @Autowired
    private Servicio servicio;

    // Endpoint para insertar la información
    @RequestMapping(
            value = "/insertar-respuestas",
            method = RequestMethod.POST,
            consumes = "application/json;charset=utf-8",
            produces = "application/json;charset=utf-8"
    )
    public @ResponseBody String insertarRespuestas(@RequestBody List<Map<String, Object>> respuestasJson) throws SQLException {
        servicio.insertarRespuestas(respuestasJson); // Usamos la lista de Map<String, Object> directamente
        return "Respuestas insertadas correctamente";
    }
    @RequestMapping(
            value = "/obtener-respuesta",
            method = RequestMethod.POST,
            consumes = "application/json;charset=utf-8",
            produces = "application/json;charset=utf-8"
    )
    public Respuesta obtenerRespuesta(@RequestBody Map<String, Object> parametros) throws SQLException {
        int alumno = (Integer) parametros.get("alumno");
        int evaluacion = (Integer) parametros.get("evaluacion");
        String pregunta = (String) parametros.get("pregunta");

        return servicio.obtenerRespuesta(alumno, evaluacion, pregunta);
    }
    @RequestMapping(
            value = "/calificar-respuesta",
            method = RequestMethod.POST,
            consumes = "application/json;charset=utf-8"
    )
    public @ResponseBody String calificarRespuesta(@RequestBody Map<String, Object> payload) throws SQLException {
        
        int evaluador = (Integer) payload.get("evaluador");
        int alumno = (Integer) payload.get("alumno");
        int evaluacion = (Integer) payload.get("evaluacion");
        String pregunta = (String) payload.get("pregunta");
        int calificacion = (Integer) payload.get("calificacion");

        boolean esValidado = servicio.validarEvaluador(evaluador, evaluacion);
        
        if (esValidado) {
            servicio.calificarRespuesta(alumno, evaluacion, pregunta, calificacion);
            return "Calificación guardada correctamente";
        } else {
            return "El evaluador no está autorizado para calificar esta evaluación";
        }
    }
        // Endpoint para configurar el peso de una pregunta en una evaluación
        @RequestMapping(
            value = "/configurar-peso-pregunta",
            method = RequestMethod.POST,
            consumes = "application/json;charset=utf-8"
    )
    public @ResponseBody String configurarPesoPregunta(@RequestBody Map<String, Object> payload) throws SQLException {
        int evaluacion = (Integer) payload.get("evaluacion");
        String pregunta = (String) payload.get("pregunta");
        int peso = (Integer) payload.get("peso");

        servicio.actualizarPesoPregunta(evaluacion, pregunta, peso);
        return "Peso de la pregunta actualizado correctamente";
    }

    // Endpoint para configurar la nota aprobatoria de una evaluación
    @RequestMapping(
            value = "/configurar-nota-aprobatoria",
            method = RequestMethod.POST,
            consumes = "application/json;charset=utf-8"
    )
    public @ResponseBody String configurarNotaAprobatoria(@RequestBody Map<String, Object> payload) throws SQLException {
        int evaluacion = (Integer) payload.get("evaluacion");
        int notaAprobatoria = (Integer) payload.get("nota_aprobatoria");

        servicio.actualizarNotaAprobatoria(evaluacion, notaAprobatoria);
        return "Nota aprobatoria actualizada correctamente";
    }
    @RequestMapping(
        value = "/obtener-respuestas-alumno",
        method = RequestMethod.POST,
        consumes = "application/json;charset=utf-8",
        produces = "application/json;charset=utf-8"
    )
    public Map<String, Object> obtenerRespuestasAlumno(@RequestBody Map<String, Object> parametros) throws SQLException {
        int alumno = (Integer) parametros.get("alumno");
        int evaluacion = (Integer) parametros.get("evaluacion");

        try {
            // Obtener las respuestas del alumno
            List<Respuesta> respuestas = servicio.obtenerRespuestasAlumno(alumno, evaluacion);

            // Obtener la nota del alumno y la nota aprobatoria
            int notaAlumno = servicio.obtenerNotaAlumno(alumno, evaluacion);
            int notaAprobatoria = servicio.obtenerNotaAprobatoria(evaluacion);

            // Calcular si el alumno aprobó o no
            boolean aprobado = servicio.esAprobado(notaAlumno, notaAprobatoria);

            // Devolver las respuestas y el resultado de la evaluación
            return Map.of(
                "respuestas", respuestas,
                "nota", notaAlumno,
                "nota_aprobatoria", notaAprobatoria,
                "aprobado", aprobado
            );
        } catch (SQLException e) {
            return Map.of("error", "Error al obtener los datos del alumno");
        }
    }
}
