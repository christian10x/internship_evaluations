package com.alvaroUTP.alvaroSara.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name="tbl_calificaciones")
@AllArgsConstructor
@NoArgsConstructor
public class Calificacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private double nota;
    @ManyToOne
    private Matricula matricula;
    @ManyToOne
    private Evaluacion evaluacion;
}

