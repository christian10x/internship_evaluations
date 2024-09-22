package com.trainee.backend.domain.dto;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;
@Getter
@Setter
@Builder
public class PagoDto {
    @JacksonXmlProperty(localName = "id")
    private int id;
    @JacksonXmlProperty(localName = "cuota")
    private String cuota;
    @JacksonXmlProperty(localName = "estado")
    private int estado;
    @JacksonXmlProperty(localName = "fechaVencimiento")
    private LocalDate fecha_vencimiento;
    @JacksonXmlProperty(localName = "monto")
    private BigDecimal monto;
    @JacksonXmlProperty(localName = "alumno")
    private String alumno;
}
