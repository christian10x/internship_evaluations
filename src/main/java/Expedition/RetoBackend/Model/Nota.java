package Expedition.RetoBackend.Model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "notas")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Nota {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idNota;

    private Double promedio;
    private String resultado;
    private String estado;

    @ManyToOne
    @JoinColumn(name = "id_alumno")
    private Alumno alumno;

    @ManyToOne
    @JoinColumn(name = "id_evaluacion")
    private Evaluacion evaluacion;
}

