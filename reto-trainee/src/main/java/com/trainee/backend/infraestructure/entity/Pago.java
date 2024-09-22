package com.trainee.backend.infraestructure.entity;


import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "pagos")
@Getter
@Setter
@Builder
@RequiredArgsConstructor
@AllArgsConstructor
public class Pago{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "alumno")
    private Alumno alumno;

    private String cuota;
    private BigDecimal monto;
    private LocalDate fechaVencimiento;
    private int estado;
}
