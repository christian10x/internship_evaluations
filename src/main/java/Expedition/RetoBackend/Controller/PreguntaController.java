package Expedition.RetoBackend.Controller;

import Expedition.RetoBackend.Model.Evaluacion;
import Expedition.RetoBackend.Model.Pregunta;
import Expedition.RetoBackend.Service.EvaluacionService;
import Expedition.RetoBackend.Service.PreguntaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/preguntas")
public class PreguntaController {

    @Autowired
    private PreguntaService preguntaService;

    @Autowired
    private EvaluacionService evaluacionService;

    // Modificar el peso de las preguntas asociadas a una evaluación
    @PostMapping("/modificar-peso/{idEvaluacion}/Preg/{nroPregunta}")
    public ResponseEntity<String> modificarPesoPreguntas(@PathVariable Long idEvaluacion,@PathVariable Long nroPregunta, @RequestParam Double peso) {

        // Verificar que la evaluación exista
        Evaluacion evaluacion = evaluacionService.obtenerEvaluacionPorId(idEvaluacion).orElse(null);
        if (evaluacion == null) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La evaluacion con código:" + idEvaluacion + " no existe.");

        //Si existe la pregunta
        Pregunta pregunta = preguntaService.obtenerPorEvaluacionPorNumero(idEvaluacion, nroPregunta).orElse(null);
        if (pregunta == null) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La pregunta buscada para esta evaluacion no existe.");

        if (peso < 0) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Ingrese un peso positivo.");

        pregunta.setPeso(peso);
        preguntaService.guardarPregunta(pregunta);

        return ResponseEntity.ok("Se actulizo el peso de la pregunta correctamente.");
    }
}