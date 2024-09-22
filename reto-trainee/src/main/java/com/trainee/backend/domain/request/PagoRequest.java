package com.trainee.backend.domain.request;

import lombok.Getter;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
public class PagoRequest {
    private String alumno;
    private String cuota;
    private String monto;
    private String fecha_vencimiento;
    private String estado;
}
