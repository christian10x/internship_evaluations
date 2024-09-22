package com.trainee.backend.domain.service.impl;

import com.trainee.backend.domain.dto.PagoDto;
import com.trainee.backend.domain.request.PagoRequest;
import com.trainee.backend.domain.service.PagoService;
import com.trainee.backend.infraestructure.entity.Alumno;
import com.trainee.backend.infraestructure.entity.Pago;
import com.trainee.backend.infraestructure.repository.AlumnoRepository;
import com.trainee.backend.infraestructure.repository.PagoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PagoServiceImpl implements PagoService {

    private final PagoRepository pagoRepository;
    private final AlumnoRepository alumnoRepository;

    @Override
    public List<PagoDto> listarPagos() {
        List<Pago> pagos = pagoRepository.findAll();
        return pagosToListDto(pagos);

    }
    @Override
    public Map<String, String> verificarPago(PagoRequest newPago) {
        //validaciones del monto
        Map<String, String> errores = new HashMap<>();
        String errorMonto = "";
        if(!validarMontoIngresado(newPago)){
            errorMonto += "el monto ingresado es incorrecto o nulo";
            errores.put("monto", errorMonto);
        } else if (!validarSignoMonto(newPago)) {
            errorMonto += "el monto debe ser mayor a 0";
            errores.put("monto", errorMonto);
        }

        //validaciones del alumno
        if (!alumnoRepository.existsByCodigo(newPago.getAlumno())) {
            errores.put("alumno", "el alumno no es válido");
        }
        //validaciones de fecha
        if (!validarFechaVencimiento(newPago)) {
            errores.put("fecha", "la fecha ingresada no es correcta");
        }
        //validaciones de cuota
        if(!validarCuota(newPago)){
            errores.put("cuota", "la cuota ingresada es nula");
        }
        //validacion de estado
        if(!validarEstado(newPago)){
            errores.put("estado", "el estado ingresado es nulo o incorrecto, los valores permitidos son 1 (pagado) o 0 (pendiente");
        }
        return errores;
    }



    @Override
    public Optional<Pago> registrarPago(PagoRequest newPago) {
        Optional<Pago> pagoOp = getPagoEntity(newPago);
        return pagoOp.map(pagoRepository::save);
    }



    @Override
    public List<PagoDto> listarPagosPendientes() {
        return listarPagos().stream()
                .filter(p -> p.getEstado() == 0)
                .collect(Collectors.toList());
    }

    private Optional<Pago> getPagoEntity(PagoRequest pagoRequest){
        Optional<Alumno> alumnoOp = alumnoRepository.findByCodigo(pagoRequest.getAlumno());
        if(alumnoOp.isEmpty()){
            return Optional.empty();
        }
        Pago pago = Pago.builder()
                .alumno(alumnoOp.get())
                .cuota(pagoRequest.getCuota())
                .monto(BigDecimal.valueOf(Double.parseDouble(pagoRequest.getMonto())))
                .fechaVencimiento(LocalDate.parse(pagoRequest.getFecha_vencimiento()))
                .estado(Integer.parseInt(pagoRequest.getEstado()))
                .build();
        return Optional.of(pago);
    }

    private List<PagoDto> pagosToListDto(List<Pago> pagos){
        List<PagoDto> pagosDto = new ArrayList<>();
        for(Pago p : pagos){
            pagosDto.add(pagoToDto(p));
        }
        return pagosDto;
    }

    private PagoDto pagoToDto(Pago pago){
        return PagoDto.builder()
                .id(pago.getId())
                .alumno(pago.getAlumno().getCodigo())
                .cuota(pago.getCuota())
                .monto(pago.getMonto())
                .fecha_vencimiento(pago.getFechaVencimiento())
                .estado(pago.getEstado())
                .build();

    }

    private boolean validarSignoMonto(PagoRequest newPago){
        return BigDecimal.valueOf(Double.parseDouble(newPago.getMonto())).compareTo(BigDecimal.ZERO) > 0;
    }
    private boolean validarMontoIngresado(PagoRequest newPago){
        boolean montoValido;
        try{
            BigDecimal.valueOf(Double.parseDouble(newPago.getMonto()));
            montoValido = true;
        } catch (Exception e){
            montoValido = false;
        }
        return  montoValido;
    }


    private boolean validarFechaVencimiento(PagoRequest newPago){
        boolean fechaValidation;
        try {
            LocalDate fechaVencimiento = LocalDate.parse(newPago.getFecha_vencimiento());
            fechaValidation = true;
        } catch (DateTimeParseException e) {
            fechaValidation = false;
        }
        return fechaValidation;
    }

    private boolean validarCuota(PagoRequest newPago){
        String cuota = newPago.getCuota();
        if (cuota == null || cuota.equals("")){
            return false;
        }
        return true;
    }

    private boolean validarEstado(PagoRequest newPago){
        String estado = newPago.getEstado();
        if(estado == null || estado.equals("") || (!estado.equals("1") && !estado.equals("0"))){
            return false;
        }
        return true;
    }
}
