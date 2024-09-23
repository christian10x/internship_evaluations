package Expedition.RetoBackend.Model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "respuestas_alumno")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class RespuestaAlumno {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idRespuesta;

    private String respuesta;
    private double calificacion;

    @ManyToOne
    @JoinColumn(name = "id_alumno")
    private Alumno alumno;

    @ManyToOne
    @JoinColumn(name = "id_evaluacion")
    private Evaluacion evaluacion;

    @ManyToOne
    @JoinColumn(name = "id_pregunta")
    private Pregunta pregunta;
}

