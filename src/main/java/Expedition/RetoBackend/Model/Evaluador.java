package Expedition.RetoBackend.Model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "evaluador")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Evaluador {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idEvaluador;

    private String nombre;
}
