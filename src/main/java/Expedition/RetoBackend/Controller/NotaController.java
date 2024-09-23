package Expedition.RetoBackend.Controller;

import Expedition.RetoBackend.Model.Alumno;
import Expedition.RetoBackend.Model.Evaluacion;
import Expedition.RetoBackend.Model.Nota;
import Expedition.RetoBackend.Service.AlumnoService;
import Expedition.RetoBackend.Service.EvaluacionService;
import Expedition.RetoBackend.Service.NotaService;
import Expedition.RetoBackend.Service.RespuestaAlumnoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@RestController
@RequestMapping("/notas")
public class NotaController {

    @Autowired
    private NotaService notaService;

    @Autowired
    private AlumnoService alumnoService;

    @Autowired
    private EvaluacionService evaluacionService;

    @Autowired
    private RespuestaAlumnoService respuestaAlumnoService;

    @PostMapping("/calcular")
    public ResponseEntity<String> calcularPromedio(@RequestParam Long idAlumno, @RequestParam Long idEvaluacion) {

        //Existencia del alumno
        Alumno alumno = alumnoService.obtenerAlumnoPorId(idAlumno).orElse(null);
        if (alumno == null) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El alumno con el ID: " + idAlumno + " no existe.");

        //Existencia de la evaluacion
        Evaluacion evaluacion = evaluacionService.obtenerEvaluacionPorId(idEvaluacion).orElse(null);
        if (evaluacion == null) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La evaluacion con código:" + idEvaluacion + " no existe.");

        Nota nota = notaService.obtenerNota(idAlumno,idEvaluacion);
        if (nota == null) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El alumno no tomo esta prueba");

        if (Objects.equals(evaluacion.getEstado(), "Activo")) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La evaluacion sigue activa. Cierre la evaluacion antes de calcular el promedio del alumno.");


        if (nota.getEvaluacion().getNotaAprobatoria() == null) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Establezca una nota minima aprobatoria para esta evaluacion.");

        return ResponseEntity.ok(notaService.calcularPromedio(nota));
    }
}
