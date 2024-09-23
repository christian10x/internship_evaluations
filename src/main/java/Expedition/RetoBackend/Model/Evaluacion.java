package Expedition.RetoBackend.Model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "evaluacion")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Evaluacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idEvaluacion;

    private String curso;
    private Double notaAprobatoria;
    private String estado;
}
