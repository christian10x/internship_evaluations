package Expedition.RetoBackend.Service;

import Expedition.RetoBackend.Model.Nota;
import Expedition.RetoBackend.Model.Pregunta;
import Expedition.RetoBackend.Model.RespuestaAlumno;
import Expedition.RetoBackend.Repository.NotaRepository;
import Expedition.RetoBackend.Repository.PreguntaRepository;
import Expedition.RetoBackend.Repository.RespuestaAlumnoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotaService {

    @Autowired
    private NotaRepository notaRepository;

    @Autowired
    private RespuestaAlumnoRepository respuestaAlumnoRepository;
    @Autowired
    PreguntaRepository preguntaRepository;

    public String calcularPromedio(Nota nota) {
        // Obtener las respuestas de la evaluación y el alumno
        List<RespuestaAlumno> respuestas = respuestaAlumnoRepository.findByEvaluacionIdEvaluacionAndAlumnoIdAlumnoOrderByPreguntaOrdenAsc(
                nota.getEvaluacion().getIdEvaluacion(), nota.getAlumno().getIdAlumno());

        // Obtener las preguntas asociadas a la evaluación
        List<Pregunta> preguntas = preguntaRepository.findByEvaluacionIdEvaluacion(nota.getEvaluacion().getIdEvaluacion());

        // Calcular la suma de los pesos
        double sumaPesos = 0.0;
        for (Pregunta p : preguntas) {
            sumaPesos += p.getPeso();
        }

        // Calcular la suma de las calificaciones ponderadas
        double sumaCalificaciones = 0.0;
        StringBuilder jsonBuilder = new StringBuilder();
        jsonBuilder.append("{ \"respuestas\": [");

        for (int i = 0; i < respuestas.size(); i++) {
            RespuestaAlumno respuesta = respuestas.get(i);
            Pregunta pregunta = respuesta.getPregunta();
            double calificacionPonderada = respuesta.getCalificacion() * pregunta.getPeso();

            sumaCalificaciones += calificacionPonderada;

            // Construir el JSON para cada respuesta
            jsonBuilder.append("{").append("\"pregunta ").append(pregunta.getOrden()).append("\": \"").append(pregunta.getEnunciado()).append("\",")
                    .append("\"calificacion\": ").append(respuesta.getCalificacion()).append(",")
                    .append("\"peso\": ").append(pregunta.getPeso())
                    .append("}");

            if (i < respuestas.size() - 1) {
                jsonBuilder.append(",");
            }
        }

        jsonBuilder.append("],");

        // Calcular el promedio
        double promedio = sumaCalificaciones / sumaPesos;

        // Actualizar la entidad Nota
        nota.setPromedio(promedio);
        nota.setResultado(promedio >= respuestas.get(0).getEvaluacion().getNotaAprobatoria() ? "Aprobado" : "Desaprobado");
        nota.setEstado("Cerrado");
        notaRepository.save(nota);

        // Añadir el promedio total al JSON
        jsonBuilder.append("\"promedio\": ").append(promedio).append(",")
                .append("\"resultado\": \"").append(nota.getResultado()).append("\",")
                .append("\"estado\": \"").append(nota.getEstado()).append("\"")
                .append("}");

        return jsonBuilder.toString();
    }

    public Nota obtenerNota(Long idAlumno,Long idEvaluacion){
        return notaRepository.findByEvaluacionIdEvaluacionAndAlumnoIdAlumno(idEvaluacion,idAlumno).orElse(null);
    }

    public Nota guardarNota(Nota nota) {
        return notaRepository.save(nota);
    }
}