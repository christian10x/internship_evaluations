package Expedition.RetoBackend.Model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "alumno")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Alumno {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idAlumno;

    private String nombre;
}



