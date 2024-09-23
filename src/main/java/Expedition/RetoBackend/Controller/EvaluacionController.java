package Expedition.RetoBackend.Controller;

import Expedition.RetoBackend.Model.Evaluacion;
import Expedition.RetoBackend.Service.EvaluacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/evaluaciones")
public class EvaluacionController {

    @Autowired
    private EvaluacionService evaluacionService;

    // Modificar la nota aprobatoria de una evaluación
    @PostMapping("/modificar-notaAprobatoria/{idEvaluacion}")
    public ResponseEntity<String> modificarNotaAprobatoria(@PathVariable Long idEvaluacion, @RequestParam Double notaAprobatoria) {

        // Verificar que la evaluación exista
        Evaluacion evaluacion = evaluacionService.obtenerEvaluacionPorId(idEvaluacion).orElse(null);
        if (evaluacion == null) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La evaluacion con código:" + idEvaluacion + " no existe.");

        if (notaAprobatoria < 0 || notaAprobatoria > 20) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La nota aprobatoria debe estar entre 0 y 20.");

        // Modificar la nota aprobatoria
        evaluacion.setNotaAprobatoria(notaAprobatoria);
        evaluacionService.guardarEvaluacion(evaluacion);

        return ResponseEntity.ok("Nota aprobatoria modificada con éxito.");
    }

    //Cambiar el estado de la evaluacion de Activo a Cerrado
    @PostMapping("/cerrar/{idEvaluacion}")
    public ResponseEntity<String> cerrarEvaluacion(@PathVariable Long idEvaluacion) {
        // Verificar que la evaluación exista
        Evaluacion evaluacion = evaluacionService.obtenerEvaluacionPorId(idEvaluacion).orElse(null);
        if (evaluacion == null) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La evaluacion con código:" + idEvaluacion + " no existe.");

        // Cambiar el estado de "activo" a "cerrado"
        if ("Activo".equalsIgnoreCase(evaluacion.getEstado())) {
            evaluacion.setEstado("Cerrado");
            evaluacionService.guardarEvaluacion(evaluacion);// Guardar los cambios
            return ResponseEntity.ok("Estado de la evaluación cambiado a Cerrado.");
        }
        return ResponseEntity.ok("Estado sin cambiar.");
    }

}
