package Expedition.RetoBackend.Controller;

import Expedition.RetoBackend.Model.*;
import Expedition.RetoBackend.Service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Objects;

@RestController
@RequestMapping("/respuestas")
public class RespuestaAlumnoController {

    @Autowired
    private AlumnoService alumnoService;
    @Autowired
    private EvaluacionService evaluacionService;
    @Autowired
    private PreguntaService preguntaService;
    @Autowired
    private EvaluadorService evaluadorService;
    @Autowired
    private RespuestaAlumnoService respuestaAlumnoService;
    @Autowired
    private NotaService notaService;

    @PostMapping("/guardar")
    public ResponseEntity<String> guardarEvaluacion(@RequestBody List<Map<String, Object>> json) {

        // Procesar cada elemento del JSON (corresponde a el alumno, la evaluación y las respuestas)
        for (Map<String, Object> evaluacionData : json) {

            //Existencia del alumno
            Long alumnoId = Long.valueOf(evaluacionData.get("alumno").toString());
            Alumno alumno = alumnoService.obtenerAlumnoPorId(alumnoId).orElse(null);
            if (alumno == null) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El alumno con el ID: " + alumnoId + " no existe.");

            //Existencia de la evaluacion
            Long evaluacionId = Long.valueOf(evaluacionData.get("evaluacion").toString());
            Evaluacion evaluacion = evaluacionService.obtenerEvaluacionPorId(evaluacionId).orElse(null);
            if (evaluacion == null) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La evaluacion con código:" + evaluacionId + " no existe.");
            if (!preguntaService.perteneceAEvaluacion(evaluacionId)) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La evaluación no cuenta con preguntas asignadas.");

            //Existencia de preguntas
            Map<String, String> respuestas = (Map<String, String>) ((List<?>) evaluacionData.get("respuestas")).get(0);
            int cantPreguntas = preguntaService.cantidadPorEvaluacion(evaluacionId);
            if (cantPreguntas < respuestas.size()) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La cantidad de respuestas y la cantidad de preguntas no coinciden. Por favor, actualice la evaluacion.");

            for (Map.Entry<String, String> E : respuestas.entrySet()) {
                String preguntaKey = E.getKey();
                String respuestaText = E.getValue();

                // Extraer el número de la pregunta
                Long preguntaOrden = Long.valueOf(preguntaKey.split("_")[1]);

                //Verificar si la pregunta ya se respondio
                RespuestaAlumno respuestaRespondida = respuestaAlumnoService.preguntaRespondida(evaluacionId, preguntaOrden).orElse(null);
                if (respuestaRespondida == null) {
                    // Buscar la pregunta en la base de datos
                    Pregunta pregunta = preguntaService.obtenerPorEvaluacionPorNumero(evaluacionId, preguntaOrden).orElse(null);

                    // Crear la entidad RespuestaAlumno
                    RespuestaAlumno respuestaAlumno = new RespuestaAlumno();
                    respuestaAlumno.setAlumno(alumno);
                    respuestaAlumno.setEvaluacion(evaluacion);
                    respuestaAlumno.setPregunta(pregunta);
                    respuestaAlumno.setRespuesta(respuestaText);

                    // Usar el método guardarRespuesta ya existente
                    respuestaAlumnoService.guardarRespuesta(respuestaAlumno);
                } else {
                  respuestaRespondida.setRespuesta(respuestaText);
                  respuestaAlumnoService.actualizarRespuesta(respuestaRespondida);
                }
            }

            //Guardamos una nota inicial
            Nota nota = new Nota();
            nota.setAlumno(alumno);
            nota.setPromedio(0.0);
            nota.setResultado("");
            nota.setEstado("Activo");
            nota.setEvaluacion(evaluacion);

            notaService.guardarNota(nota);

        }

        return ResponseEntity.ok("Respuestas guardadas con éxito");
    }

    //Ver la respuesta de un alumno a una pregunta
    @GetMapping("/{idEvaluacion}/alumno/{idAlumno}/Preg/{nroPregunta}")
    public ResponseEntity<String> obtenerRespuestas(@PathVariable Long idEvaluacion, @PathVariable Long idAlumno,@PathVariable Long nroPregunta) {

        //Si existe el alumno
        Alumno alumno = alumnoService.obtenerAlumnoPorId(idAlumno).orElse(null);
        if (alumno == null) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El alumno con el ID: " + idAlumno + " no existe.");

        //Si existe la evaluacion
        Evaluacion evaluacion = evaluacionService.obtenerEvaluacionPorId(idEvaluacion).orElse(null);
        if (evaluacion == null) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La evaluacion con código:" + idEvaluacion + " no existe.");

        //Si existe la pregunta
        Pregunta pregunta = preguntaService.obtenerPorEvaluacionPorNumero(idEvaluacion, nroPregunta).orElse(null);
        if (pregunta == null) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La pregunta buscada para esta evaluacion no existe.");

        //Si el alumno tiene respuestas para esta prueba
        if (!respuestaAlumnoService.alumnoTieneRespuestas(idEvaluacion,idAlumno)) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El alumno no tomo esta prueba");

        //Si el alumno contesto la pregunta
        RespuestaAlumno respuesta = respuestaAlumnoService.obtenerRespuesta(idEvaluacion, idAlumno,nroPregunta);
        if (respuesta == null) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El alumno no contesto la pregunta indicada");

        return ResponseEntity.ok("La respuesta dada por el alumno para la pregunta numero " + nroPregunta + " es: " + respuesta.getRespuesta());
    }

    //Calificar la respuesta dada por un alumno
    @PostMapping("/{idEvaluacion}/pregunta/{nroPregunta}/evaluador/{idEvaluador}/calificar")
    public ResponseEntity<String> calificarRespuesta(
            @PathVariable Long idEvaluacion,
            @PathVariable Long nroPregunta,
            @PathVariable Long idEvaluador,
            @RequestParam double calificacion) {

        //Si existe la evaluacion
        Evaluacion evaluacion = evaluacionService.obtenerEvaluacionPorId(idEvaluacion).orElse(null);
        if (evaluacion == null) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La evaluacion con código:" + idEvaluacion + " no existe.");
        if (Objects.equals(evaluacion.getEstado(), "Cerrado")) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La evaluacion se encuentra cerrada, no se admiten cambios.");

        //Si existe la pregunta
        Pregunta pregunta = preguntaService.obtenerPorEvaluacionPorNumero(idEvaluacion, nroPregunta).orElse(null);
        if (pregunta == null) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La pregunta buscada para esta evaluacion no existe.");

        //Si existe el evaluador
        Evaluador evaluador = evaluadorService.obtenerPorId(idEvaluador).orElse(null);
        if (evaluador == null) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El evaluador no existe.");

        //Si el evaluador no puede calificar la evaluacion
        if (respuestaAlumnoService.evaluadorPuedeCalificar(idEvaluacion,idEvaluador)) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El evaluador seleccionado no puede calificar esta evaluacion.");

        if (calificacion < 0 || calificacion >20) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La calificacion debe estar entre 0 y 20.");

        RespuestaAlumno respuestaCalificada = respuestaAlumnoService.calificarRespuesta(idEvaluacion, nroPregunta, calificacion);
        return ResponseEntity.ok("Se califico la pregunta correctamente.");
    }
}