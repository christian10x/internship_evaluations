package com.alvaroUTP.alvaroSara.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name="tbl_seccion")
@AllArgsConstructor
@NoArgsConstructor
public class Seccion {
    @Id
    private String id;
    private String nombre;
}