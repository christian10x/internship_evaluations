package Expedition.RetoBackend.Model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "asignacion_evaluador")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AsignacionEvaluador {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idAsignacion;

    @ManyToOne
    @JoinColumn(name = "id_evaluacion")
    private Evaluacion evaluacion;

    @ManyToOne
    @JoinColumn(name = "id_evaluador")
    private Evaluador evaluador;
}

